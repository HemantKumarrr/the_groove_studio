# 🎵 The Groove Studio — Portfolio Website

A production-grade music portfolio website built with **Next.js 14**, **Tailwind CSS**, and **React Icons**.  
Black & white Apple/Spotify-inspired UI with genre tabs, audio players, YouTube links, and a WhatsApp CTA.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
cd the-groove-studio
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm run start
```

---

## ✏️ How to Customize

### 📱 WhatsApp Number
Open `src/components/ui/WhatsAppButton.tsx` and `src/components/sections/Contact.tsx`  
Replace `919999999999` with your actual WhatsApp Business number (country code + number, no spaces or +).

```ts
const WHATSAPP_NUMBER = '919876543210' // Your number here
```

---

### 🎵 Adding Your Tracks (Most Important!)
Open **`src/lib/genres.ts`** — this is the single source of truth for all your music.

For each track, fill in:

```ts
{
  title: 'Your Song Name',
  artist: 'Artist Name',
  youtubeUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID',   // ← YouTube link
  audioSrc: '/audio/bollywood/your-song.mp3',                    // ← Audio file path
  coverImage: '/images/covers/bollywood/your-cover.jpg',         // ← Cover art path
  year: '2024',
}
```

**To add more tracks:** Just add more objects to the `tracks` array of any genre.  
**To add a new genre:** Add a new object to the `genres` array following the same structure.

---

### 🖼️ Adding Cover Images
Place cover art images inside:
```
public/images/covers/<genre>/cover1.jpg
```
Recommended: **500×500px square**, JPEG or WebP.

---

### 🎧 Adding Audio Files
Place `.mp3` files inside:
```
public/audio/<genre>/track1.mp3
```
If you don't have an audio file for a track, set `audioSrc: ''` and only the YouTube button will show.

---

### 📧 Contact Info
Open `src/components/sections/Contact.tsx` and update the `CONTACT` object:

```ts
const CONTACT = {
  phone: '+91 98765 43210',
  email: 'your@email.com',
  whatsapp: 'https://wa.me/919876543210?text=...',
  instagram: 'https://instagram.com/yourstudio',
  youtube: 'https://youtube.com/@yourstudio',
}
```

---

### 🗺️ Google Maps Embed
In `src/components/sections/Contact.tsx`, replace the Maps iframe `src` with your own embed link:
1. Go to [maps.google.com](https://maps.google.com)
2. Search your address
3. Click **Share** → **Embed a map**
4. Copy the `src="..."` URL and paste it in the iframe

---

### 🏷️ Studio Specs (About Section)
Open `src/components/sections/About.tsx` and update the specs table:
- DAW software you use
- Microphone models
- Monitor speakers
- etc.

---

## 📁 Folder Structure

```
the-groove-studio/
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← SEO metadata, fonts, global styles
│   │   ├── page.tsx            ← Main page (assembles all sections)
│   │   └── globals.css         ← Tailwind + global styles
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx      ← Top navigation bar
│   │   │   └── Footer.tsx      ← Footer
│   │   ├── sections/
│   │   │   ├── Hero.tsx        ← Landing hero section
│   │   │   ├── Work.tsx        ← Genre tabs + track grid
│   │   │   ├── Services.tsx    ← Services offered
│   │   │   ├── About.tsx       ← About + studio specs
│   │   │   └── Contact.tsx     ← Contact info + WhatsApp CTA
│   │   └── ui/
│   │       ├── TrackCard.tsx   ← Individual track card with player
│   │       └── WhatsAppButton.tsx ← Floating WhatsApp button
│   └── lib/
│       └── genres.ts           ← ⭐ ALL YOUR MUSIC DATA LIVES HERE
├── public/
│   ├── audio/                  ← Place .mp3 files here
│   └── images/
│       └── covers/             ← Place cover art here
├── tailwind.config.js
├── next.config.js
├── tsconfig.json
└── package.json
```

---

## 🌐 Deploying to Vercel (Free)

1. Push your project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your GitHub repo
4. Click **Deploy** — done! Your site will be live in ~60 seconds.

---

## 🛠️ Tech Stack

| Tool | Purpose |
|------|---------|
| Next.js 14 | React framework with App Router |
| Tailwind CSS | Utility-first styling |
| React Icons (ri) | Icon library |
| Framer Motion | Animations (installed, ready to use) |
| TypeScript | Type safety |

---

Made with ❤️ for The Groove Studio, Ghaziabad.
