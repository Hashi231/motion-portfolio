"use client";

import { motion } from "framer-motion";
import { Play, ArrowUpRight, Mail } from "lucide-react";
import Image from "next/image";

export default function Home() {
  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    const element = document.getElementById(id);
    if (!element) return;
    element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-screen bg-[#070707] text-[#f0f0f0] font-sans selection:bg-white selection:text-black">
      {/* Structural Top Navigation - Raw Editorial Bar */}
      <header className="fixed top-0 w-full z-50 bg-[#070707]/90 backdrop-blur-sm border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 py-3.5 flex justify-between items-center">
          <a
            href="#"
            onClick={(e) => scrollToSection(e, "top")}
            className="flex items-center gap-3 group"
          >
            <div className="relative w-8 h-8 rounded-none border border-white/30 overflow-hidden bg-black shrink-0">
              <Image
                src="/hx4zh-logo.png"
                alt="HX4ZH Logo"
                fill
                className="object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-white">
                HX4ZH
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500">
                Studio // 2026
              </span>
            </div>
          </a>

          <nav className="flex items-center gap-1 sm:gap-2 font-mono text-[10px] sm:text-xs uppercase tracking-widest">
            <a
              href="#about"
              onClick={(e) => scrollToSection(e, "about")}
              className="px-2.5 sm:px-4 py-1.5 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/20"
            >
              [01] About
            </a>
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="px-2.5 sm:px-4 py-1.5 text-neutral-400 hover:text-white hover:bg-white/5 transition-colors border border-transparent hover:border-white/20"
            >
              [02] Works
            </a>
            <a
              href="#contact"
              onClick={(e) => scrollToSection(e, "contact")}
              className="px-2.5 sm:px-4 py-1.5 bg-white text-black font-semibold hover:bg-neutral-200 transition-colors"
            >
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-between px-4 sm:px-8 md:px-16 pt-28 pb-12 relative overflow-hidden border-b border-white/10">
        {/* Background Image - Textured & Gritty */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/hero-bg.jpg"
            alt="Hero Visual Texture"
            fill
            priority
            className="object-cover object-center opacity-20 grayscale mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#070707] via-[#070707]/60 to-[#070707]/90" />
        </div>

        {/* Ambient Studio Marquee (Technical Background Stream) */}
        <div className="absolute top-1/2 -translate-y-1/2 inset-x-0 pointer-events-none select-none z-0 overflow-hidden opacity-[0.035]">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 35 }}
            className="whitespace-nowrap text-[26vw] leading-none font-mono font-black tracking-tighter uppercase"
          >
            MOTION // GRAPHIC // CUT // DIRECTION // HX4ZH // 
          </motion.div>
        </div>

        {/* Meta Header / Coordinate Index */}
        <div className="relative z-10 flex flex-wrap justify-between items-start gap-4 font-mono text-[10px] sm:text-xs uppercase tracking-widest text-neutral-500 pt-4">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-white inline-block"></span>
            <span>AVAILABLE FOR COMMISSIONS</span>
          </div>
          <div className="hidden sm:block">
            SPEC: MOTION DESIGN / MUSIC VIDEO / PHOTOGRAPHY
          </div>
          <div>ID: IDN // UTC+7</div>
        </div>

        {/* Core Hero Identity & Typography */}
        <div className="relative z-10 my-auto py-12">
          <p className="font-mono text-xs sm:text-sm text-neutral-400 tracking-widest uppercase mb-4">
            Hello, my name is
          </p>

          <h1 className="text-6xl sm:text-8xl md:text-[11rem] lg:text-[13rem] font-black uppercase tracking-tighter leading-none text-white selection:bg-white selection:text-black">
            HX4ZH
          </h1>

          <div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            <div className="md:col-span-8">
              <h2 className="text-xl sm:text-2xl md:text-4xl font-normal tracking-tight text-neutral-200">
                Muhammad Al Hafizh — <span className="text-white font-medium">Motion Designer</span> & <span className="text-white font-medium">Music Video Editor</span>.
              </h2>
            </div>
            <div className="md:col-span-4 font-mono text-xs text-neutral-400 leading-relaxed">
              Crafting rhythmic motion and high-energy video post-production for virtual talents, music artists, and digital creators worldwide.
            </div>
          </div>
        </div>

        {/* Bottom Technical Grid Strip */}
        <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-white/10 pt-4 font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-wider">
          <div>
            <span className="text-white block font-bold">01 / STINGER</span>
            OBS & Stream Transitions
          </div>
          <div>
            <span className="text-white block font-bold">02 / MUSIC VIDEO</span>
            Full Cut & Kinetic Rhythm
          </div>
          <div>
            <span className="text-white block font-bold">03 / DEBUT</span>
            Lore & Identity Reveals
          </div>
          <div className="flex items-center sm:justify-end">
            <a
              href="#work"
              onClick={(e) => scrollToSection(e, "work")}
              className="text-white hover:underline flex items-center gap-1 group"
            >
              EXPLORE INDEX <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>
      </section>

      {/* About Me Section - Structural Dossier Style */}
      <section id="about" className="py-24 px-4 sm:px-8 md:px-16 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Marker */}
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-12">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neutral-500">[01]</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Behind The Craft
              </h2>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest hidden sm:inline">
              DOSSIER // PROFILE
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            {/* Bio Editorial Copy */}
            <div className="lg:col-span-7 space-y-6">
              <p className="text-xl sm:text-3xl font-light text-neutral-100 leading-snug">
                I develop motion systems, rhythmic video edits, and digital aesthetics designed to grab attention in microseconds.
              </p>
              <p className="text-sm sm:text-base text-neutral-400 font-light leading-relaxed">
                Specialized in high-tempo kinetic typography, streaming stinger mechanics, and stylized music video pacing. Every frame is calculated for impact, tempo synchronization, and brand personality.
              </p>

              {/* Discipline Breakdown */}
              <div className="pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">01 / DISCIPLINE</span>
                  <h3 className="font-bold text-white text-base mb-1">Motion Design</h3>
                  <p className="text-xs text-neutral-400">Stream transitions, kinetic type, channel packaging.</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">02 / DISCIPLINE</span>
                  <h3 className="font-bold text-white text-base mb-1">Music Video</h3>
                  <p className="text-xs text-neutral-400">Rhythm matching, VFX compositing, speed ramping.</p>
                </div>
                <div>
                  <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest block mb-1">03 / DISCIPLINE</span>
                  <h3 className="font-bold text-white text-base mb-1">Photography</h3>
                  <p className="text-xs text-neutral-400">Color grading, composition, visual storytelling.</p>
                </div>
              </div>
            </div>

            {/* Sidebar Specifications */}
            <div className="lg:col-span-5 border border-white/10 bg-black p-6 sm:p-8 space-y-6">
              <div className="flex justify-between items-center border-b border-white/10 pb-4">
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400">STATUS</span>
                <span className="inline-flex items-center gap-2 font-mono text-xs text-white uppercase">
                  <span className="w-2 h-2 bg-emerald-400 inline-block"></span> OPEN FOR COMMISSIONS
                </span>
              </div>

              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-neutral-400 block mb-3">CORE FOCUS</span>
                <div className="flex flex-wrap gap-2">
                  {["Motion Graphic", "Music Video", "Graphic Design", "Photography"].map((tag, idx) => (
                    <span
                      key={idx}
                      className="font-mono text-xs uppercase tracking-wider px-3 py-1 bg-white/5 border border-white/10 text-neutral-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="border-t border-white/10 pt-4 text-xs font-mono text-neutral-500 space-y-1">
                <div>PRIMARY SOFTWARE: AFTER EFFECTS / PREMIERE PRO / BLENDER</div>
                <div>DELIVERY: 4K / PRORES / WEBM ALPHA / 60FPS</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works Section */}
      <section id="work" className="py-24 px-4 sm:px-8 md:px-16 border-b border-white/10 relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Marker */}
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neutral-500">[02]</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Selected Works
              </h2>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest hidden sm:inline">
              ARCHIVE // 2024—2026
            </span>
          </div>

          {/* 1. Category: Music Videos (Hero Highlight) */}
          <div className="mb-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                // FEATURED MUSIC VIDEO
              </span>
              <span className="font-mono text-[10px] text-neutral-600">REF: KjBEx8eCo4I</span>
            </div>

            <a
              href="https://youtu.be/KjBEx8eCo4I?si=nNHx8CXF8PrXSZuW"
              target="_blank"
              rel="noopener noreferrer"
              className="group block relative border border-white/10 bg-black overflow-hidden"
            >
              <div className="relative aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden">
                <Image
                  src="https://img.youtube.com/vi/KjBEx8eCo4I/maxresdefault.jpg"
                  alt="Nenorama Music Video"
                  fill
                  className="object-cover group-hover:scale-[1.02] transition-transform duration-500 filter contrast-105"
                />
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4 bg-black/80 border border-white/20 px-3 py-1 font-mono text-[10px] uppercase tracking-wider text-white flex items-center gap-1.5">
                  <Play className="w-3 h-3 fill-white" /> WATCH ON YOUTUBE
                </div>
              </div>
              <div className="p-4 sm:p-6 bg-black flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 border-t border-white/10">
                <div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-neutral-500 block">
                    PROJECT
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-white group-hover:underline">
                    Nenorama — Official Music Video
                  </h3>
                </div>
                <div className="font-mono text-xs text-neutral-400 flex items-center gap-2">
                  <span>EDITING // COMPOSITING // MOTION</span>
                  <ArrowUpRight className="w-4 h-4 text-white group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
              </div>
            </a>
          </div>

          {/* 2. Category: Stinger Transitions (3 Columns) */}
          <div className="mb-20">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                // STINGER TRANSITIONS
              </span>
              <span className="font-mono text-[10px] text-neutral-600">3 ENTRIES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  id: "sbAEEPJKo6I",
                  url: "https://youtu.be/sbAEEPJKo6I?si=zl2Nu4EluYp4XJFy",
                  title: "Wingsdings",
                  code: "TR-01",
                  quality: "maxresdefault",
                },
                {
                  id: "3G-PsP7jLTY",
                  url: "https://youtu.be/3G-PsP7jLTY?si=2Sm6bLfUc0f2TRpj",
                  title: "Quetzu Solscale",
                  code: "TR-02",
                  quality: "maxresdefault",
                },
                {
                  id: "EeoJUv4_AMs",
                  url: "https://youtu.be/EeoJUv4_AMs?si=u-XQsgb7mzkU2OjD",
                  title: "Ceru Foxhound",
                  code: "TR-03",
                  quality: "hqdefault",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-white/10 bg-black overflow-hidden hover:border-white/40 transition-colors"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={`https://img.youtube.com/vi/${item.id}/${item.quality}.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-3 left-3 bg-black/80 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-white">
                      {item.code}
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">
                        STINGER TRANSITION
                      </span>
                      <h4 className="text-base font-bold uppercase tracking-tight text-white group-hover:underline">
                        {item.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* 3. Category: Debut Videos (2 Columns) */}
          <div className="mb-16">
            <div className="flex items-center justify-between border-b border-white/10 pb-2 mb-6">
              <span className="font-mono text-xs text-neutral-400 uppercase tracking-widest">
                // DEBUT & REVEAL VIDEOS
              </span>
              <span className="font-mono text-[10px] text-neutral-600">2 ENTRIES</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {[
                {
                  id: "WiqZAKyo6TA",
                  url: "https://youtu.be/WiqZAKyo6TA?si=FFR_9aZoQy6DuG4W",
                  title: "Davina Amara",
                  code: "DB-01",
                },
                {
                  id: "ag6D3S00-WQ",
                  url: "https://youtu.be/ag6D3S00-WQ?si=pTM07uSVWs9afniV",
                  title: "Iria Lemon",
                  code: "DB-02",
                },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block border border-white/10 bg-black overflow-hidden hover:border-white/40 transition-colors"
                >
                  <div className="relative aspect-video w-full overflow-hidden bg-neutral-900">
                    <Image
                      src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                      alt={item.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                    <div className="absolute top-3 left-3 bg-black/80 border border-white/10 px-2 py-0.5 font-mono text-[9px] text-white">
                      {item.code}
                    </div>
                  </div>
                  <div className="p-4 border-t border-white/10 flex justify-between items-center">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-widest text-neutral-500 block">
                        DEBUT REVEAL VIDEO
                      </span>
                      <h4 className="text-base font-bold uppercase tracking-tight text-white group-hover:underline">
                        {item.title}
                      </h4>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-neutral-400 group-hover:text-white transition-colors" />
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Catalog Link */}
          <div className="pt-8 border-t border-white/10 flex justify-between items-center">
            <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest">
              MORE RELEASES ON YOUTUBE
            </span>
            <a
              href="https://www.youtube.com/@hx4zh/videos"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white text-black font-mono text-xs uppercase tracking-widest font-bold hover:bg-neutral-200 transition-colors"
            >
              ALL PROJECTS (ARCHIVE) <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section - Clean Brutalist Signoff */}
      <footer id="contact" className="py-24 px-4 sm:px-8 md:px-16 bg-[#070707] relative">
        <div className="max-w-7xl mx-auto">
          {/* Section Marker */}
          <div className="flex items-baseline justify-between border-b border-white/10 pb-4 mb-16">
            <div className="flex items-center gap-3">
              <span className="font-mono text-xs text-neutral-500">[03]</span>
              <h2 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white">
                Initiate Contact
              </h2>
            </div>
            <span className="font-mono text-[10px] sm:text-xs text-neutral-500 uppercase tracking-widest hidden sm:inline">
              COMMS // INQUIRIES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end pb-20 border-b border-white/10">
            <div className="lg:col-span-8">
              <span className="font-mono text-xs text-neutral-500 uppercase tracking-widest block mb-4">
                READY FOR COLLABORATION
              </span>
              <a
                href="mailto:hxzhmv@gmail.com"
                className="text-4xl sm:text-6xl md:text-8xl font-black uppercase tracking-tighter text-white hover:text-neutral-400 transition-colors inline-block break-all"
              >
                HXZHMV@GMAIL.COM
              </a>
            </div>

            <div className="lg:col-span-4 font-mono text-xs text-neutral-400 space-y-2">
              <p>RESPONSE TIME: ~24-48 HOURS</p>
              <p>ACCEPTING: VTUBER COMMISSIONS, STREAM PACKAGING, MV EDITING, BRAND MOTION.</p>
            </div>
          </div>

          {/* Social Platforms & Direct Links */}
          <div className="pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 font-mono text-xs">
            <div className="text-neutral-500">
              © {new Date().getFullYear()} HX4ZH. ALL RIGHTS RESERVED.
            </div>

            <div className="flex flex-wrap gap-3">
              {[
                { name: "Twitter / X", url: "https://x.com/hx4zh_" },
                { name: "Instagram", url: "https://instagram.com/hx4zh" },
                { name: "VGen", url: "https://vgen.co/hx4zh_" },
                { name: "YouTube", url: "https://www.youtube.com/@hx4zh/videos" },
              ].map((item, idx) => (
                <a
                  key={idx}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-white/15 text-neutral-300 hover:text-white hover:border-white transition-colors uppercase tracking-wider flex items-center gap-1.5"
                >
                  {item.name} <ArrowUpRight className="w-3 h-3 text-neutral-500" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
