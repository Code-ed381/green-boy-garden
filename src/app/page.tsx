"use client";

import {
  Play,
  User,
  Music,
  Mic,
  HeadphonesIcon,
  Search,
  ExternalLink,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Fixed Parallax Background */}
      <div className="fixed inset-0 z-[-1]">
        <img
          src="/greenboylogo.png"
          alt="Featured Artist"
          style={{
            objectPosition: "top left",
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
          className="absolute inset-0 w-full h-full object-cover lg:left-[-20%] lg:w-[120%]"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1a1e0a]/70 to-[#1a1e0a]" />

        {/* Subtle dark green radial texture */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-gradient-radial from-[#2a3a1a] via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-radial from-[#1a2a0a] via-transparent to-transparent translate-x-1/2 translate-y-1/2" />
        </div>
      </div>

      {/* Section 1 - Hero */}
      <section className="flex flex-col lg:flex-row min-h-screen relative z-10">
        {/* Left 40% - Transparent Panel for Featured Artist Info */}
        <div className="lg:w-[40%] relative min-h-[400px] lg:min-h-screen">
          {/* Featured Artist Info */}
          <div className="absolute bottom-18 left-8">
            <div className="text-[10px] text-[#555] tracking-[0.15em] mb-2">
              FEATURED ARTIST
            </div>
            <div className="text-[22px] font-medium text-[#e8e8d8] mb-1">
              OliveTheBoy
            </div>
            <div className="text-[11px] text-[#7aad3a]">Avana EP — Out Now</div>
          </div>
        </div>

        {/* Right 60% - Semi-transparent Content Panel */}
        <div className="lg:w-[60%] bg-[#0a0a0a]/80 backdrop-blur-sm p-12 lg:p-[48px] flex items-center">
          <div className="max-w-[360px] w-full">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="w-[6px] h-[6px] rounded-full bg-[#7aad3a]" />
              <div className="text-[10px] text-[#555] tracking-[0.15em]">
                A music ecosystem
              </div>
            </div>

            {/* H1 */}
            <h1 className="text-[44px] font-medium text-[#f0f0ec] tracking-[-0.02em] leading-[1.1] mb-6">
              Where sound becomes legacy.
            </h1>

            {/* Subtext */}
            <p className="text-[13px] text-[#888880] mb-8 max-w-[360px]">
              Green Boy Records is a full-service label — artists, production,
              publishing, and distribution, all under one roof.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="bg-[#7aad3a] text-[#0a0a0a] px-6 py-3 rounded-[20px] font-medium text-sm hover:bg-[#8abd4a] transition-colors">
                Explore Artists
              </button>
              <button className="border border-[#888] text-[#888] px-6 py-3 rounded-[20px] font-medium text-sm hover:border-[#f0f0ec] hover:text-[#f0f0ec] transition-colors">
                Submit Demo
              </button>
            </div>

            {/* Stats Row */}
            <div className="border-t border-[#1e1e1e] pt-5 mt-8">
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-8">
                <div>
                  <div className="text-[20px] text-[#f0f0ec] font-medium">
                    12+
                  </div>
                  <div className="text-[10px] text-[#555]">Signed Artists</div>
                </div>
                <div>
                  <div className="text-[20px] text-[#f0f0ec] font-medium">
                    50M+
                  </div>
                  <div className="text-[10px] text-[#555]">Total Streams</div>
                </div>
                <div>
                  <div className="text-[20px] text-[#f0f0ec] font-medium">
                    3
                  </div>
                  <div className="text-[10px] text-[#555]">Studio Suites</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2 - Elite Roster */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a]/60 to-[#0f0f0a]/80 backdrop-blur-md py-24 lg:py-32 overflow-hidden z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#7aad3a] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#1a1a15] rounded-full border border-[#2a2a25]">
              <div className="w-2 h-2 rounded-full bg-[#7aad3a] animate-pulse" />
              <span className="text-xs text-[#888] tracking-[0.2em] font-medium">
                ELITE ROSTER
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-[#f0f0ec] tracking-[-0.03em] mb-8 leading-tight">
              Artists
              {/* <br /> */}
              {/* <span className="text-[#7aad3a]">Become Legends</span> */}
            </h2>

            <p className="text-lg lg:text-xl text-[#888880] max-w-3xl mx-auto leading-relaxed">
              Featuring our flagship artist leading the new wave of Afrofusion
              music with global impact.
            </p>
          </div>

          {/* Featured Artist - Full Image with Gradient Overlay */}
          <div className="flex justify-center mb-16">
            <a
              href="/artists"
              className="group relative w-full max-w-md h-80 rounded-3xl overflow-hidden transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/20 block"
            >
              {/* Full Image Background */}
              <img
                src="/olive/1.jpeg"
                alt="OliveTheBoy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />

              {/* Gradient Overlay from Bottom */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />

              {/* Artist Details - Left Aligned */}
              <div className="absolute bottom-0 left-0 p-8 text-left">
                <div className="inline-flex items-center gap-2 mb-3 px-3 py-1 bg-[#7aad3a]/20 rounded-full border border-[#7aad3a]/30 backdrop-blur-sm">
                  <div className="w-2 h-2 rounded-full bg-[#7aad3a] animate-pulse" />
                  <span className="text-xs text-[#7aad3a] tracking-[0.2em] font-medium">
                    FLAGSHIP ARTIST
                  </span>
                </div>
                <h3 className="text-3xl font-bold text-[#f0f0ec] mb-2">
                  OliveTheBoy
                </h3>
                <p className="text-[#7aad3a] text-lg mb-1">Afrobeats </p>
                <p className="text-[#888880] text-sm mb-3">Accra, Ghana</p>
                <p className="text-[#888880]/80 text-xs leading-relaxed max-w-xs">
                  Leading the new wave of Afrofusion with groundbreaking sounds
                  and international appeal
                </p>
              </div>
            </a>
          </div>

          {/* <div className="text-center">
            <a
              href="/artists"
              className="bg-[#7aad3a] text-[#0a0a0a] px-12 py-4 rounded-2xl font-bold text-lg hover:bg-[#8abd4a] transition-all duration-300 transform hover:scale-105 inline-block"
            >
              Meet All Artists →
            </a>
          </div> */}
        </div>
      </section>

      {/* Section 3 - Chart Hits */}
      <section className="relative bg-gradient-to-b from-[#0f0f0a] to-[#0a0a0a] py-24 lg:py-32 overflow-hidden z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#5a8a2a] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#1a1a15] rounded-full border border-[#2a2a25]">
              <div className="w-2 h-2 rounded-full bg-[#7aad3a] animate-spin" />
              <span className="text-xs text-[#888] tracking-[0.2em] font-medium">
                CHART HITS
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-[#f0f0ec] tracking-[-0.03em] mb-8 leading-tight">
              {/* <br /> */}
              <span className="text-[#7aad3a]">LATEST RELEASES</span>
            </h2>

            <p className="text-lg lg:text-xl text-[#888880] max-w-3xl mx-auto leading-relaxed">
              The hottest releases dominating airwaves and playlists worldwide.
            </p>
          </div>

          {/* Tracks Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mb-16">
            <div
              className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10 cursor-pointer"
              onClick={() => (window.location.href = "/artists")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src="/olive/lala.png"
                      alt="LaLa Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#f0f0ec] mb-2">
                      LaLa
                    </h3>
                    <p className="text-[#7aad3a] text-lg mb-1">OliveTheBoy</p>
                    <p className="text-[#888880]">3:24 • #1 Trending</p>
                  </div>
                  <button className="w-16 h-16 bg-[#7aad3a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#0a0a0a] ml-1" />
                  </button>
                </div>

                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div className="h-full bg-[#7aad3a] rounded-full w-3/4" />
                </div>

                {/* Streaming Platform Icons */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1a1a15]">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on Spotify"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/spotify (1).png"
                        alt="Spotify"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on Apple Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/music (1).png"
                        alt="Apple Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on YouTube Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/youtube (1).png"
                        alt="YouTube Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on YouTube Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/songs.png"
                        alt="YouTube Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                  </div>
                  <span className="text-xs text-[#888880]">3:24</span>
                </div>
              </div>
            </div>

            <div
              className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10 cursor-pointer"
              onClick={() => (window.location.href = "/artists")}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative">
                <div className="flex items-center gap-6 mb-6">
                  <div className="w-24 h-24 rounded-xl overflow-hidden">
                    <img
                      src="/olive/olive3.png"
                      alt="Spidomita Cover"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-3xl font-bold text-[#f0f0ec] mb-2">
                      Spidomita
                    </h3>
                    <p className="text-[#7aad3a] text-lg mb-1">OliveTheBoy</p>
                    <p className="text-[#888880]">2:58 • #3 Rising</p>
                  </div>
                  <button className="w-16 h-16 bg-[#1a1a15] rounded-full flex items-center justify-center group-hover:bg-[#7aad3a] transition-colors group-hover:scale-110 transition-transform">
                    <Play className="w-8 h-8 text-[#888] group-hover:text-[#0a0a0a] ml-1" />
                  </button>
                </div>

                <div className="h-2 bg-[#1a1a1a] rounded-full overflow-hidden">
                  <div className="h-full bg-[#7aad3a] rounded-full w-1/2" />
                </div>

                {/* Streaming Platform Icons */}
                <div className="flex items-center justify-between mt-4 pt-4 border-t border-[#1a1a15]">
                  <div className="flex gap-2">
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on Spotify"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/spotify (1).png"
                        alt="Spotify"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on Apple Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/music (1).png"
                        alt="Apple Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on YouTube Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/youtube (1).png"
                        alt="YouTube Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                    <a
                      href="#"
                      className="w-12 h-12 bg-[#1a1a1a] border border-[#2a2a2a] rounded-full flex items-center justify-center hover:border-[#7aad3a] transition-all"
                      title="Listen on YouTube Music"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <img
                        src="/icons/songs.png"
                        alt="YouTube Music"
                        className="w-6 h-6 opacity-100 drop-shadow-lg"
                      />
                    </a>
                  </div>
                  <span className="text-xs text-[#888880]">2:58</span>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link href="music" passHref>
              <button className="bg-[#1a1a15] text-[#7aad3a] px-12 py-4 rounded-2xl font-bold text-lg hover:bg-[#2a2a25] transition-all duration-300 transform hover:scale-105 border border-[#7aad3a]/20">
                Full Catalogue →
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Section 4 - Full Service */}
      <section className="relative bg-gradient-to-b from-[#0a0a0a] to-[#0f0f0a] py-24 lg:py-32 overflow-hidden z-10">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/2 left-1/3 w-96 h-96 bg-[#7aad3a] rounded-full blur-3xl" />
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#5a8a2a] rounded-full blur-3xl" />
        </div>

        <div className="relative max-w-7xl mx-auto px-8 lg:px-16">
          {/* Section Header */}
          <div className="text-center mb-20 lg:mb-32">
            <div className="inline-flex items-center gap-3 mb-8 px-6 py-3 bg-[#1a1a15] rounded-full border border-[#2a2a25]">
              <div className="w-2 h-2 rounded-full bg-[#7aad3a] animate-pulse" />
              <span className="text-xs text-[#888] tracking-[0.2em] font-medium">
                FULL SERVICE
              </span>
            </div>

            <h2 className="text-5xl lg:text-7xl font-bold text-[#f0f0ec] tracking-[-0.03em] mb-8 leading-tight">
              Everything You
              <br />
              <span className="text-[#7aad3a]">Need to Succeed</span>
            </h2>

            <p className="text-lg lg:text-xl text-[#888880] max-w-3xl mx-auto leading-relaxed">
              End-to-end music production and career development under one roof.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            <div className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center">
                <div className="w-16 h-16 bg-[#7aad3a] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce">
                  <HeadphonesIcon className="w-8 h-8 text-[#0a0a0a]" />
                </div>

                <h3 className="text-2xl font-bold text-[#f0f0ec] mb-4">
                  Studio Recording
                </h3>
                <p className="text-[#888880] leading-relaxed">
                  World-class recording facilities with industry engineers
                </p>
              </div>
            </div>

            <div className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center">
                <div className="w-16 h-16 bg-[#7aad3a] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-spin">
                  <Music className="w-8 h-8 text-[#0a0a0a]" />
                </div>

                <h3 className="text-2xl font-bold text-[#f0f0ec] mb-4">
                  Beat Production
                </h3>
                <p className="text-[#888880] leading-relaxed">
                  Custom beats and instrumentals from in-house producers
                </p>
              </div>
            </div>

            <div className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center">
                <div className="w-16 h-16 bg-[#7aad3a] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                  <Mic className="w-8 h-8 text-[#0a0a0a]" />
                </div>

                <h3 className="text-2xl font-bold text-[#f0f0ec] mb-4">
                  Music Publishing
                </h3>
                <p className="text-[#888880] leading-relaxed">
                  Rights management and royalty collection services
                </p>
              </div>
            </div>

            <div className="group relative bg-[#0f0f0f] rounded-3xl p-8 border border-[#1a1a15] hover:border-[#7aad3a]/30 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-[#7aad3a]/10">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7aad3a]/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              <div className="relative text-center">
                <div className="w-16 h-16 bg-[#7aad3a] rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:animate-bounce">
                  <Search className="w-8 h-8 text-[#0a0a0a]" />
                </div>

                <h3 className="text-2xl font-bold text-[#f0f0ec] mb-4">
                  A&R Development
                </h3>
                <p className="text-[#888880] leading-relaxed">
                  Talent discovery and artist development programs
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <button className="bg-[#1a1a15] text-[#f0f0ec] px-12 py-4 rounded-2xl font-bold text-lg hover:bg-[#2a2a25] transition-all duration-300 transform hover:scale-105 border border-[#888]/20">
              All Services →
            </button>
          </div>
        </div>
      </section>

      {/* Section 5 - Final CTA */}
      <section className="relative bg-gradient-to-b from-[#0f0f0a] to-[#0a0a0a] py-24 lg:py-32 overflow-hidden z-10">
        <div className="relative max-w-7xl mx-auto px-8 lg:px-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-8 p-12 lg:p-16 bg-gradient-to-r from-[#7aad3a]/10 to-[#5a8a2a]/10 rounded-3xl border border-[#7aad3a]/20">
            <div className="text-left flex-1">
              <h2 className="text-3xl lg:text-4xl font-bold text-[#f0f0ec] mb-4">
                Ready to Make History?
              </h2>
              <p className="text-[#888880] text-xl">
                Join the movement that's redefining music
              </p>
            </div>
            <button className="bg-[#7aad3a] text-[#0a0a0a] px-12 py-4 rounded-2xl font-bold text-lg hover:bg-[#8abd4a] transition-all duration-300 transform hover:scale-105 whitespace-nowrap">
              Submit Your Demo
            </button>
          </div>
        </div>
      </section>
    </>
  );
}
