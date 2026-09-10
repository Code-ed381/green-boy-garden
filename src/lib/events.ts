export interface FeaturedEvent {
  id: string;
  title: string;
  venue: string;
  city: string;
  country: string;
  dateLabel: string;
  startsAt: string;
  artwork: string;
  ticketUrl: string;
  ctaLabel: string;
}

export const featuredEvent: FeaturedEvent = {
  id: "live-accra-2026",
  title: "O'live Experience Early Bird Tickets",
  venue: "National Theatre",
  city: "Accra",
  country: "Ghana",
  dateLabel: "20 NOV 2026 · GATES 6PM · SHOW 8PM",
  startsAt: "2026-11-20T20:00:00+00:00",
  artwork: "/olive/OTB Live.JPG",
  ticketUrl: "https://app.chaleapp.org/checkout/242",
  ctaLabel: "get tickets",
};
