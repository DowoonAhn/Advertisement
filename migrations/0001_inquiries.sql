-- Landing-page inquiry leads ("도입 문의"). No accounts on this site, so rows
-- are unowned — every submission is world-writable, world-readable by design.
-- Never store anything beyond what the inquiry form itself collects.

create table if not exists inquiries (
  id bigint generated always as identity primary key,
  name text not null,
  phone text not null,
  site text,
  kind text not null,
  chargers integer,
  note text,
  created_at timestamptz not null default now()
);
