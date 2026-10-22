import { notFound } from 'next/navigation'
import { createClient } from '@/lib/supabase/server'
import EventForm from '../../../components/EventForm'

export default async function EditEventPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const supabase = await createClient()

  const { data: event } = await supabase
    .from('events')
    .select('id, title, description, event_date, event_time, published, event_images(id, url, storage_path, alt, sort_order)')
    .eq('id', id)
    .single()

  if (!event) notFound()

  const eventData = {
    ...event,
    event_images: [...(event.event_images ?? [])].sort(
      (a: { sort_order: number }, b: { sort_order: number }) => a.sort_order - b.sort_order
    ),
  }

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-6">Modifier l&apos;événement</h1>
      <EventForm event={eventData} />
    </div>
  )
}
