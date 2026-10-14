import { getCollection, type CollectionEntry } from 'astro:content';
import type { SectionKey } from './sections';

export type Entry = CollectionEntry<'entries'>;

export const sectionOf = (e: Entry) => e.id.split('/')[0] as SectionKey;
export const slugOf = (e: Entry) => e.id.split('/').slice(1).join('/');

/** Published entries, newest first. Drafts show only in `npm run dev`. */
export async function getEntries(section?: SectionKey) {
  const all = await getCollection('entries', (e) => import.meta.env.DEV || !e.data.draft);
  return all
    .filter((e) => !section || sectionOf(e) === section)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

export const href = (path: string) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`;
export const entryHref = (e: Entry) => href(`/${sectionOf(e)}/${slugOf(e)}/`);

export const fmtMonth = (d: Date) => d.toLocaleDateString('en-GB', { month: 'short', year: 'numeric' });
export const fmtDay = (d: Date) => d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
