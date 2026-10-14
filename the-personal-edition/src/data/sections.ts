export type SectionKey = 'lab' | 'magazine' | 'guide' | 'index';

export interface Section {
  key: SectionKey;
  n: string;
  name: string;
  kicker: string;
  dek: string;
  intro: string;
  aside: { title: string; items: string[] };
  series: { name: string; note: string };
}

export const SECTIONS: Section[] = [
  {
    key: 'lab', n: '01', name: 'The Lab', kicker: 'Research', dek: 'Experiments and discoveries',
    intro: 'Computational biology, drug discovery and the figures that explain them, presented with the care of a magazine rather than an academic portfolio.',
    aside: { title: 'Methods & code', items: ['Every project links to its GitHub repository', 'Methods written in plain language', 'Figures with full captions and sources'] },
    series: { name: 'Experiments in Progress', note: 'Projects still being explored, published as they evolve.' },
  },
  {
    key: 'magazine', n: '02', name: 'The Magazine', kicker: 'Culture', dek: 'Words and images',
    intro: 'Essays, photographic editorials and criticism, gathered into occasional issues rather than a constant feed.',
    aside: { title: 'In every issue', items: ['One long essay', 'One photographic editorial', 'Two short columns', 'A page of criticism'] },
    series: { name: 'Sincerely, Me', note: 'The personal essays, collected in one place.' },
  },
  {
    key: 'guide', n: '03', name: 'The Tourist Guide', kicker: 'Places', dek: 'Notes from elsewhere',
    intro: 'Guides by someone who likes to observe places rather than tick off attractions: neighbourhoods, cafés, bookshops and long walks.',
    aside: { title: 'Each guide includes', items: ['A personal map', 'Where to sit, eat and read', 'Photographs with location labels', 'One thing I would skip'] },
    series: { name: 'Places Worth Getting Lost In', note: 'Short lists, one city at a time.' },
  },
  {
    key: 'index', n: '04', name: 'The Index', kicker: 'References', dek: 'Things worth keeping',
    intro: 'A personal reference library of books, films, papers, people and small discoveries. An entry takes five minutes to write.',
    aside: { title: 'Filed under', items: ['Books, films, albums, exhibitions', 'Papers and ideas', 'Photographers, designers, artists', 'Objects, quotations, websites'] },
    series: { name: 'To learn someday', note: 'A running list of things to explore.' },
  },
];

export const sectionByKey = (key: string) => SECTIONS.find((s) => s.key === key);
