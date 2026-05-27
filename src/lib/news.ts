export interface NewsItem {
  id: string;
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  image?: string;
  category: string;
}

export const news: NewsItem[] = [
  {
    id: "1",
    slug: "daashi-caashi-out-now",
    title: "Daashi (Caashi) Out Now",
    date: "27 MAY 2026",
    excerpt:
      "OliveTheBoy links up with Beeztrap KOTM, LAMI JNR & Pinto Black for a new anthem.",
    content: `OliveTheBoy returns with "Daashi (Caashi)", a collaboration featuring Beeztrap KOTM, LAMI JNR, and Pinto Black. The track blends infectious Afrobeats rhythms with raw lyricism, showcasing the depth of Ghana's new wave.

Produced by BeatzVampire, the record has already amassed 800K+ streams in its first week. The accompanying visual, directed by Kofi Kay, captures the energy of Accra's vibrant streets.

Stream "Daashi (Caashi)" on all major platforms now.`,
    image: "/olive/dashi.png",
    category: "Music",
  },
  {
    id: "2",
    slug: "goodsin-20m-streams",
    title: "GoodSin Crosses 20 Million Streams",
    date: "15 MAY 2026",
    excerpt:
      "The breakout hit that defined an era reaches another major milestone.",
    content: `"GoodSin" has officially surpassed 20 million streams across all platforms, cementing its place as one of the most-streamed Ghanaian songs of 2023. The track, produced by BeatzVampire, was a defining moment in OliveTheBoy's career.

The song's success led to a remix featuring King Promise, Oxlade, and Reekado Banks, and opened doors for international recognition. Streams continue to grow steadily, with the track averaging over a million monthly listeners on Spotify alone.

This milestone is a testament to the power of authentic Afrobeats storytelling.`,
    image: "/olive/avana.png",
    category: "Milestone",
  },
  {
    id: "3",
    slug: "tgma-2025-wins",
    title: "Back-to-Back Afrobeats Song of the Year",
    date: "10 MAY 2026",
    excerpt:
      "OliveTheBoy takes home Afrobeats Song of the Year for the second consecutive year.",
    content: `For the second year running, OliveTheBoy has won Afrobeats Song of the Year at the Telecel Ghana Music Awards (TGMA). The 2025 ceremony saw him take the award for "GoodSin (Remix)" — a follow-up to his 2024 win for the original track.

The back-to-back wins place OliveTheBoy in an elite group of Ghanaian artists who have achieved this feat. In his acceptance speech, he dedicated the award to the growing community of alternative Afrobeats artists pushing the sound forward.

"I make music for the ones who feel it in their bones," he said. "This is for every kid in Kumasi with a dream."`,
    image: "/olive/tgma2025.jpeg",
    category: "Awards",
  },
  {
    id: "4",
    slug: "out-of-the-blue-ep",
    title: "Out of the Blue EP Makes Waves",
    date: "11 APR 2025",
    excerpt:
      "The 8-track project features Sarkodie, Mayorkun, Qing Madi & more.",
    content: `"Out of the Blue", OliveTheBoy's latest EP, dropped on April 11 via BuVision / Loop Music / Columbia Records. The 8-track project showcases his range — from Afrobeats bangers to soulful R&B cuts.

Featuring heavy-hitters like Sarkodie ("Bend"), Mayorkun ("A Fuul"), Qing Madi ("Survivor"), Soundz ("Design"), and Veola ("Convo"), the EP has amassed over 20 million streams across platforms.

The project represents a sonic evolution for OliveTheBoy, experimenting with new production techniques while staying true to his Ghanaian roots.`,
    image: "/olive/olive4.png",
    category: "Music",
  },
  {
    id: "5",
    slug: "you-and-i-remix-sarkodie",
    title: "You & I (Remix) with Sarkodie",
    date: "20 MAR 2025",
    excerpt:
      "OliveTheBoy joins Sarkodie on the remix of the hit record.",
    content: `Sarkodie enlisted OliveTheBoy for the official remix of "You & I", merging two generations of Ghanaian hip-hop and Afrobeats. The track quickly became a fan favorite, amassing 6M+ streams.

The collaboration was natural — both artists share a Kumasi connection and a commitment to elevating Ghanaian music on the global stage. The remix adds a fresh verse from OliveTheBoy, balancing Sarkodie's rapid-fire delivery with his melodic flow.

The music video, shot in Accra, captures the electric chemistry between the two stars.`,
    image: "/olive/you.png",
    category: "Music",
  },
  {
    id: "6",
    slug: "avana-deluxe-anniversary",
    title: "Avana (Deluxe) Turns One",
    date: "15 JAN 2025",
    excerpt:
      "Celebrating a year of the deluxe edition that expanded the Avana universe.",
    content: `A year after the release of "Avana (Deluxe)", the project continues to resonate with fans worldwide. The deluxe edition added three new tracks including the massive "Asylum" and the star-studded "GoodSin (Remix)" featuring King Promise, Oxlade, and Reekado Banks.

"Avana" originally dropped in May 2023 and quickly became a cornerstone of OliveTheBoy's discography. The deluxe version pushed the project's total streams past 25 million, with "Asylum" alone crossing 10 million streams.

The project's longevity speaks to the timeless quality of the songwriting and production.`,
    image: "/olive/asylum.png",
    category: "Milestone",
  },
];
