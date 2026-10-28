export const business = {
  name: "SwiftFix Plumbing",
  tagline: "Fast, honest plumbing for homes and small businesses.",
  phone: "(555) 019-2740",
  email: "hello@swiftfixplumbing.example",
  address: "8 Workshop Lane",
  hours: "Monday to Saturday, 8am to 6pm. Emergency call-outs 24 hours a day.",
};

export type KnowledgeChunk = {
  id: string;
  title: string;
  text: string;
  keywords: string[];
};

// Same template as the salon demo, only this file (plus the chat greeting
// and eval questions) changed. That is the point: one reusable pattern,
// many niches.
export const knowledge: KnowledgeChunk[] = [
  {
    id: "hours",
    title: "Opening hours",
    text: "SwiftFix Plumbing is open Monday to Saturday, 8am to 6pm. Emergency call-outs are available 24 hours a day.",
    keywords: ["open", "hours", "close", "closed", "when", "sunday", "monday", "emergency"],
  },
  {
    id: "location",
    title: "Service area",
    text: "SwiftFix Plumbing is based at 8 Workshop Lane and serves homes within 20 miles. The phone number is (555) 019-2740.",
    keywords: ["where", "location", "address", "area", "serve", "cover"],
  },
  {
    id: "leak",
    title: "Leak repair prices",
    text: "Emergency leak repair costs $89 for the call-out, plus parts. Most leak repairs take 1 to 2 hours.",
    keywords: ["leak", "repair", "price", "cost", "how much", "emergency", "burst", "pipe"],
  },
  {
    id: "drain",
    title: "Drain unblocking prices",
    text: "Drain unblocking costs $120 and usually takes about 1 hour. If the blockage needs camera inspection, that is an extra $50.",
    keywords: ["drain", "unblock", "blocked", "price", "cost", "clog"],
  },
  {
    id: "boiler",
    title: "Boiler service prices",
    text: "A boiler service costs $95 and takes about 1 hour. It includes a safety check and a written report.",
    keywords: ["boiler", "service", "price", "cost", "safety", "check"],
  },
  {
    id: "booking",
    title: "Booking",
    text: "You can book using the booking form on this site, or by calling (555) 019-2740. For emergencies, call directly — do not use the form, so the team sees it straight away.",
    keywords: ["book", "booking", "appointment", "reserve", "call"],
  },
  {
    id: "cancellation",
    title: "Cancellation policy",
    text: "Please give at least 24 hours notice to cancel or reschedule a non-emergency visit, so the slot can be offered to someone else.",
    keywords: ["cancel", "cancellation", "reschedule", "change", "notice"],
  },
  {
    id: "services",
    title: "Services",
    text: "SwiftFix Plumbing offers leak repair, drain unblocking, boiler services, tap and toilet repairs, and bathroom fitting quotes.",
    keywords: ["services", "offer", "do you", "tap", "toilet", "bathroom", "fitting"],
  },
];

export const services = [
  { name: "Emergency leak repair", price: "$89 + parts", time: "1–2 hrs", note: "24-hour emergency call-outs" },
  { name: "Drain unblocking", price: "$120", time: "about 1 hr", note: "Camera inspection +$50 if needed" },
  { name: "Boiler service", price: "$95", time: "about 1 hr", note: "Includes safety check and report" },
  { name: "Tap / toilet repair", price: "from $60", time: "about 1 hr", note: "Parts quoted before work starts" },
];
