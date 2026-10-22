-- ============================================================
-- La Forge au fil du temps — Supabase setup
-- Run this in the Supabase SQL editor
-- ============================================================

-- Events table
create table public.events (
  id          uuid        default gen_random_uuid() primary key,
  title       text        not null,
  description text,
  event_date  date,
  published   boolean     default true,
  created_at  timestamptz default now()
);

-- Event images table (multiple images per event)
create table public.event_images (
  id           uuid        default gen_random_uuid() primary key,
  event_id     uuid        references public.events(id) on delete cascade not null,
  url          text        not null,
  storage_path text        not null,
  alt          text        default '',
  sort_order   integer     default 0,
  created_at   timestamptz default now()
);

-- Row Level Security
alter table public.events       enable row level security;
alter table public.event_images enable row level security;

-- Public can read published events
create policy "Public read published events"
  on public.events for select
  using (published = true);

-- Public can read all event images
create policy "Public read event images"
  on public.event_images for select
  using (true);

-- Authenticated users (admin) have full access
create policy "Admin manage events"
  on public.events for all
  using (auth.role() = 'authenticated');

create policy "Admin manage event images"
  on public.event_images for all
  using (auth.role() = 'authenticated');

-- ============================================================
-- Storage bucket
-- Run this OR create the bucket manually in the dashboard
-- ============================================================

insert into storage.buckets (id, name, public)
values ('event-images', 'event-images', true);

create policy "Public read event images storage"
  on storage.objects for select
  using (bucket_id = 'event-images');

create policy "Admin upload event images"
  on storage.objects for insert
  with check (bucket_id = 'event-images' and auth.role() = 'authenticated');

create policy "Admin delete event images"
  on storage.objects for delete
  using (bucket_id = 'event-images' and auth.role() = 'authenticated');

-- ============================================================
-- After running this SQL:
-- 1. Go to Authentication > Users in the Supabase dashboard
-- 2. Click "Add user" and create the admin account (email + password)
-- 3. Copy your Project URL and keys to .env.local
-- ============================================================
