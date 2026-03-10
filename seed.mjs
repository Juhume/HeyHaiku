import { createClient } from "@libsql/client";

const BASE = "http://localhost:3000";

const turso = createClient({
  url: "libsql://hey-haiku-juhume.aws-eu-west-1.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNjUzNzEsImlkIjoiMDE5Y2Q4ZTMtZDIwMS03NDVmLWE4NGQtMjMwOWFjNjdlMjhkIiwicmlkIjoiMWI1NmRiNDEtNmFmMC00OWE0LThmNjUtZGRmZWExN2E2NDc5In0.rQb47DQvvOgUQ4-5yiHLHrwfJs2BQ1fdG7vLnFLhKvwjUGMPQYQ3XdOBJQGdOldQVWVggqFOxTIOubfh8lbPCw",
});

async function signUp(name, email, password) {
  const res = await fetch(`${BASE}/api/auth/sign-up/email`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Origin: BASE },
    body: JSON.stringify({ name, email, password }),
  });
  const data = await res.json();
  if (!data.user) {
    console.error(`Failed to create ${name}:`, data);
    return null;
  }
  console.log(`Created user: ${name} <${email}>`);
  return data.user;
}

async function main() {
  console.log("Seeding Hey Haiku (Turso)...\n");

  const julio = await signUp("Julio", "julio@heyhaiku.com", "haiku2026!");
  const sakura = await signUp("Sakura", "sakura@heyhaiku.com", "haiku2026!");
  const kenji = await signUp("Kenji", "kenji@heyhaiku.com", "haiku2026!");
  const luna = await signUp("Luna", "luna@heyhaiku.com", "haiku2026!");

  const users = [julio, sakura, kenji, luna].filter(Boolean);
  if (users.length < 4) {
    console.error("Some users failed. Aborting.");
    process.exit(1);
  }

  const now = Math.floor(Date.now() / 1000);

  const haikus = [
    // ── Julio
    { title: "Under the Sea", line1: "Salt water splashing", line2: "Sea creatures play hide and seek", line3: "In the deep blue sea", author: julio.id, offset: -300 },
    { title: "The Basics", line1: "I am first with five", line2: "Then seven in the middle", line3: "Five again to end", author: julio.id, offset: -3600 },
    { title: "Code and Poetry", line1: "Lines of code compile", line2: "Like verses finding their form", line3: "Beauty in structure", author: julio.id, offset: -7200 },
    { title: "Morning Coffee", line1: "Steam curls from the cup", line2: "The world outside still asleep", line3: "First sip wakes the soul", author: julio.id, offset: -14400 },
    // ── Sakura
    { title: "Cherry Blossoms", line1: "Cherry blossoms fall", line2: "Dancing gently in the breeze", line3: "Spring has come at last", author: sakura.id, offset: -1800 },
    { title: "Mountain Morning", line1: "Mist covers the peaks", line2: "Silent birds begin to wake", line3: "The mountain exhales", author: sakura.id, offset: -5400 },
    { title: "Rainy Afternoon", line1: "Raindrops on the roof", line2: "A rhythm only nature", line3: "Knows how to compose", author: sakura.id, offset: -9000 },
    { title: "The Garden Path", line1: "Stones beneath my feet", line2: "Moss grows between every crack", line3: "Time moves without haste", author: sakura.id, offset: -18000 },
    { title: "Autumn Leaves", line1: "Red and gold descend", line2: "The trees undress for winter", line3: "Earth wears their old clothes", author: sakura.id, offset: -25200 },
    // ── Kenji
    { title: "The Old Pond", line1: "An old silent pond", line2: "A frog jumps into the pond", line3: "Splash! Silence again", author: kenji.id, offset: -2700 },
    { title: "Impermanence", line1: "Nothing lasts for long", line2: "Not the cherry blossoms nor", line3: "The winter snowfall", author: kenji.id, offset: -6300 },
    { title: "Midnight Thoughts", line1: "Stars fade in the dawn", line2: "Morning light spills through the trees", line3: "A new day begins", author: kenji.id, offset: -10800 },
    { title: "The Empty Room", line1: "Four walls and a door", line2: "Yet the space inside contains", line3: "The whole universe", author: kenji.id, offset: -21600 },
    // ── Luna
    { title: "Moonlit Path", line1: "The light of the moon", line2: "Guides wanderers through the night", line3: "To places unseen", author: luna.id, offset: -900 },
    { title: "City at Dusk", line1: "Neon lights flicker", line2: "The city hums its own song", line3: "Night swallows the day", author: luna.id, offset: -4500 },
    { title: "First Snow", line1: "The first snow has come", line2: "Blanketing the world in white", line3: "Silence everywhere", author: luna.id, offset: -8100 },
    { title: "Ocean Dreams", line1: "Waves crash on the shore", line2: "The ocean whispers secrets", line3: "That only shells hear", author: luna.id, offset: -16200 },
    { title: "The Telescope", line1: "Through the looking glass", line2: "A million burning worlds spin", line3: "We are never alone", author: luna.id, offset: -28800 },
  ];

  for (const h of haikus) {
    await turso.execute({
      sql: "INSERT INTO haiku (id, title, line1, line2, line3, authorId, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [crypto.randomUUID(), h.title, h.line1, h.line2, h.line3, h.author, now + h.offset],
    });
  }

  console.log(`\nSeeded ${haikus.length} haikus across 4 users.\n`);
  console.log("╔══════════════════════════════════════════════╗");
  console.log("║         LOGIN CREDENTIALS                   ║");
  console.log("╠══════════════════════════════════════════════╣");
  console.log("║ julio@heyhaiku.com   / haiku2026!           ║");
  console.log("║ sakura@heyhaiku.com  / haiku2026!           ║");
  console.log("║ kenji@heyhaiku.com   / haiku2026!           ║");
  console.log("║ luna@heyhaiku.com    / haiku2026!           ║");
  console.log("╚══════════════════════════════════════════════╝");

  turso.close();
}

main().catch(console.error);
