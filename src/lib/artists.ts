export interface Artist {
  id: string;
  name: string;
  genre: string;
  city: string;
  initials: string;
  streams: string;
  bio: string;
  releases: Release[];
  backgroundColor: string;
}

export interface Release {
  title: string;
  year: number;
  streams: string;
}

export const artists: Artist[] = [
  {
    id: '1',
    name: 'OliveTheBoy',
    genre: 'Afrobeats',
    city: 'Accra',
    initials: 'OTB',
    streams: '12.5M',
    bio: 'OliveTheBoy is a pioneering voice in modern Afrobeats, blending traditional Ghanaian rhythms with contemporary sounds. His unique style has captivated audiences across West Africa and beyond. With multiple hit singles and a growing international following, he represents the new wave of Ghanaian musical excellence.',
    releases: [
      { title: 'Avana EP', year: 2024, streams: '8.2M' },
      { title: 'GoodLife', year: 2023, streams: '3.1M' },
      { title: 'Midnight Dreams', year: 2023, streams: '1.2M' }
    ],
    backgroundColor: '#0f1208'
  },

];

export const genres = ['All', 'Afrobeats', 'Hiplife', 'R&B', 'Afropop'];
