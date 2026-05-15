"use client";

import { useState } from "react";
import {
  Mic,
  Headphones,
  Settings,
  Clock,
  Calendar,
  Users,
  Wifi,
  Coffee,
  Car,
  Shield,
  Zap,
  Volume2,
  Sliders,
  Radio,
  Music,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  CheckCircle,
  Star,
  MapPin,
  Phone,
  Mail,
  ChevronRight,
} from "lucide-react";

export default function StudioPage() {
  const [selectedStudio, setSelectedStudio] = useState("all");
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    studio: "",
    date: "",
    duration: "",
    project: "",
    message: "",
  });

  const studios = [
    {
      id: "studio-a",
      name: "Studio A - The Flagship",
      description:
        "Our premier recording space with world-class analog gear and digital precision.",
      image:
        "https://images.unsplash.com/photo-1627407660893-fe01f60d44c4?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "8 people",
      rate: "$150/hour",
      status: "available",
      features: [
        "Neve 8078 Console",
        "Dolby Atmos",
        "Pro Tools Ultimate",
        "96kHz/24-bit",
      ],
      equipment: [
        "Neumann U87",
        "AKG C414",
        "CLA-76 Compressors",
        "Lexicon Reverbs",
      ],
      size: "400 sq ft",
      engineer: "Included",
    },
    {
      id: "studio-b",
      name: "Studio B - Production Suite",
      description:
        "Perfect for beat making, production, and vocal recording sessions.",
      image:
        "https://images.unsplash.com/photo-1632582204758-5ac65783517a?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      capacity: "4 people",
      rate: "$90/hour",
      status: "available",
      features: ["SSL 4000 Console", "Logic Pro X", "Live Room", "Vocal Booth"],
      equipment: [
        "Yamaha NS10s",
        "Apollo Interface",
        "Universal Audio Plugins",
        "MPC",
      ],
      size: "250 sq ft",
      engineer: "Available",
    },
    // {
    //   id: "studio-c",
    //   name: "Studio C - Mixing & Mastering",
    //   description:
    //     "Specialized room for post-production, mixing, and mastering services.",
    //   image:
    //     "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   capacity: "3 people",
    //   rate: "$120/hour",
    //   status: "booked",
    //   features: [
    //     "5.1 Surround",
    //     "Stem Processing",
    //     "Mastering Suite",
    //     "Reference Monitors",
    //   ],
    //   equipment: [
    //     "Genelec Monitors",
    //     "Manley EQ",
    //     "SSL Bus Compressor",
    //     "Waves Plugins",
    //   ],
    //   size: "200 sq ft",
    //   engineer: "Required",
    // },
    // {
    //   id: "studio-d",
    //   name: "Studio D - Writing Room",
    //   description:
    //     "Creative space for songwriting, pre-production, and collaboration.",
    //   image:
    //     "https://images.unsplash.com/photo-1563330232-57114bb0823c?q=80&w=2340&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    //   capacity: "6 people",
    //   rate: "$60/hour",
    //   status: "available",
    //   features: [
    //     "Acoustic Treatment",
    //     "Whiteboard",
    //     "Comfortable Seating",
    //     "Coffee Bar",
    //   ],
    //   equipment: ["Guitars", "Keyboards", "Microphones", "PA System"],
    //   size: "300 sq ft",
    //   engineer: "Optional",
    // },
  ];

  const amenities = [
    { icon: <Wifi size={20} />, label: "High-Speed WiFi" },
    { icon: <Coffee size={20} />, label: "Premium Coffee Bar" },
    { icon: <Car size={20} />, label: "Free Parking" },
    { icon: <Shield size={20} />, label: "24/7 Security" },
    { icon: <Users size={20} />, label: "Lounge Area" },
    { icon: <Zap size={20} />, label: "Backup Power" }
  ];

  const engineers = [
    {
      name: "Gross Riddim",
      role: "Chief Engineer",
      experience: "4 years",
      specialties: ["Rock", "Pop", "Hip-Hop"],
      image:
        "https://images.unsplash.com/photo-1621619054919-167f2fcf135c?q=80&w=2332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      rating: 4.9,
    },
    {
      name: "Sarah Chen",
      role: "Mixing Engineer",
      experience: "10+ years",
      specialties: ["Electronic", "R&B", "Afrobeats"],
      image:
        "https://media.istockphoto.com/id/1490436487/photo/producer-man-analyzing-the-recording-in-the-a-recording-studio.jpg?s=2048x2048&w=is&k=20&c=NEuzCdkt_p6rSeFCk6MhecgtWq1F042jPXzTv4V2iis=",
      rating: 4.8,
    },
    {
      name: "Marcus Johnson",
      role: "Recording Engineer",
      experience: "8+ years",
      specialties: ["Live Recording", "Jazz", "Classical"],
      image:
        "https://media.istockphoto.com/id/1403883358/photo/metropol-studios_property-jpg-metropol-studios_sylvain-metropol-studios_mariama-jpg-metropol.jpg?s=2048x2048&w=is&k=20&c=gUmmqu95y_L-ktlRsZEd4-SvD_prd6WOMOU82RkR4gE=",
      rating: 4.9,
    },
  ];

  const filteredStudios = selectedStudio === "all" 
    ? studios 
    : studios.filter(studio => studio.id === selectedStudio);

  const handleBookingChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      {/* Page Header */}
      <div className="bg-[#0c0c0a] px-5 sm:px-10 lg:px-20 py-16 lg:py-[64px]">
        <div className="text-center">
          <div className="text-[10px] tracking-[0.18em] text-[#555] mb-4">
            WORLD-CLASS RECORDING FACILITIES
          </div>
          <h1 className="text-[40px] sm:text-[48px] lg:text-[52px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-4">
            Where hits are made.
          </h1>
          <p className="text-[14px] text-[#888880] mb-8 max-w-3xl mx-auto">
            Four state-of-the-art recording studios equipped with vintage analog warmth 
            and cutting-edge digital technology. The perfect environment for creating your next masterpiece.
          </p>

          {/* Quick Stats */}
          <div className="flex flex-wrap justify-center gap-8 mb-8">
            <div className="flex items-center gap-2">
              <Mic className="w-5 h-5 text-[#7aad3a]" />
              <div>
                <div className="text-[20px] text-[#f0f0ec] font-medium">4</div>
                <div className="text-[10px] text-[#555]">Studios</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="w-5 h-5 text-[#7aad3a]" />
              <div>
                <div className="text-[20px] text-[#f0f0ec] font-medium">$2M+</div>
                <div className="text-[10px] text-[#555]">Equipment Value</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#7aad3a]" />
              <div>
                <div className="text-[20px] text-[#f0f0ec] font-medium">500+</div>
                <div className="text-[10px] text-[#555]">Sessions/Year</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-[#7aad3a]" />
              <div>
                <div className="text-[20px] text-[#f0f0ec] font-medium">4.9</div>
                <div className="text-[10px] text-[#555]">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Studio Filter */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="flex flex-wrap justify-center gap-3 p-6">
          <button
            onClick={() => setSelectedStudio("all")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
              selectedStudio === "all"
                ? "bg-[#7aad3a] text-[#0a0a0a]"
                : "bg-[#1a1a1a] text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a]"
            }`}
          >
            All Studios
          </button>
          {studios.map((studio) => (
            <button
              key={studio.id}
              onClick={() => setSelectedStudio(studio.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-250 ${
                selectedStudio === studio.id
                  ? "bg-[#7aad3a] text-[#0a0a0a]"
                  : "bg-[#1a1a1a] text-[#555] border border-[#2a2a2a] hover:border-[#3a3a3a]"
              }`}
            >
              {studio.name.split(" - ")[0]}
            </button>
          ))}
        </div>
      </div>

      {/* Studios Grid */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px">
          {filteredStudios.map((studio) => (
            <StudioCard key={studio.id} studio={studio} />
          ))}
        </div>
      </div>

      {/* Amenities */}
      <div className="bg-[#0c0c0a] border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="p-8 lg:p-12">
          <h2 className="text-[32px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-8 text-center">
            Premium Amenities
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {amenities.map((amenity, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-[#1a2a10] rounded-full flex items-center justify-center mx-auto mb-3">
                  <div className="text-[#7aad3a]">
                    {amenity.icon}
                  </div>
                </div>
                <div className="text-[11px] text-[#555]">
                  {amenity.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Engineers */}
      <div className="border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="p-8 lg:p-12">
          <h2 className="text-[32px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-8 text-center">
            Expert Engineers
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {engineers.map((engineer, index) => (
              <div key={index} className="bg-[#0c0c0a] border border-[#1e1e1e] rounded-lg p-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden mb-4 mx-auto">
                  <img 
                    src={engineer.image}
                    alt={engineer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-[18px] font-medium text-[#f0f0ec] mb-1 text-center">
                  {engineer.name}
                </h3>
                <div className="text-[12px] text-[#7aad3a] mb-2 text-center">
                  {engineer.role}
                </div>
                <div className="text-[11px] text-[#555] text-center mb-3">
                  {engineer.experience} experience
                </div>
                <div className="flex flex-wrap gap-1 justify-center mb-3">
                  {engineer.specialties.map((specialty, idx) => (
                    <span key={idx} className="px-2 py-1 bg-[#1a1a1a] text-[#555] text-[9px] border border-[#2a2a2a]">
                      {specialty}
                    </span>
                  ))}
                </div>
                <div className="flex items-center justify-center gap-1">
                  <Star size={12} className="text-[#7aad3a]" />
                  <span className="text-[11px] text-[#7aad3a]">{engineer.rating}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Booking Form */}
      <div className="bg-[#0c0c0a] border border-[#1e1e1e] border-t-0 mx-5 sm:mx-10 lg:mx-20">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          {/* Left Side */}
          <div className="p-8 lg:p-12">
            <h2 className="text-[32px] font-medium text-[#f0f0ec] tracking-[-0.02em] mb-4">
              Book Your Session
            </h2>
            <p className="text-[14px] text-[#888880] mb-6 leading-relaxed">
              Ready to create your next hit? Book studio time with our world-class 
              facilities and experienced engineers. We'll help you bring your vision to life.
            </p>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-[#7aad3a]" />
                <span className="text-[13px] text-[#d0d0c0]">+233 555 123 4567</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-[#7aad3a]" />
                <span className="text-[13px] text-[#d0d0c0]">studio@greenboyrecords.com</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#7aad3a]" />
                <span className="text-[13px] text-[#d0d0c0]">Accra, Ghana</span>
              </div>
            </div>

            <div className="bg-[#1a1a1a] rounded-lg p-4 border border-[#2a2a2a]">
              <div className="flex items-center gap-2 mb-2">
                <Clock className="w-4 h-4 text-[#7aad3a]" />
                <span className="text-[12px] text-[#7aad3a] font-medium">Operating Hours</span>
              </div>
              <div className="space-y-1">
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#555]">Monday - Friday</span>
                  <span className="text-[#d0d0c0]">9:00 AM - 12:00 AM</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#555]">Saturday</span>
                  <span className="text-[#d0d0c0]">10:00 AM - 10:00 PM</span>
                </div>
                <div className="flex justify-between text-[11px]">
                  <span className="text-[#555]">Sunday</span>
                  <span className="text-[#d0d0c0]">12:00 PM - 8:00 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Form */}
          <div className="p-8 lg:p-12 bg-[#0c0c0a]">
            <BookingForm form={bookingForm} onChange={handleBookingChange} />
          </div>
        </div>
      </div>
    </div>
  );
}

function StudioCard({ studio }: { studio: any }) {
  return (
    <div className="bg-[#0c0c0a] p-8">
      <div className="relative h-48 rounded-lg overflow-hidden mb-6">
        <img 
          src={studio.image}
          alt={studio.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c0a]/80 to-transparent" />
        <div className="absolute top-4 right-4">
          <span className={`px-3 py-1 text-[10px] font-medium rounded-full ${
            studio.status === 'available' 
              ? 'bg-[#1a2a10] text-[#7aad3a]' 
              : 'bg-[#2a1a10] text-[#d4a000]'
          }`}>
            {studio.status === 'available' ? 'Available' : 'Booked'}
          </span>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-[20px] font-medium text-[#f0f0ec] mb-1">
            {studio.name}
          </h3>
          <p className="text-[12px] text-[#888880]">
            {studio.description}
          </p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-[11px] text-[#555] mb-1">Capacity</div>
          <div className="text-[13px] text-[#d0d0c0]">{studio.capacity}</div>
        </div>
        <div>
          <div className="text-[11px] text-[#555] mb-1">Rate</div>
          <div className="text-[13px] text-[#7aad3a]">{studio.rate}</div>
        </div>
        <div>
          <div className="text-[11px] text-[#555] mb-1">Size</div>
          <div className="text-[13px] text-[#d0d0c0]">{studio.size}</div>
        </div>
        <div>
          <div className="text-[11px] text-[#555] mb-1">Engineer</div>
          <div className="text-[13px] text-[#d0d0c0]">{studio.engineer}</div>
        </div>
      </div>

      <div className="mb-4">
        <div className="text-[11px] text-[#555] mb-2">Key Features</div>
        <div className="space-y-1">
          {studio.features.slice(0, 3).map((feature: string, index: number) => (
            <div key={index} className="flex items-center gap-2">
              <CheckCircle size={10} className="text-[#7aad3a]" />
              <span className="text-[10px] text-[#555]">{feature}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center justify-between pt-4 border-t border-[#1e1e1e]">
        <button className="text-[#7aad3a] hover:text-[#8abd4a] text-sm font-medium transition-colors">
          View Details →
        </button>
        <button className={`px-4 py-2 text-sm font-medium transition-colors ${
          studio.status === 'available'
            ? 'bg-[#7aad3a] text-[#0a0a0a] hover:bg-[#8abd4a]'
            : 'bg-[#1a1a1a] text-[#555] border border-[#2a2a2a] cursor-not-allowed'
        }`} disabled={studio.status !== 'available'}>
          {studio.status === 'available' ? 'Book Now' : 'Unavailable'}
        </button>
      </div>
    </div>
  );
}

function BookingForm({ form, onChange }: { form: any; onChange: (e: any) => void }) {
  return (
    <form className="space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Name"
            className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Email"
            className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
            required
          />
        </div>
      </div>

      <div>
        <select
          name="studio"
          value={form.studio}
          onChange={onChange}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
          required
        >
          <option value="">Select Studio</option>
          <option value="studio-a">Studio A - The Flagship</option>
          <option value="studio-b">Studio B - Production Suite</option>
          <option value="studio-c">Studio C - Mixing & Mastering</option>
          <option value="studio-d">Studio D - Writing Room</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <input
            type="date"
            name="date"
            value={form.date}
            onChange={onChange}
            className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
            required
          />
        </div>
        <div>
          <select
            name="duration"
            value={form.duration}
            onChange={onChange}
            className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
            required
          >
            <option value="">Duration</option>
            <option value="4">4 Hours</option>
            <option value="8">8 Hours</option>
            <option value="12">12 Hours</option>
            <option value="24">24 Hours</option>
          </select>
        </div>
      </div>

      <div>
        <input
          type="text"
          name="project"
          value={form.project}
          onChange={onChange}
          placeholder="Project Type (e.g., Album, Single, Podcast)"
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm"
          required
        />
      </div>

      <div>
        <textarea
          name="message"
          value={form.message}
          onChange={onChange}
          placeholder="Tell us about your project..."
          rows={4}
          className="w-full px-4 py-3 bg-[#141414] border border-[#2a2a2a] text-[#f0f0ec] rounded-md focus:outline-none focus:border-[#7aad3a] transition-colors text-sm resize-none"
        />
      </div>

      <button
        type="submit"
        className="w-full px-6 py-3 bg-[#7aad3a] text-[#0a0a0a] text-sm font-medium hover:bg-[#8abd4a] transition-colors"
      >
        Book Session
      </button>
    </form>
  );
}
