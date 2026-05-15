"use client";

import { useState } from "react";
import {
  FileText,
  Shield,
  DollarSign,
  Globe,
  Music,
  Play,
  ExternalLink,
  TrendingUp,
  Users,
  Award,
  CheckCircle,
  BarChart3,
  Clock,
  Target,
  Zap,
} from "lucide-react";

export default function PublishingPage() {
  const [selectedService, setSelectedService] = useState("all");

  const services = [
    {
      id: "sync",
      title: "Sync Licensing",
      description:
        "Place your music in films, TV shows, commercials, and video games.",
      icon: <Play size={24} className="text-[#7aad3a]" />,
      image:
        "https://images.unsplash.com/photo-1616097970275-1e187b4ce59f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Film & TV Placement",
        "Commercial Licensing",
        "Video Game Sync",
        "Brand Partnerships",
      ],
      revenue: "Up to $50,000 per placement",
    },
    {
      id: "royalty",
      title: "Royalty Collection",
      description:
        "Maximize your earnings through comprehensive royalty management worldwide.",
      icon: <DollarSign size={24} className="text-[#7aad3a]" />,
      image:
        "https://media.istockphoto.com/id/899321150/photo/debt-collection-and-tax-season-concept-with-deadline-calendar-remind-note-coins-banks.jpg?s=2048x2048&w=is&k=20&c=fSLlTtErYWOntqxwYPv4ns_W_OpY-_5TWt0A1LvDM00=",
      features: [
        "Performance Royalties",
        "Mechanical Royalties",
        "Digital Streaming",
        "International Collection",
      ],
      revenue: "$0.003 - $0.005 per stream",
    },
    {
      id: "copyright",
      title: "Copyright Protection",
      description:
        "Secure your creative work with comprehensive copyright registration.",
      icon: <Shield size={24} className="text-[#7aad3a]" />,
      image:
        "https://images.unsplash.com/photo-1593444285553-28163240e3f1?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "Copyright Registration",
        "Content Protection",
        "Infringement Monitoring",
        "Legal Support",
      ],
      revenue: "Lifetime protection",
    },
    {
      id: "distribution",
      title: "Global Distribution",
      description:
        "Get your music on every major platform worldwide with one click.",
      icon: <Globe size={24} className="text-[#7aad3a]" />,
      image:
        "https://images.unsplash.com/photo-1731848357469-9811b81f6e1f?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      features: [
        "150+ Digital Stores",
        "Physical Distribution",
        "Release Coordination",
        "Analytics Dashboard",
      ],
      revenue: "85% of net revenue",
    },
  ];

  const stats = [
    { label: "Songs Protected", value: "10,000+", icon: <Shield size={20} /> },
    { label: "Royalties Collected", value: "$2.5M+", icon: <DollarSign size={20} /> },
    { label: "Sync Placements", value: "500+", icon: <Play size={20} /> },
    { label: "Countries Covered", value: "195", icon: <Globe size={20} /> }
  ];

  const filteredServices = selectedService === "all" 
    ? services 
    : services.filter(service => service.id === selectedService);

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page Header */}
      <div className="bg-[#0c0c0a] px-5 sm:px-10 lg:px-20 py-16 lg:py-[64px]">
        <div className="text-center">
          <div className="text-[10px] tracking-[0.18em] text-[#555] mb-4">
            PUBLISHING SERVICES
          </div>
          <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-4">
            Protect your art. Maximize your value.
          </h1>
          <p className="text-[14px] text-[#888880] mb-8 max-w-3xl mx-auto">
            Comprehensive publishing solutions that safeguard your creative work
            while maximizing revenue opportunities across all platforms and
            media.
          </p>

          {/* Stats Row */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-2">
                <div className="text-[#7aad3a]">{stat.icon}</div>
                <div>
                  <div className="text-[20px] text-[#f0f0ec] font-medium">
                    {stat.value}
                  </div>
                  <div className="text-[10px] text-[#555]">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Service Filter */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="flex flex-wrap justify-center gap-3 p-6">
          <button
            onClick={() => setSelectedService("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
              selectedService === "all"
                ? "bg-[#7aad3a] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a]"
            }`}
          >
            All Services
          </button>
          {services.map((service) => (
            <button
              key={service.id}
              onClick={() => setSelectedService(service.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
                selectedService === service.id
                  ? "bg-[#7aad3a] text-[#0a0a0a]"
                  : "bg-[#1a1a1a] text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a]"
              }`}
            >
              {service.title}
            </button>
          ))}
        </div>
      </div>

      {/* Services Grid */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px">
          {filteredServices.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>

      {/* Revenue Calculator */}
     

      {/* Success Stories */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="p-8 lg:p-12">
          <h2 className="text-[32px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-8 text-center">
            Success Stories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                artist: "OliveTheBoy",
                achievement: "10M+ streams",
                revenue: "$125,000+ royalties",
                image:
                  "https://images.unsplash.com/photo-1742134516323-7706ec54b567?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8b2xpdmV0aGVib3l8ZW58MHx8MHx8fDA%3D",
              },
              {
                artist: "GoodSin",
                achievement: "Netflix sync placement",
                revenue: "$35,000 sync fee",
                image:
                  "data:image/jpeg;base64,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",
              },
              {
                artist: "Spidomita",
                achievement: "Global distribution",
                revenue: "85 countries reached",
                image:
                  "data:image/jpeg;base64,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",
              },
            ].map((story, index) => (
              <div
                key={index}
                className="bg-[#0c0c0a] border border-[#1e1e1e] rounded-lg p-6"
              >
                <div className="relative w-20 h-20 rounded-full overflow-hidden mb-4 mx-auto">
                  <img
                    src={story.image}
                    alt={story.artist}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[18px] font-medium text-[#f0f0ec] mb-2 text-center">
                  {story.artist}
                </h3>
                <div className="text-center space-y-2">
                  <div className="text-[12px] text-[#7aad3a]">
                    {story.achievement}
                  </div>
                  <div className="text-[11px] text-[#555]">{story.revenue}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ServiceCard({ service }: { service: any }) {
  return (
    <div className="bg-[#0c0c0a] p-8">
      <div className="relative h-40 rounded-lg overflow-hidden mb-6">
        <img 
          src={service.image}
          alt={service.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="mb-2">
            {service.icon}
          </div>
          <h3 className="text-[20px] font-medium text-[#f0f0ec]">
            {service.title}
          </h3>
        </div>
      </div>

      <p className="text-[14px] text-[#888880] mb-4 leading-relaxed">
        {service.description}
      </p>

      <div className="space-y-2 mb-4">
        {service.features.map((feature: string, index: number) => (
          <div key={index} className="flex items-center gap-2">
            <CheckCircle size={12} className="text-[#7aad3a]" />
            <span className="text-[12px] text-[#555]">{feature}</span>
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#1e1e1e]">
        <div>
          <div className="text-[11px] text-[#555] mb-1">Potential Revenue</div>
          <div className="text-[14px] text-[#7aad3a] font-medium">
            {service.revenue}
          </div>
        </div>
        <button className="px-4 py-2 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors">
          Learn More
        </button>
      </div>
    </div>
  );
}

function RevenueCalculator() {
  const [streams, setStreams] = useState("1000000");
  const [syncPlacements, setSyncPlacements] = useState("2");

  const streamingRevenue = parseInt(streams) * 0.004;
  const syncRevenue = parseInt(syncPlacements) * 15000;
  const totalRevenue = streamingRevenue + syncRevenue;

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-[12px] text-[#555] mb-2">
          Monthly Streams
        </label>
        <input
          type="number"
          value={streams}
          onChange={(e) => setStreams(e.target.value)}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
        />
      </div>

      <div>
        <label className="block text-[12px] text-[#555] mb-2">
          Sync Placements (per year)
        </label>
        <input
          type="number"
          value={syncPlacements}
          onChange={(e) => setSyncPlacements(e.target.value)}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors"
        />
      </div>

      <div className="bg-[#1a1a1a] rounded-lg p-6 border border-[#2a2a2a]">
        <div className="space-y-3">
          <div className="flex justify-between">
            <span className="text-[12px] text-[#555]">Streaming Revenue</span>
            <span className="text-[12px] text-[#f0f0ec]">${streamingRevenue.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-[12px] text-[#555]">Sync Revenue</span>
            <span className="text-[12px] text-[#f0f0ec]">${syncRevenue.toFixed(2)}</span>
          </div>
          <div className="pt-3 border-t border-[#2a2a2a] flex justify-between">
            <span className="text-[14px] text-[#d0d0c0] font-medium">Total Revenue</span>
            <span className="text-[14px] text-[#7aad3a] font-medium">${totalRevenue.toFixed(2)}</span>
          </div>
        </div>
      </div>

      <button className="w-full px-6 py-3 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors">
        Get Detailed Report
      </button>
    </div>
  );
}
