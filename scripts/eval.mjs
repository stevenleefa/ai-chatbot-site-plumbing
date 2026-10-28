// Product-engineer eval: run `npm run dev` in one terminal, then
// `npm run eval` in another. Each case checks the bot's answer contains
// an expected fact, or (for out-of-scope questions) refuses to guess.
const BASE = process.env.BASE_URL || "http://localhost:3000";

const cases = [
  { q: "What are your opening hours?", expect: "Monday to Saturday" },
  { q: "How much is drain unblocking?", expect: "$120" },
  { q: "How do I book a visit?", expect: "(555) 019-2740" },
  { q: "What is your cancellation policy?", expect: "24 hours" },
  { q: "Do you service boilers?", expect: "$95" },
  { q: "Do you sell wedding dresses?", expect: "don't have that information" },
  { q: "Are you open on Sundays?", expect: "Emergency call-outs are available 24 hours" },
];

let passed = 0;
for (const c of cases) {
  const res = await fetch(`${BASE}/api/chat`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ message: c.q }),
  });
  const data = await res.json();
  const ok = (data.answer || "").toLowerCase().includes(c.expect.toLowerCase());
  console.log(`${ok ? "PASS" : "FAIL"}  ${c.q}  ->  ${data.answer}`);
  if (ok) passed++;
}
console.log(`\n${passed}/${cases.length} passed`);
process.exit(passed === cases.length ? 0 : 1);
