'use client'

import Link from 'next/link'
import { useTransition } from 'react'
import { deleteEvent } from '../actions'

type Event = {
  id: string
  title: string
  event_date: string | null
  published: boolean
}

export default function EventRow({ event }: { event: Event }) {
  const [isPending, startTransition] = useTransition()

  function handleDelete() {
    if (!confirm(`Supprimer "${event.title}" ? Cette action est irréversible.`)) return
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
        onClick={handleDelete}
        disabled={isPending}
        className="shrink-0 text-sm text-red-500 hover:text-red-700 disabled:opacity-50 transition"
      >
        Supprimer
      </button>
    </div>
  )
}
