'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import { createAdminClient } from '@/lib/supabase/admin'

type ImageInput = {
  url: string
  storage_path: string
  alt: string
}

export async function createEvent(data: {
  title: string
  description: string
  event_date: string
  event_time: string
  published: boolean
  images: ImageInput[]
}): Promise<{ error?: string }> {
  const supabase = await createClient()

  const { data: event, error } = await supabase
    .from('events')
    .insert({
      title: data.title,
      description: data.description || null,
      event_date: data.event_date || null,
      event_time: data.event_time || null,
      published: data.published,
    })
    .select()
    .single()

  if (error || !event) return { error: error?.message ?? 'Erreur lors de la création' }

  if (data.images.length > 0) {
    const { error: imgError } = await supabase.from('event_images').insert(
      data.images.map((img, i) => ({
        event_id: event.id,
        url: img.url,
        storage_path: img.storage_path,
        alt: img.alt,
        sort_order: i,
      }))
    )
    if (imgError) return { error: imgError.message }
  }

  revalidatePath('/events')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function updateEvent(
  id: string,
  data: {
    title: string
    description: string
    event_date: string
    event_time: string
    published: boolean
    new_images: ImageInput[]
    delete_image_ids: string[]
    delete_storage_paths: string[]
  }
): Promise<{ error?: string }> {
  const supabase = await createClient()
  const admin = createAdminClient()

  const { error } = await supabase
    .from('events')
    .update({
      title: data.title,
      description: data.description || null,
      event_date: data.event_date || null,
      event_time: data.event_time || null,
      published: data.published,
    })
    .eq('id', id)

  if (error) return { error: error.message }

  if (data.delete_image_ids.length > 0) {
    await supabase.from('event_images').delete().in('id', data.delete_image_ids)
    if (data.delete_storage_paths.length > 0) {
      await admin.storage.from('event-images').remove(data.delete_storage_paths)
    }
  }

  if (data.new_images.length > 0) {
    const { data: existing } = await supabase
      .from('event_images')
      .select('sort_order')
      .eq('event_id', id)
      .order('sort_order', { ascending: false })
      .limit(1)

    const baseOrder = (existing?.[0]?.sort_order ?? -1) + 1

    const { error: imgError } = await supabase.from('event_images').insert(
      data.new_images.map((img, i) => ({
        event_id: id,
        url: img.url,
        storage_path: img.storage_path,
        alt: img.alt,
        sort_order: baseOrder + i,
      }))
    )
    if (imgError) return { error: imgError.message }
  }

  revalidatePath('/events')
  revalidatePath('/admin')
  redirect('/admin')
}

export async function deleteEvent(id: string): Promise<{ error?: string }> {
  const supabase = await createClient()
  const admin = createAdminClient()

  const { data: images } = await supabase
    .from('event_images')
    .select('storage_path')
    .eq('event_id', id)

  const { error } = await supabase.from('events').delete().eq('id', id)
  if (error) return { error: error.message }

  if (images && images.length > 0) {
    await admin.storage.from('event-images').remove(images.map(img => img.storage_path))
  }

  revalidatePath('/events')
  revalidatePath('/admin')
  return {}
}

export async function signOut() {
  const supabase = await createClient()
  await supabase.auth.signOut()
  redirect('/admin/login')
}
