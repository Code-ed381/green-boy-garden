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
  title: "Live in Accra",
  venue: "Venue TBA",
  city: "Accra",
  country: "Ghana",
  dateLabel: "12 SEP 2026",
  startsAt: "2026-09-12T20:00:00+00:00",
  artwork: "/olive/1.jpeg",
  ticketUrl: "/shows",
  ctaLabel: "get tickets",
};
