export interface FeaturedEvent {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  date: string;
  time: string;
  dateLabel: string;
  startsAt: string;
  artwork: string;
  ticketUrl: string;
  ctaLabel: string;
  earlyBirdSoldOut: boolean;
  generalTicketsStatus: "available" | "coming-soon" | "sold-out";
  generalTicketsMessage?: string;
}

export const featuredEvent: FeaturedEvent = {
  id: "live-accra-2026",
  title: "O'live Experience 2026",
  venue: "National Theatre",
  city: "Accra",
  country: "Ghana",
  date: "20 NOV 2026",
  time: "Gates 6PM · Show 7PM",
  dateLabel: "20 NOV 2026 · GATES 6PM · SHOW 7PM",
  startsAt: "2026-11-20T19:00:00+00:00",
  artwork: "/olive/olive experience 3.jpg",
  ticketUrl: "https://app.chaleapp.org/checkout/242",
  ctaLabel: "get tickets",
  earlyBirdSoldOut: true,
  generalTicketsStatus: "available",
};

export const shows: FeaturedEvent[] = [featuredEvent];
