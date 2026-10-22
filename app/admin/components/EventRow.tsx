'use client'

import Link from 'next/link'
import { useState, useTransition } from 'react'
import { deleteEvent } from '../actions'

type Event = {
  id: string
  title: string
  event_date: string | null
  published: boolean
}

export default function EventRow({ event }: { event: Event }) {
  const [isPending, startTransition] = useTransition()
  const [confirming, setConfirming] = useState(false)

  function handleDeleteConfirmed() {
    startTransition(async () => {
      await deleteEvent(event.id)
    })
  }

  const dateDisplay = event.event_date
    ? new Date(event.event_date + 'T00:00:00').toLocaleDateString('fr-FR', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    : '—'

  if (confirming) {
    return (
      <div className="bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg px-5 py-4 flex items-center gap-4">
        <p className="flex-1 text-sm text-red-700 dark:text-red-300">
          Supprimer <strong>«&nbsp;{event.title}&nbsp;»</strong> ? Cette action est irréversible.
        </p>
        <button
          onClick={handleDeleteConfirmed}
          disabled={isPending}
          className="shrink-0 text-sm font-medium bg-red-600 hover:bg-red-700 text-white px-3 py-1.5 rounded-lg disabled:opacity-50 transition"
        >
          {isPending ? '…' : 'Oui, supprimer'}
        </button>
        <button
          onClick={() => setConfirming(false)}
          disabled={isPending}
          className="shrink-0 text-sm text-neutral-500 dark:text-neutral-400 hover:text-neutral-700 dark:hover:text-neutral-200 transition"
        >
          Annuler
        </button>
      </div>
    )
  }

  return (
    <div
      className={`bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-lg px-5 py-4 flex items-center gap-4 transition ${isPending ? 'opacity-50' : ''}`}
    >
      <div className="flex-1 min-w-0">
        <p className="font-medium truncate">{event.title}</p>
        <p className="text-sm text-neutral-400 dark:text-neutral-500">{dateDisplay}</p>
      </div>
      <span
        className={`shrink-0 text-xs font-medium px-2.5 py-1 rounded-full ${
          event.published
            ? 'bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300'
            : 'bg-neutral-100 dark:bg-neutral-700 text-neutral-500 dark:text-neutral-400'
        }`}
      >
        {event.published ? 'Visible' : 'Masqué'}
      </span>
      <Link
        href={`/admin/events/${event.id}/edit`}
        className="shrink-0 text-sm text-blue-600 dark:text-blue-400 hover:underline"
      >
        Modifier
      </Link>
      <button
        onClick={() => setConfirming(true)}
        className="shrink-0 text-sm text-red-500 hover:text-red-700 transition"
      >
        Supprimer
      </button>
    </div>
  )
}
