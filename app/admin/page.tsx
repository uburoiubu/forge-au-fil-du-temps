import Link from 'next/link'
import { createClient } from '@/lib/supabase/server'
import EventRow from './components/EventRow'

export default async function AdminPage() {
  const supabase = await createClient()

  const { data: events } = await supabase
    .from('events')
    .select('id, title, event_date, published')
    .order('event_date', { ascending: false, nullsFirst: true })

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold">Événements</h1>
        <Link
          href="/admin/events/new"
          className="bg-neutral-800 dark:bg-neutral-200 text-white dark:text-neutral-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-neutral-700 dark:hover:bg-neutral-300 transition"
        >
          + Ajouter
        </Link>
      </div>

      {(!events || events.length === 0) ? (
        <p className="text-neutral-400 text-center py-16">Aucun événement pour l'instant.</p>
      ) : (
        <div className="space-y-2">
          {events.map(event => (
            <EventRow key={event.id} event={event} />
          ))}
        </div>
      )}
    </div>
  )
}
