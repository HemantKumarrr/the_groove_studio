// ============================================================
// GENRES DATA — Edit this file to add/remove/update your work
// ============================================================

export interface Track {
  id: string;
  title: string;
  artist: string;
  // Paste your YouTube video URL here (full URL e.g. https://www.youtube.com/watch?v=XXXXXXXXXXX)
  youtubeUrl: string;
  // Paste the path to your local audio file here (place file in /public/audio/ folder)
  // e.g. '/audio/bollywood/song1.mp3'  — set to '' if not available
  audioSrc: string;
  // Paste the path to your cover image here (place file in /public/images/covers/ folder)
  // e.g. '/images/covers/bollywood/cover1.jpg'  — set to '' to use default
  coverImage: string;
  year: string;
}

export interface Genre {
  id: string;
  name: string;
  description: string;
  // Emoji or icon label shown on genre tab
  emoji: string;
  tracks: Track[];
}

export const genres: Genre[] = [
  {
    id: "bollywood",
    name: "Bollywood",
    description:
      "Cinematic soundscapes that move hearts. From soulful ballads to foot-stomping anthems.",
    emoji: "🎬",
    tracks: [
      {
        id: "b1",
        title: "Piya", // ← Replace with your track title
        artist: "Atul Pushkar", // ← Replace with artist name
        youtubeUrl: "https://youtu.be/fN0KuTTWsjE?si=-shISBWJBDcI1wiu", // ← PASTE YOUR YOUTUBE LINK
        audioSrc: "/audio/bollywood/piya.mp3", // ← PASTE YOUR AUDIO PATH
        coverImage: "/images/covers/bollywood/piya.avif", // ← PASTE YOUR COVER IMAGE PATH
        year: "2024",
      },
      {
        id: "b2",
        title: "Dhuan Dhuan",
        artist: "Sandeep Jha",
        youtubeUrl: "https://youtu.be/zAr7Akc5FTU?si=_d2hTNm1AXAL2YLV",
        audioSrc: "/audio/bollywood/dhuan.mp3",
        coverImage: "/images/covers/bollywood/dhuadhua.avif",
        year: "2025",
      },
      {
        id: "b3",
        title: "Anklet",
        artist: "Karan Dhillon",
        youtubeUrl: "https://youtu.be/3lhXsI3bYEQ?si=75NL6dGBgcrezq45",
        audioSrc: "/audio/bollywood/anklet.mp3",
        coverImage: "/images/covers/bollywood/Anklet.avif",
        year: "2023",
      },
    ],
  },
  {
    id: "rap",
    name: "Rap",
    description:
      "Hard-hitting beats. Razor-sharp flows. Stories from the streets.",
    emoji: "🎤",
    tracks: [
      {
        id: "r1",
        title: "Kaand",
        artist: "Fuzion X Kaptaan",
        youtubeUrl: "https://youtu.be/LFq86OxPZZo?si=q5GxMHm4rSc0EMA8", // ← PASTE YOUR YOUTUBE LINK
        audioSrc: "/audio/rap/kaand.mp3",
        coverImage: "/images/covers/rap/kaand.avif",
        year: "2024",
      },
      {
        id: "r2",
        title: "Chaude Chaude",
        artist: "ShamSher",
        youtubeUrl: "https://youtu.be/5jejWJAb9hw?si=tN-R-WW0iTgV6QFW",
        audioSrc: "/audio/rap/track2.mp3",
        coverImage: "/images/covers/rap/ChaudeChaude.avif",
        year: "2026",
      },
      {
        id: "r3",
        title: "No Cap",
        artist: "Artist Name",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        audioSrc: "/audio/rap/track3.mp3",
        coverImage: "/images/covers/rap/cover3.jpg",
        year: "2023",
      },
    ],
  },
  {
    id: "devotional",
    name: "Devotional",
    description:
      "Sacred sounds that transcend. Melodies that connect the soul to the divine.",
    emoji: "🙏",
    tracks: [
      {
        id: "d1",
        title: "Vidhwanskaari",
        artist: "Sagar Sharma",
        youtubeUrl: "https://youtu.be/sg5dkcY0yUg?si=5WmeSZJsNJ-s6h_j",
        audioSrc: "/audio/devotional/vidhwanskaari.mp3",
        coverImage: "/images/covers/devotional/Vidhwanskaari.avif",
        year: "2024",
      },
      {
        id: "d2",
        title: "Jatadhari",
        artist: "Sagar Sharma",
        youtubeUrl: "https://youtu.be/TObYeQSonxM?si=MuQyKpzzqwHFqUvP",
        audioSrc: "/audio/devotional/ugra_roop.mp3",
        coverImage: "/images/covers/devotional/Jatadhari.avif",
        year: "2025",
      },
      {
        id: "d3",
        title: "Hanuman Chalisa",
        artist: "Sagar Sharma",
        youtubeUrl: "https://youtu.be/jNfNPn9YDE0?si=3JwJ0JGMgtWVid3Q",
        audioSrc: "/audio/devotional/legendary_hanuman.mp3",
        coverImage: "/images/covers/devotional/Hanuman.avif",
        year: "2023",
      },
    ],
  },
  {
    id: "edm",
    name: "EDM",
    description:
      "Club-ready drops, festival anthems. Built to make crowds go wild.",
    emoji: "🎧",
    tracks: [
      {
        id: "e1",
        title: "Sun is going low",
        artist: "Sagar Sharma",
        youtubeUrl: "https://youtu.be/cJyFWgQ7Fpw?si=xRxFUPd5BxCLdDyE",
        audioSrc: "/audio/edm/sun_is_going.mp3",
        coverImage: "/images/covers/edm/sun_going_down.avif",
        year: "2023",
      },
      {
        id: "e2",
        title: "One Last Hug",
        artist: "Sagar Sharma",
        youtubeUrl: "https://youtu.be/gWhYaur8juU?si=kO2Xbws492Rqws_8",
        audioSrc: "/audio/edm/one_last_hug.mp3",
        coverImage: "/images/covers/edm/Onelasthug.avif",
        year: "2024",
      },
      {
        id: "e3",
        title: "Bass Universe",
        artist: "Artist Name",
        youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
        audioSrc: "/audio/edm/track3.mp3",
        coverImage: "/images/covers/edm/cover3.jpg",
        year: "2023",
      },
    ],
  },
  {
    id: "pop",
    name: "POP",
    description:
      "Catchy hooks, polished production. Music that the whole world hums.",
    emoji: "✨",
    tracks: [
      {
        id: "p1",
        title: "Teri Ankhon Me",
        artist: "Sandeep Jha",
        youtubeUrl: "https://youtu.be/Y3DvF1q4Xx4?si=OffrrWQhWejp3TNh",
        audioSrc: "/audio/pop/teriankhon.mp3",
        coverImage: "/images/covers/pop/teriankhonmai.avif",
        year: "2025",
      },
      {
        id: "p2",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/pop/track2.mp3",
        coverImage: "/images/covers/pop/cover2.jpg",
        year: "2024",
      },
      {
        id: "p3",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/pop/track3.mp3",
        coverImage: "/images/covers/pop/cover3.jpg",
        year: "2023",
      },
    ],
  },
  {
    id: "haryanvi",
    name: "Haryanvi",
    description: "Desi swag meets modern production. Haryana ki asli awaaz.",
    emoji: "🤠",
    tracks: [
      {
        id: "h1",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/haryanvi/track1.mp3",
        coverImage: "/images/covers/haryanvi/cover1.jpg",
        year: "2024",
      },
      {
        id: "h2",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/haryanvi/track2.mp3",
        coverImage: "/images/covers/haryanvi/cover2.jpg",
        year: "2024",
      },
      {
        id: "h3",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/haryanvi/track3.mp3",
        coverImage: "/images/covers/haryanvi/cover3.jpg",
        year: "2023",
      },
    ],
  },
  {
    id: "punjabi",
    name: "Punjabi",
    description: "Bhangra energy meets studio finesse. Punj-aab di shaan.",
    emoji: "🥁",
    tracks: [
      {
        id: "pu1",
        title: "Anklet",
        artist: "Karan Dhillon",
        youtubeUrl: "https://youtu.be/3lhXsI3bYEQ?si=75NL6dGBgcrezq45",
        audioSrc: "/audio/bollywood/anklet.mp3",
        coverImage: "/images/covers/bollywood/Anklet.avif",
        year: "2023",
      },
      {
        id: "pu2",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/punjabi/track2.mp3",
        coverImage: "/images/covers/punjabi/cover2.jpg",
        year: "2024",
      },
      {
        id: "pu3",
        title: "Coming Soon!",
        artist: "XXXXXX",
        youtubeUrl: "#",
        audioSrc: "/audio/punjabi/track3.mp3",
        coverImage: "/images/covers/punjabi/cover3.jpg",
        year: "2023",
      },
    ],
  },
];
