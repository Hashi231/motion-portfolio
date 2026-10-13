"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Play, ExternalLink } from "lucide-react";

export default function Home() {
  const [activeTab, setActiveTab] = useState<"all" | "stinger" | "mv" | "debut">("all");

  const works = [
    {
      id: "KjBEx8eCo4I",
      title: "Nenorama",
      category: "Music Video",
      type: "mv",
      role: "Editing / Compositing / Motion",
      year: "2024",
      url: "https://youtu.be/KjBEx8eCo4I?si=nNHx8CXF8PrXSZuW",
      featured: true,
      thumbnail: "https://img.youtube.com/vi/KjBEx8eCo4I/maxresdefault.jpg",
    },
    {
      id: "sbAEEPJKo6I",
      title: "Wingsdings",
      category: "Stinger Transition",
      type: "stinger",
      role: "Motion Design / Stream Asset",
      year: "2024",
      url: "https://youtu.be/sbAEEPJKo6I?si=zl2Nu4EluYp4XJFy",
      thumbnail: "https://img.youtube.com/vi/sbAEEPJKo6I/maxresdefault.jpg",
    },
    {
      id: "3G-PsP7jLTY",
      title: "Quetzu Solscale",
      category: "Stinger Transition",
      type: "stinger",
      role: "Motion Design / Stream Asset",
      year: "2024",
      url: "https://youtu.be/3G-PsP7jLTY?si=2Sm6bLfUc0f2TRpj",
      thumbnail: "https://img.youtube.com/vi/3G-PsP7jLTY/maxresdefault.jpg",
    },
    {
      id: "EeoJUv4_AMs",
      title: "Ceru Foxhound",
      category: "Stinger Transition",
      type: "stinger",
      role: "Motion Design / Stream Asset",
      year: "2024",
      url: "https://youtu.be/EeoJUv4_AMs?si=u-XQsgb7mzkU2OjD",
      thumbnail: "https://img.youtube.com/vi/EeoJUv4_AMs/hqdefault.jpg",
    },
    {
      id: "WiqZAKyo6TA",
      title: "Davina Amara",
      category: "Debut Video",
      type: "debut",
      role: "Debut PV / Kinetic Typography",
      year: "2024",
      url: "https://youtu.be/WiqZAKyo6TA?si=FFR_9aZoQy6DuG4W",
      thumbnail: "https://img.youtube.com/vi/WiqZAKyo6TA/maxresdefault.jpg",
    },
    {
      id: "ag6D3S00-WQ",
      title: "Iria Lemon",
      category: "Debut Video",
      type: "debut",
      role: "Debut PV / Animation Cut",
      year: "2024",
      url: "https://youtu.be/ag6D3S00-WQ?si=pTM07uSVWs9afniV",
      thumbnail: "https://img.youtube.com/vi/ag6D3S00-WQ/maxresdefault.jpg",
    },
  ];

  const filteredWorks =
    activeTab === "all" ? works : works.filter((w) => w.type === activeTab);

  return (
    <div className="min-h-screen bg-[#080808] text-[#e6e6e6] selection:bg-[#e6e6e6] selection:text-[#080808]">
      {/* 1. MINIMAL DIRECT HEADER */}
      <header className="sticky top-0 z-40 bg-[#080808]/95 border-b border-[#1c1c1c]">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <span className="text-sm font-semibold tracking-tight text-white">
              Muhammad Al Hafizh
            </span>
            <span className="text-xs text-neutral-500 font-mono">
              / Hx4zh
            </span>
          </a>

          <nav className="flex items-center gap-6 text-xs text-neutral-400">
            <a href="#work" className="hover:text-white transition-colors">
              Work
            </a>
            <a href="#about" className="hover:text-white transition-colors">
              About
            </a>
            <a
              href="#contact"
              className="text-white hover:underline underline-offset-4"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6">
        {/* 2. REFINED EDITORIAL INTRO */}
        <section className="pt-20 pb-16 md:pt-28 md:pb-24 border-b border-[#1c1c1c]">
          <div className="max-w-3xl">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-6">
              Motion Graphic Designer & Video Editor
            </p>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white leading-[1.12] mb-8">
              Crafting high-impact motion design, stream transitions, and music videos.
            </h1>
            <p className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed max-w-2xl">
              Specializing in dynamic VTuber stinger mechanics, rhythmic music video pacing, and visual storytelling. Based in Indonesia, working with creators and brands worldwide.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 inline-block"></span>
              <span className="text-neutral-300">Available for projects</span>
            </div>
            <span className="text-neutral-700">•</span>
            <a
              href="mailto:hxzhmv@gmail.com"
              className="text-neutral-300 hover:text-white underline underline-offset-4"
            >
              hxzhmv@gmail.com
            </a>
            <span className="text-neutral-700">•</span>
            <a
              href="https://www.youtube.com/@hx4zh/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white flex items-center gap-1"
            >
              YouTube Archive <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </section>

        {/* 3. SELECTED WORK SHOWCASE */}
        <section id="work" className="py-16 md:py-24 border-b border-[#1c1c1c]">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                Portfolio
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Selected Work
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="flex items-center gap-1 border border-[#1f1f1f] bg-[#0d0d0d] p-1 text-xs font-mono">
              {[
                { label: "All", value: "all" },
                { label: "Music Videos", value: "mv" },
                { label: "Stingers", value: "stinger" },
                { label: "Debuts", value: "debut" },
              ].map((tab) => (
                <button
                  key={tab.value}
                  onClick={() => setActiveTab(tab.value as any)}
                  className={`px-3 py-1 transition-colors ${
                    activeTab === tab.value
                      ? "bg-white text-black font-semibold"
                      : "text-neutral-400 hover:text-white"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Grid of Work */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredWorks.map((work) => (
              <a
                key={work.id}
                href={work.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`group block ${
                  work.featured && activeTab === "all" ? "md:col-span-2" : ""
                }`}
              >
                {/* Media Container */}
                <div
                  className={`relative overflow-hidden bg-neutral-900 border border-[#1c1c1c] group-hover:border-neutral-700 transition-colors ${
                    work.featured && activeTab === "all"
                      ? "aspect-[16/9] md:aspect-[21/9]"
                      : "aspect-video"
                  }`}
                >
                  <Image
                    src={work.thumbnail}
                    alt={work.title}
                    fill
                    className="object-cover group-hover:scale-[1.015] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />

                  {/* Play Indicator on Hover */}
                  <div className="absolute bottom-4 right-4 w-9 h-9 bg-black/80 border border-white/20 flex items-center justify-center text-white opacity-90 group-hover:bg-white group-hover:text-black group-hover:border-white transition-colors">
                    <Play className="w-3.5 h-3.5 fill-current ml-0.5" />
                  </div>

                  <div className="absolute top-4 left-4 bg-black/80 px-2 py-0.5 text-[11px] font-mono uppercase tracking-wider text-neutral-300 border border-white/10">
                    {work.category}
                  </div>
                </div>

                {/* Metadata */}
                <div className="mt-3.5 flex items-baseline justify-between">
                  <div>
                    <h3 className="text-base font-medium text-white group-hover:underline underline-offset-4 flex items-center gap-1.5">
                      {work.title}
                      <ArrowUpRight className="w-3.5 h-3.5 text-neutral-500 group-hover:text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </h3>
                    <p className="text-xs text-neutral-400 mt-0.5">
                      {work.role}
                    </p>
                  </div>
                  <span className="text-xs font-mono text-neutral-500">
                    {work.year}
                  </span>
                </div>
              </a>
            ))}
          </div>

          <div className="mt-14 pt-8 border-t border-[#1c1c1c] flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <span className="text-xs text-neutral-500">
              Want to see more transitions, client assets, and full edits?
            </span>
            <a
              href="https://www.youtube.com/@hx4zh/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs text-white hover:underline underline-offset-4 font-medium"
            >
              Browse entire YouTube library <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </section>

        {/* 4. ABOUT SECTION */}
        <section id="about" className="py-16 md:py-24 border-b border-[#1c1c1c]">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-4">
              <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
                About
              </p>
              <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-white">
                Behind the craft
              </h2>
            </div>

            <div className="md:col-span-8 space-y-6 text-neutral-300 leading-relaxed font-normal text-base">
              <p>
                Hello, I&apos;m <span className="text-white font-medium">Muhammad Al Hafizh (Hx4zh)</span>. I specialize in motion design, music video editing, and digital visual direction.
              </p>
              <p className="text-neutral-400">
                Over the past several years, I have worked with creators, VTubers, and music artists to build fluid stream packages, debut presentations, and punchy edits that match rhythm and sound design with precision.
              </p>

              {/* Skills & Capabilities */}
              <div className="pt-6 border-t border-[#1c1c1c] grid grid-cols-1 sm:grid-cols-2 gap-8 text-sm">
                <div>
                  <h4 className="font-medium text-white mb-2">Services</h4>
                  <ul className="space-y-1 text-neutral-400 text-xs">
                    <li>• Stinger Transitions (OBS / Alpha WebM)</li>
                    <li>• Music Video Editing & Compositing</li>
                    <li>• Debut / Lore PVs & Reveal Trailers</li>
                    <li>• Kinetic Typography & Graphic Design</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-medium text-white mb-2">Tools & Output</h4>
                  <ul className="space-y-1 text-neutral-400 text-xs">
                    <li>• Adobe After Effects & Premiere Pro</li>
                    <li>• Blender (3D Camera & Scene Integration)</li>
                    <li>• Delivered in 4K ProRes / 60FPS WebM Transparent</li>
                    <li>• Fast turnaround & clear revision workflows</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 5. CONTACT / FOOTER */}
        <section id="contact" className="py-16 md:py-24">
          <div className="max-w-2xl">
            <p className="text-xs font-mono uppercase tracking-widest text-neutral-500 mb-2">
              Contact
            </p>
            <h2 className="text-3xl sm:text-4xl font-medium tracking-tight text-white mb-4">
              Let&apos;s build something together.
            </h2>
            <p className="text-neutral-400 text-sm leading-relaxed mb-8">
              Available for freelance commissions, music videos, stream transition packages, and creative collaborations.
            </p>

            <a
              href="mailto:hxzhmv@gmail.com"
              className="inline-block text-xl sm:text-2xl font-medium text-white hover:underline underline-offset-8 mb-10"
            >
              hxzhmv@gmail.com
            </a>

            <div className="flex flex-wrap gap-x-8 gap-y-3 text-xs text-neutral-400 pt-6 border-t border-[#1c1c1c]">
              <a
                href="https://x.com/hx4zh_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Twitter / X ↗
              </a>
              <a
                href="https://instagram.com/hx4zh"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Instagram ↗
              </a>
              <a
                href="https://vgen.co/hx4zh_"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                VGen ↗
              </a>
              <a
                href="https://www.youtube.com/@hx4zh/videos"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                YouTube ↗
              </a>
            </div>

            <p className="text-xs text-neutral-600 mt-12">
              © {new Date().getFullYear()} Muhammad Al Hafizh. All rights reserved.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
