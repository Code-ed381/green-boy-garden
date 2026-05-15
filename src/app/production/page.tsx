"use client";

import { useState } from "react";
import {
  Mic,
  Headphones,
  FileText,
  Users,
  Calendar,
  Clock,
  CheckCircle,
  Send,
  Music,
  Waves,
} from "lucide-react";

export default function ProductionPage() {
  const [formData, setFormData] = useState({
    name: "",
    artistName: "",
    genre: "",
    link: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page Header */}
      <div className="bg-[#0c0c0a] px-5 sm:px-10 lg:px-20 py-16 lg:py-[64px]">
        <div className="text-center">
          <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-4">
            Built for the craft.
          </h1>
          <p className="text-[14px] text-[#888880] mb-8">
            From raw session to global release — every stage of music production
            under one roof.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors">
              Book Studio Time
            </button>
            <button className="px-6 py-3 bg-transparent text-[#f0f0ec] text-sm font-medium border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors">
              Talk to A&R
            </button>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="border border-[#1e1e1e] mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px">
          {/* Card 1: Studio Recording */}
          <div className="bg-[#0c0c0a] p-8">
            <div className="mb-6">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1531651008558-ed1740375b39?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Recording Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/60 to-transparent" />
              </div>
            </div>
            <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-3">
              Studio Recording
            </h3>
            <p className="text-[14px] text-[#888880] mb-4 leading-relaxed">
              World-class recording facilities with vintage analog warmth and
              digital precision. Capture your sound exactly as you hear it.
            </p>
            <div className="text-[12px] text-[#555] mb-4">
              Pro Tools · Neve Console · Dolby Atmos · 96kHz
            </div>
            <a
              href="#"
              className="text-[#7aad3a] hover:text-[#8abd4a] text-sm font-medium transition-colors"
            >
              Book a session →
            </a>
          </div>

          {/* Card 2: Beat Production */}
          <div className="bg-[#0c0c0a] p-8">
            <div className="mb-6">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Music Production"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/60 to-transparent" />
              </div>
            </div>
            <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-3">
              Beat Production
            </h3>
            <p className="text-[14px] text-[#888880] mb-4 leading-relaxed">
              Custom beats crafted by in-house producers. From trap to soul, we
              create the foundation for your next hit.
            </p>
            <div className="flex flex-wrap gap-2 mb-4">
              {["Afrobeats", "Drill", "Amapiano", "R&B"].map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-[#1a1a1a] text-[#555] text-[10px] border border-[#2a2a2a]"
                >
                  {tag}
                </span>
              ))}
            </div>
            <a
              href="#"
              className="text-[#7aad3a] hover:text-[#8abd4a] text-sm font-medium transition-colors"
            >
              License a beat →
            </a>
          </div>

          {/* Card 3: Music Publishing */}
          <div className="bg-[#0c0c0a] p-8">
            <div className="mb-6">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://plus.unsplash.com/premium_photo-1726873544613-bf14f1179598?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Music Publishing"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/60 to-transparent" />
              </div>
            </div>
            <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-3">
              Music Publishing
            </h3>
            <p className="text-[14px] text-[#888880] mb-4 leading-relaxed">
              Protect your work and maximize your revenue. We handle publishing
              rights so you can focus on creating.
            </p>
            <div className="space-y-2 mb-4">
              <div className="text-[12px] text-[#555]">• Sync Licensing</div>
              <div className="text-[12px] text-[#555]">
                • Royalty Collection
              </div>
              <div className="text-[12px] text-[#555]">
                • Copyright Registration
              </div>
            </div>
            <a
              href="#"
              className="text-[#7aad3a] hover:text-[#8abd4a] text-sm font-medium transition-colors"
            >
              Learn more →
            </a>
          </div>

          {/* Card 4: A&R & Artist Development */}
          <div className="bg-[#0c0c0a] p-8">
            <div className="mb-6">
              <div className="relative h-32 rounded-lg overflow-hidden mb-4">
                <img
                  src="https://images.unsplash.com/photo-1635961726947-0f821cf9ba28?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Artist Development"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/60 to-transparent" />
              </div>
            </div>
            <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-3">
              A&R & Artist Development
            </h3>
            <p className="text-[14px] text-[#888880] mb-4 leading-relaxed">
              Strategic guidance from industry veterans. We shape careers and
              build lasting artist partnerships.
            </p>
            <button className="w-full px-4 py-2 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors mt-4">
              Submit your demo
            </button>
          </div>
        </div>
      </div>

      {/* Studio Suites */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-3">
          {/* Suite A */}
          <div className="p-8 border-r border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-medium text-[#f0f0ec]">
                Suite A
              </h3>
              <span className="px-2 py-1 bg-[#1a2a10] text-[#7aad3a] text-[10px] font-medium">
                Available
              </span>
            </div>
            <ul className="space-y-1 mb-4">
              <li className="text-[11px] text-[#555]">• Dolby Atmos</li>
              <li className="text-[11px] text-[#555]">• Neve 8078 Console</li>
              <li className="text-[11px] text-[#555]">• Pro Tools Ultimate</li>
              <li className="text-[11px] text-[#555]">• 96kHz/24-bit</li>
            </ul>
            <div className="text-[16px] text-[#7aad3a] font-medium mb-4">
              from $120/hr
            </div>
            <button className="w-full px-4 py-2 bg-transparent text-[#f0f0ec] text-sm font-medium border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors">
              Request booking
            </button>
          </div>

          {/* Suite B */}
          <div className="p-8 border-r border-[#1e1e1e]">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-medium text-[#f0f0ec]">
                Suite B
              </h3>
              <span className="px-2 py-1 bg-[#2a1a10] text-[#d4a000] text-[10px] font-medium">
                Booked
              </span>
            </div>
            <ul className="space-y-1 mb-4">
              <li className="text-[11px] text-[#555]">• SSL 4000 Console</li>
              <li className="text-[11px] text-[#555]">• Logic Pro X</li>
              <li className="text-[11px] text-[#555]">• Live Tracking Room</li>
              <li className="text-[11px] text-[#555]">• Vocal Booth</li>
            </ul>
            <div className="text-[16px] text-[#7aad3a] font-medium mb-4">
              from $90/hr
            </div>
            <button className="w-full px-4 py-2 bg-transparent text-[#f0f0ec] text-sm font-medium border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors">
              Request booking
            </button>
          </div>

          {/* Suite C */}
          <div className="p-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-[18px] font-medium text-[#f0f0ec]">
                Suite C
              </h3>
              <span className="px-2 py-1 bg-[#1a2a10] text-[#7aad3a] text-[10px] font-medium">
                Available
              </span>
            </div>
            <ul className="space-y-1 mb-4">
              <li className="text-[11px] text-[#555]">• Mixing & Mastering</li>
              <li className="text-[11px] text-[#555]">
                • Yamaha NS10 Monitors
              </li>
              <li className="text-[11px] text-[#555]">• Outboard Gear</li>
              <li className="text-[11px] text-[#555]">• Stem Processing</li>
            </ul>
            <div className="text-[16px] text-[#7aad3a] font-medium mb-4">
              from $70/hr
            </div>
            <button className="w-full px-4 py-2 bg-transparent text-[#f0f0ec] text-sm font-medium border border-[#1e1e1e] hover:border-[#2a2a2a] transition-colors">
              Request booking
            </button>
          </div>
        </div>
      </div>

      {/* Demo Submission Form */}
      <div className="bg-[#0c0c0a] border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <div className="p-8 lg:p-12">
            <h2 className="text-[32px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-4">
              Drop us your demo.
            </h2>
            <p className="text-[14px] text-[#888880] mb-6 leading-relaxed">
              We're always listening for fresh talent. Send us your best work
              and our A&R team will give it a proper listen.
            </p>
            <div className="text-[14px] text-[#7aad3a]">
              demo@greenboyrecords.com
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12 bg-[#0c0c0a]">
            {isSubmitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <CheckCircle className="w-16 h-16 text-[#7aad3a] mb-4" />
                <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-2">
                  Demo submitted!
                </h3>
                <p className="text-[14px] text-[#888880]">
                  Our A&R team will review your submission and get back to you
                  soon.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Name"
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
                    required
                  />
                </div>

                <div>
                  <input
                    type="text"
                    name="artistName"
                    value={formData.artistName}
                    onChange={handleInputChange}
                    placeholder="Artist/Band Name"
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
                    required
                  />
                </div>

                <div>
                  <select
                    name="genre"
                    value={formData.genre}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
                    required
                  >
                    <option value="">Select Genre</option>
                    <option value="afrobeats">Afrobeats</option>
                    <option value="drill">Drill</option>
                    <option value="amapiano">Amapiano</option>
                    <option value="rnb">R&B</option>
                    <option value="hip-hop">Hip-Hop</option>
                    <option value="pop">Pop</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <input
                    type="url"
                    name="link"
                    value={formData.link}
                    onChange={handleInputChange}
                    placeholder="SoundCloud/Drive Link"
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
                    required
                  />
                </div>

                <div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your music..."
                    rows={4}
                    className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-3 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors flex items-center justify-center gap-2"
                >
                  <Send size={16} />
                  Submit Demo
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
