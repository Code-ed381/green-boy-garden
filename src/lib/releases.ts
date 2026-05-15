export interface Release {
  id: string;
  title: string;
  artist: string;
  type: "SINGLE" | "EP" | "ALBUM";
  year: number;
  streams: string;
  coverColor: string;
  initials: string;
  coverImage: string;
  genre?: string;
  duration?: string;
  trackCount?: number;
  featured?: boolean;
  explicit?: boolean;
  spotifyUrl?: string;
  appleUrl?: string;
  youtubeUrl?: string;
  audiomackUrl?: string;
}

export const releases: Release[] = [
  // OliveTheBoy releases
  {
    id: "1",
    title: "lala",
    artist: "OliveTheBoy",
    type: "SINGLE",
    year: 2026,
    streams: "1M+",
    coverColor: "#0f1208",
    initials: "OTB",
    coverImage: "/olive/lala.png",
    genre: "Afrobeats",
    duration: "3:24",
    featured: true,
    explicit: false,
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
    audiomackUrl: "#",
  },
  {
    id: "2",
    title: "Spidomita",
    artist: "OliveTheBoy",
    type: "SINGLE",
    year: 2025,
    streams: "800K",
    coverColor: "#100e08",
    initials: "OTB",
    coverImage: "/olive/olive3.png",
    genre: "Afrobeats",
    duration: "2:58",
    featured: false,
    explicit: false,
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
    audiomackUrl: "#",
  },
  {
    id: "3",
    title: "Out Of The Blue EP",
    artist: "OliveTheBoy",
    type: "EP",
    year: 2025,
    streams: "1.2M",
    coverColor: "#0a0f14",
    initials: "OTB",
    coverImage: "/olive/olive4.png",
    genre: "Afrobeats",
    trackCount: 6,
    featured: false,
    explicit: false,
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
    audiomackUrl: "#",
  },
  {
    id: "4",
    title: "AVANA EP",
    artist: "OliveTheBoy",
    type: "EP",
    year: 2023,
    streams: "2.1M",
    coverColor: "#0e080f",
    initials: "OTB",
    coverImage: "/olive/asylum.png",
    genre: "Afrobeats",
    trackCount: 7,
    featured: false,
    explicit: true,
    spotifyUrl: "#",
    appleUrl: "#",
    youtubeUrl: "#",
    audiomackUrl: "#",
  },
];

export const artists = ["All", "OliveTheBoy", "GoodSin", "Spidomita"];
export const genres = ["All", "Afrobeats", "Hiplife", "R&B"];
