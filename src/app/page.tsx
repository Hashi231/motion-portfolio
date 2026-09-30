"use client";

import { motion } from "framer-motion";
import { Play, ArrowRight, Mail, LayoutGrid, User, Home as HomeIcon, Film, Video, Camera } from "lucide-react";
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

    const targetPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    const duration = 1000;
    let start: number | null = null;

    const easeInOutCubic = (t: number) =>
      t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

    const step = (timestamp: number) => {
      if (!start) start = timestamp;
      const elapsed = timestamp - start;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      window.scrollTo(0, startPosition + distance * ease);
      if (progress < 1) {
        window.requestAnimationFrame(step);
      }
    };

    window.requestAnimationFrame(step);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className="fixed top-0 w-full px-3 sm:px-6 md:px-20 py-4 sm:py-6 flex flex-row justify-between items-center z-50">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex items-center shrink-0"
        >
          <Image 
            src="/hx4zh-logo.png" 
            alt="Brand Logo" 
            width={40} 
            height={40} 
            className="rounded-full object-cover border border-white/20 w-8 h-8 md:w-12 md:h-12"
          />
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-row justify-center gap-3 md:gap-8 text-[9px] sm:text-[10px] md:text-xs font-semibold uppercase tracking-[0.05em] md:tracking-[0.2em] bg-white/5 backdrop-blur-md border border-white/10 px-3 md:px-8 py-2.5 md:py-4 rounded-full shadow-2xl ml-2 sm:ml-0"
        >
          <a href="#" onClick={(e) => scrollToSection(e, "top")} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <HomeIcon className="w-4 h-4" /> Home
          </a>
          <a href="#about" onClick={(e) => scrollToSection(e, "about")} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <User className="w-4 h-4" /> About
          </a>
          <a href="#work" onClick={(e) => scrollToSection(e, "work")} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <LayoutGrid className="w-4 h-4" /> Work
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, "contact")} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
            <Mail className="w-4 h-4" /> Contact
          </a>
        </motion.div>
      </nav>

      {/* Hero Section */}
      <section className="h-screen flex flex-col justify-center px-6 md:px-20 relative overflow-hidden">
        {/* Background Gradients & Moving Text */}
        <div className="absolute inset-0 flex flex-col justify-center pointer-events-none overflow-hidden z-0 select-none opacity-5">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 40 }}
            className="whitespace-nowrap text-[30vw] leading-none font-black uppercase tracking-tighter"
          >
            HX4ZH HX4ZH HX4ZH HX4ZH HX4ZH HX4ZH 
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-neutral-900 via-black to-black opacity-50 z-0 pointer-events-none"></div>

        {/* Content Wrapper for perfect left alignment on desktop, centered on mobile */}
        <div className="z-10 relative flex flex-col items-center md:items-start text-center md:text-left w-full mt-12 md:mt-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-gray-400 font-mono tracking-widest uppercase mb-4 md:mb-6 text-xs sm:text-sm"
          >
            Hello, my name is
          </motion.div>
          
          <h1 className="text-5xl sm:text-6xl md:text-[10rem] font-black uppercase leading-none tracking-tighter flex justify-center md:justify-start flex-wrap overflow-hidden my-2 md:my-4">
            {"HX4ZH".split("").map((char, index) => (
              <motion.span
                key={index}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{
                  duration: 0.8,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.3 + index * 0.1,
                }}
                className="inline-block text-white"
              >
                {char}
              </motion.span>
            ))}
          </h1>
          
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-6 md:mt-12 max-w-2xl relative group cursor-default border-t-2 md:border-t-0 md:border-l-2 border-white/20 pt-4 md:pt-0 md:pl-6 flex flex-col items-center md:items-start"
          >
            {/* Hover Glow on Border */}
            <div className="absolute left-[-2px] top-0 bottom-0 w-[2px] bg-white blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:block"></div>
            <div className="absolute top-[-2px] left-0 right-0 h-[2px] bg-white blur-[3px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 md:hidden"></div>
            
            <h2 className="text-xl sm:text-2xl md:text-4xl text-white font-medium tracking-tight mb-3 md:mb-4 leading-snug">
              Motion Graphic Designer <span className="text-gray-600 font-light">&</span><br className="hidden sm:block"/> Music Video Editor
            </h2>
            <p className="text-sm md:text-lg text-gray-400 font-light leading-relaxed max-w-xl px-4 md:px-0">
              Crafting sharp, high-impact motion design for bold brands and creators worldwide. Built on detail, driven by results.
            </p>
          </motion.div>
        </div>
        
        <motion.a 
          href="#about"
          onClick={(e) => scrollToSection(e, "about")}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ 
            opacity: 1, 
            scale: 1,
            y: [0, -8, 0] 
          }}
          whileHover={{ 
            scale: 1.08,
            boxShadow: "0 0 25px rgba(255, 255, 255, 0.25)"
          }}
          whileTap={{ scale: 0.92 }}
          transition={{ 
            y: {
              repeat: Infinity,
              duration: 3.5,
              ease: "easeInOut"
            },
            duration: 0.8
          }}
          className="absolute bottom-20 right-20 hidden md:flex items-center justify-center w-32 h-32 rounded-full border border-white/20 bg-black/40 backdrop-blur-md hover:bg-white hover:text-black transition-colors duration-300 cursor-pointer group z-10"
        >
          <div className="absolute w-full h-full animate-[spin_12s_linear_infinite] flex items-center justify-center text-xs tracking-widest uppercase pointer-events-none select-none">
            <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible">
              <path id="circlePath" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" fill="none" />
              <text>
                <textPath href="#circlePath" startOffset="0%">
                  Showreel • Play Video • Showreel • Play Video •
                </textPath>
              </text>
            </svg>
          </div>
          <Play className="w-8 h-8 group-hover:scale-110 transition-transform duration-300" />
        </motion.a>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 md:py-32 px-4 sm:px-6 md:px-20 bg-black border-t border-white/10 relative overflow-hidden">
        {/* Background Artwork with visible aesthetic opacity */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/about-bg.jpg"
            alt="Artwork & Design Background"
            fill
            className="object-cover object-center opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/50 to-black" />
          <div className="absolute inset-0 bg-radial-[ellipse_at_center] from-transparent via-black/40 to-black" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full relative z-10"
        >
          {/* Section Header */}
          <div className="mb-12 md:mb-16 text-center md:text-left">
            <p className="text-gray-500 font-mono tracking-widest uppercase text-sm mb-4">— About Me</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">
              Behind The<br className="hidden sm:block"/>Craft
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start w-full">
            {/* Main Bio Quote / Statement */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="lg:col-span-8 space-y-6"
            >
              <div className="p-8 md:p-12 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-white opacity-80" />
                <p className="text-xl md:text-3xl text-white font-light leading-relaxed">
                  Hello, my name is <span className="font-semibold text-white">Muhammad Al Hafizh (Hx4zh)</span>
                </p>
                <p className="text-lg md:text-2xl text-gray-300 font-light leading-relaxed mt-4">
                  Motion Graphic Designer, Music Video Editor & Photographer that continuously develop skills and explore new techniques in motion design, video editing, and digital content production.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                {[
                  {
                    icon: Video,
                    title: "Motion Design",
                    desc: "Dynamic stingers & visual identities",
                  },
                  {
                    icon: Film,
                    title: "Music Videos",
                    desc: "Rhythmic editing & storytelling",
                  },
                  {
                    icon: Camera,
                    title: "Photography",
                    desc: "Digital content & visual aesthetics",
                  },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="p-6 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/20 transition-all duration-300"
                  >
                    <item.icon className="w-6 h-6 text-white mb-3 opacity-80" />
                    <h4 className="text-base font-bold text-white mb-1">{item.title}</h4>
                    <p className="text-xs text-gray-400">{item.desc}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Quick Details Sidebar */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="lg:col-span-4 space-y-4"
            >
              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 space-y-4">
                <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Core Focus</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Motion Graphic",
                    "Music Video",
                    "Graphic Design",
                    "Photography",
                  ].map((skill, index) => (
                    <span
                      key={index}
                      className="text-xs font-mono px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/[0.03] backdrop-blur-md border border-white/10 flex items-center justify-between">
                <div>
                  <p className="text-xs font-mono uppercase tracking-widest text-gray-500">Status</p>
                  <p className="text-sm font-semibold text-white mt-1">Available for Projects</p>
                </div>
                <span className="flex h-3 w-3 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
                </span>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-20 md:py-32 px-4 sm:px-6 md:px-20 bg-black relative overflow-hidden border-t border-white/10">
        {/* Background Showcase Image with clear visibility */}
        <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
          <Image
            src="/works-bg.jpg"
            alt="Works Showcase Background"
            fill
            className="object-cover object-center opacity-70 filter brightness-110"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/30 to-black/90" />
        </div>

        {/* Section Content Wrapper */}
        <div className="relative z-10 w-full">
          {/* Section Header */}
          <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-center md:items-end mb-16 md:mb-20 gap-4 md:gap-6 text-center md:text-left"
        >
          <div>
            <p className="text-gray-500 font-mono tracking-widest uppercase text-sm mb-4">— Portfolio</p>
            <h2 className="text-4xl md:text-7xl font-bold tracking-tighter uppercase leading-none">Selected<br className="hidden sm:block"/>Works</h2>
          </div>
          <p className="text-gray-400 max-w-sm text-sm md:text-base leading-relaxed">
            Motion graphics, transitions, and music videos crafted for bold brands and creators worldwide.
          </p>
        </motion.div>

        {/* Category: Stinger Transitions */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Stinger Transitions</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { id: "sbAEEPJKo6I", url: "https://youtu.be/sbAEEPJKo6I?si=zl2Nu4EluYp4XJFy", title: "Wingsdings", quality: "maxresdefault" },
              { id: "3G-PsP7jLTY", url: "https://youtu.be/3G-PsP7jLTY?si=2Sm6bLfUc0f2TRpj", title: "Quetzu Solscale", quality: "maxresdefault" },
              { id: "EeoJUv4_AMs", url: "https://youtu.be/EeoJUv4_AMs?si=u-XQsgb7mzkU2OjD", title: "Ceru Foxhound", quality: "hqdefault" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <Image
                  src={`https://img.youtube.com/vi/${item.id}/${item.quality}.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 z-30 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                  YouTube
                </div>
                <div className="absolute bottom-0 left-0 w-full p-4 z-30">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-0.5">Stinger Transition</p>
                  <h4 className="text-base font-bold tracking-tight">{item.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Category: Music Videos */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Music Videos</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          <div>
            {/* Featured Real Card — Nenorama */}
            <motion.a
              href="https://youtu.be/KjBEx8eCo4I?si=nNHx8CXF8PrXSZuW"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7 }}
              className="group relative block aspect-[21/9] overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
            >
              {/* YouTube Thumbnail */}
              <Image
                src="https://img.youtube.com/vi/KjBEx8eCo4I/maxresdefault.jpg"
                alt="Nenorama Music Video"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent z-10" />
              {/* Play Button */}
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                  <Play className="w-6 h-6 ml-0.5" />
                </div>
              </div>
              {/* YouTube badge */}
              <div className="absolute top-4 right-4 z-30 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded">
                YouTube
              </div>
              {/* Info */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-30">
                <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">Music Video</p>
                <h4 className="text-xl font-bold tracking-tight">Nenorama</h4>
              </div>
            </motion.a>
          </div>
        </div>

        {/* Category: Debut Videos */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-8">
            <span className="w-2 h-2 rounded-full bg-white inline-block"></span>
            <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-gray-400">Debut Videos</h3>
            <div className="flex-1 h-px bg-white/10"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { id: "WiqZAKyo6TA", url: "https://youtu.be/WiqZAKyo6TA?si=FFR_9aZoQy6DuG4W", title: "Davina Amara", client: "Debut Video" },
              { id: "ag6D3S00-WQ", url: "https://youtu.be/ag6D3S00-WQ?si=pTM07uSVWs9afniV", title: "Iria Lemon", client: "Debut Video" },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, delay: i * 0.1 }}
                className="group relative aspect-video overflow-hidden rounded-xl cursor-pointer border border-white/5 hover:border-white/20 transition-all duration-500"
              >
                <Image
                  src={`https://img.youtube.com/vi/${item.id}/maxresdefault.jpg`}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent z-10" />
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md border border-white/30 text-white flex items-center justify-center scale-90 group-hover:scale-110 group-hover:bg-white group-hover:text-black transition-all duration-500">
                    <Play className="w-5 h-5 ml-0.5" />
                  </div>
                </div>
                <div className="absolute top-3 right-3 z-30 bg-red-600 text-white text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded">
                  YouTube
                </div>
                <div className="absolute bottom-0 left-0 w-full p-5 z-30">
                  <p className="text-xs text-gray-400 uppercase tracking-widest mb-1">{item.client}</p>
                  <h4 className="text-lg font-bold tracking-tight">{item.title}</h4>
                </div>
              </motion.a>
            ))}
          </div>
        </div>

        <div className="flex justify-center mt-8">
          <a 
            href="https://www.youtube.com/@hx4zh/videos" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group flex items-center gap-4 text-sm font-semibold uppercase tracking-[0.2em] border border-white/20 px-8 py-4 rounded-full hover:bg-white hover:text-black transition-all duration-300 cursor-pointer"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>

      {/* Footer / Contact */}
      <section id="contact" className="py-20 md:py-32 px-4 sm:px-6 md:px-20 bg-black min-h-[70vh] flex flex-col justify-between items-center md:items-start text-center md:text-left">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex flex-col items-center md:items-start"
        >
          <h2 className="text-4xl sm:text-5xl md:text-9xl font-black uppercase tracking-tighter mb-8 text-white hover:text-gray-300 transition-colors cursor-pointer w-fit">
            CONTACT ME
          </h2>
          <a href="mailto:hxzhmv@gmail.com" className="text-lg sm:text-xl md:text-3xl text-gray-400 hover:text-white transition-colors flex items-center justify-center md:justify-start gap-2 md:gap-4 w-fit">
            <Mail className="w-6 h-6 md:w-8 md:h-8" />
            hxzhmv@gmail.com
          </a>
        </motion.div>

        <div className="flex flex-col md:flex-row justify-between items-center md:items-end gap-8 mt-20 border-t border-white/10 pt-8 w-full">
          <div className="text-center md:text-left">
            <p className="text-gray-500 text-sm">© {new Date().getFullYear()} hx4zh.</p>
            <p className="text-gray-500 text-sm">All rights reserved.</p>
          </div>
          <div className="flex flex-wrap justify-center md:justify-end items-center gap-3">
            <a 
              href="https://x.com/hx4zh_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-xs font-mono uppercase tracking-wider group"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
              Twitter
            </a>
            <a 
              href="https://instagram.com/hx4zh" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-xs font-mono uppercase tracking-wider group"
            >
              <svg className="w-3.5 h-3.5 fill-none stroke-current stroke-2 opacity-80 group-hover:opacity-100" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
              </svg>
              Instagram
            </a>
            <a 
              href="https://vgen.co/hx4zh_" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-xs font-mono uppercase tracking-wider group"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
                <path d="M2.5 4h4.8l4.7 11.8L16.7 4h4.8L14 20h-4L2.5 4z" />
              </svg>
              VGen
            </a>
            <a 
              href="https://www.youtube.com/@hx4zh/videos" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/[0.03] border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:border-white/30 transition-all text-xs font-mono uppercase tracking-wider group"
            >
              <svg className="w-3.5 h-3.5 fill-current opacity-80 group-hover:opacity-100" viewBox="0 0 24 24">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
              YouTube
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
