"use client";

import { useState } from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Mail, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#0d0d0d] pt-16 lg:pt-20">
      <div className="max-w-4xl mx-auto px-6 lg:px-12 py-16 lg:py-24">
        {/* Header */}
        <div data-reveal className="mb-16">
          <p className="text-[10px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.15em] mb-4">
            connect
          </p>
          <h1
            className="text-[48px] lg:text-[80px] font-[family-name:var(--font-display)] text-[#f0ede6] leading-[0.9] tracking-[-0.02em]"
            style={{ fontFeatureSettings: '"ss01", "cv01"' }}
          >
            Contact
          </h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Info */}
          <div data-reveal data-reveal-delay="1" className="space-y-8">
            <div className="flex items-center gap-3">
              <Mail size={14} className="text-[#7aad3a]" />
              <span className="text-[13px] font-[family-name:var(--font-geist-sans)] text-[#6b6b5e]">
                olivetheboy@example.com
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin size={14} className="text-[#7aad3a]" />
              <span className="text-[13px] font-[family-name:var(--font-geist-sans)] text-[#6b6b5e]">
                Accra, Ghana
              </span>
            </div>
            <p className="text-[13px] font-[family-name:var(--font-geist-sans)] text-[#6b6b5e] leading-relaxed">
              For booking, press, or general inquiries, drop a message.
            </p>
          </div>

          {/* Form */}
          <div data-reveal data-reveal-delay="2">
            {submitted ? (
              <div className="p-6 border border-[#7aad3a]/30 bg-[#7aad3a]/5">
                <p className="text-[13px] font-[family-name:var(--font-mono)] text-[#7aad3a] uppercase tracking-[0.12em]">
                  message sent. will be in touch.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.15em] mb-2">
                    name
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-[13px] text-[#f0ede6] outline-none focus:border-[#7aad3a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.15em] mb-2">
                    email
                  </label>
                  <input
                    type="email"
                    required
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-[13px] text-[#f0ede6] outline-none focus:border-[#7aad3a] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-[9px] font-[family-name:var(--font-mono)] text-[#3a3a2e] uppercase tracking-[0.15em] mb-2">
                    message
                  </label>
                  <textarea
                    required
                    rows={4}
                    className="w-full bg-[#1a1a1a] border border-[#2a2a2a] px-4 py-3 text-[13px] text-[#f0ede6] outline-none focus:border-[#7aad3a] transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="flex items-center gap-2 px-6 py-3 bg-[#7aad3a] text-[#0d0d0d] text-[11px] font-[family-name:var(--font-mono)] uppercase tracking-[0.15em] hover:bg-[#c8f06a] transition-colors btn-press"
                >
                  <Send size={14} />
                  send
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
