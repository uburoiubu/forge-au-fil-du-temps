'use client'

import { useState, useTransition, useRef } from 'react'
import { createClient } from '@/lib/supabase/client'
import { createEvent, updateEvent } from '../actions'

type ExistingImage = {
  id: string
  url: string
  storage_path: string
  alt: string
}

type EventFormProps = {
  event?: {
    id: string
    title: string
    description: string | null
    event_date: string | null
    event_time: string | null
    published: boolean
    event_images: ExistingImage[]
  }
}

export default function EventForm({ event }: EventFormProps) {
  const isEdit = !!event
  const [isPending, startTransition] = useTransition()
  const [error, setError] = useState('')
  const [uploading, setUploading] = useState(false)

  const [title, setTitle] = useState(event?.title ?? '')
  const [description, setDescription] = useState(event?.description ?? '')
  const [eventDate, setEventDate] = useState(event?.event_date ?? '')
  const [eventTime, setEventTime] = useState(event?.event_time ?? '')
  const [published, setPublished] = useState(event?.published ?? true)

  const [existingImages, setExistingImages] = useState<ExistingImage[]>(
    event?.event_images ?? []
  )
  const [deletedImageIds, setDeletedImageIds] = useState<string[]>([])
  const [deletedStoragePaths, setDeletedStoragePaths] = useState<string[]>([])
  const [newFiles, setNewFiles] = useState<File[]>([])
  const [newPreviews, setNewPreviews] = useState<string[]>([])
  const fileInputRef = useRef<HTMLInputElement>(null)

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const files = Array.from(e.target.files ?? [])
    if (!files.length) return
    setNewFiles(prev => [...prev, ...files])
    files.forEach(f => {
      const reader = new FileReader()
      reader.onload = ev => {
        setNewPreviews(prev => [...prev, ev.target?.result as string])
      }
      reader.readAsDataURL(f)
    })
    if (fileInputRef.current) fileInputRef.current.value = ''
  }

  function removeNewFile(index: number) {
    setNewFiles(prev => prev.filter((_, i) => i !== index))
    setNewPreviews(prev => prev.filter((_, i) => i !== index))
  }

  function removeExistingImage(img: ExistingImage) {
    setExistingImages(prev => prev.filter(i => i.id !== img.id))
    setDeletedImageIds(prev => [...prev, img.id])
    setDeletedStoragePaths(prev => [...prev, img.storage_path])
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setError('')
    setUploading(true)

    const supabase = createClient()
    const uploadedImages: Array<{ url: string; storage_path: string; alt: string }> = []

    for (const file of newFiles) {
      const ext = file.name.split('.').pop()
      const path = `events/${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`
      const { error: uploadError } = await supabase.storage
        .from('event-images')
        .upload(path, file, { contentType: file.type })

      if (uploadError) {
        setError(`Erreur lors du téléversement de "${file.name}". Vérifiez la connexion et réessayez.`)
        setUploading(false)
        return
      }

      const { data: { publicUrl } } = supabase.storage.from('event-images').getPublicUrl(path)
      uploadedImages.push({
        url: publicUrl,
        storage_path: path,
        alt: file.name.replace(/\.[^.]+$/, ''),
      })
    }

    setUploading(false)

    startTransition(async () => {
      const result = isEdit
        ? await updateEvent(event.id, {
            title,
            description,
            event_date: eventDate,
            event_time: eventTime,
            published,
            new_images: uploadedImages,
            delete_image_ids: deletedImageIds,
            delete_storage_paths: deletedStoragePaths,
          })
        : await createEvent({
            title,
            description,
            event_date: eventDate,
            event_time: eventTime,
            published,
            images: uploadedImages,
          })

      if (result?.error) {
        setError('Une erreur est survenue : ' + result.error)
      }
    })
  }

  const isLoading = uploading || isPending
  const loadingLabel = uploading ? 'Téléversement des photos…' : 'Enregistrement…'

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Title */}
      <div>
        <label className="block font-medium mb-1" htmlFor="title">
          Titre <span className="text-red-500">*</span>
        </label>
        <input
          id="title"
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          required
          className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400"
          placeholder="Ex : Journées du patrimoine 2025"
        />
      </div>

      {/* Date + Time */}
      <div className="flex gap-4 flex-wrap">
        <div>
          <label className="block font-medium mb-1" htmlFor="event_date">
            Date
          </label>
          <input
            id="event_date"
            type="date"
            value={eventDate}
            onChange={e => setEventDate(e.target.value)}
            className="border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
        </div>
        <div>
          <label className="block font-medium mb-1" htmlFor="event_time">
            Heure <span className="text-neutral-400 font-normal text-sm">(optionnel)</span>
          </label>
          <input
            id="event_time"
            type="time"
            value={eventTime}
            onChange={e => setEventTime(e.target.value)}
            className="border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400"
          />
        </div>
      </div>

      {/* Description */}
      <div>
        <label className="block font-medium mb-1" htmlFor="description">
          Description
        </label>
        <textarea
          id="description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          rows={7}
          className="w-full border border-neutral-300 dark:border-neutral-600 bg-white dark:bg-neutral-700 rounded-lg px-3 py-2 text-base focus:outline-none focus:ring-2 focus:ring-neutral-400 resize-y"
          placeholder="Décrivez l'événement…"
        />
      </div>

      {/* Photos */}
      <div>
        <p className="block font-medium mb-2">Photos</p>

        {existingImages.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            {existingImages.map(img => (
              <div key={img.id} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={img.url}
                  alt={img.alt}
                  className="w-full h-32 object-cover rounded-lg border border-neutral-200 dark:border-neutral-600"
                />
                <button
                  type="button"
                  onClick={() => removeExistingImage(img)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  aria-label="Supprimer cette photo"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        {newPreviews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-3">
            {newPreviews.map((src, i) => (
              <div key={i} className="relative group">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={src}
                  alt={`Nouvelle photo ${i + 1}`}
                  className="w-full h-32 object-cover rounded-lg border-2 border-dashed border-blue-300"
                />
                <button
                  type="button"
                  onClick={() => removeNewFile(i)}
                  className="absolute top-1 right-1 bg-red-600 text-white rounded-full w-6 h-6 text-xs leading-none flex items-center justify-center opacity-0 group-hover:opacity-100 transition"
                  aria-label="Retirer cette photo"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>
        )}

        <label className="cursor-pointer inline-flex items-center gap-2 border-2 border-dashed border-neutral-300 dark:border-neutral-600 rounded-lg px-4 py-3 text-sm text-neutral-500 dark:text-neutral-400 hover:border-neutral-400 dark:hover:border-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 transition">
          + Ajouter des photos
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept="image/*"
            onChange={handleFileChange}
            className="sr-only"
          />
        </label>
      </div>

      {/* Published */}
      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          id="published"
          checked={published}
          onChange={e => setPublished(e.target.checked)}
          className="w-4 h-4 accent-neutral-800 cursor-pointer"
        />
        <label htmlFor="published" className="font-medium cursor-pointer select-none">
          Visible sur le site
        </label>
      </div>

      {error && (
        <p className="text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg px-4 py-3 text-sm">
          {error}
        </p>
      )}

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          disabled={isLoading}
          className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 px-6 py-2.5 rounded-lg font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 disabled:opacity-50 transition"
        >
          {isLoading ? loadingLabel : 'Enregistrer'}
        </button>
        <a
          href="/admin"
          className="px-6 py-2.5 rounded-lg font-medium border border-neutral-300 dark:border-neutral-600 hover:bg-neutral-50 dark:hover:bg-neutral-700 transition text-center"
        >
          Annuler
        </a>
      </div>
    </form>
  )
}
