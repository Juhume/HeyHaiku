import { createClient } from "@libsql/client";

const turso = createClient({
  url: "libsql://hey-haiku-juhume.aws-eu-west-1.turso.io",
  authToken:
    "eyJhbGciOiJFZERTQSIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE3NzMxNjUzNzEsImlkIjoiMDE5Y2Q4ZTMtZDIwMS03NDVmLWE4NGQtMjMwOWFjNjdlMjhkIiwicmlkIjoiMWI1NmRiNDEtNmFmMC00OWE0LThmNjUtZGRmZWExN2E2NDc5In0.rQb47DQvvOgUQ4-5yiHLHrwfJs2BQ1fdG7vLnFLhKvwjUGMPQYQ3XdOBJQGdOldQVWVggqFOxTIOubfh8lbPCw",
});

const BASE = "http://localhost:3000";

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
  console.log(`Created user: ${name}`);
  return data.user;
}

async function main() {
  console.log("Adding more users and haikus...\n");

  // ── New users ─────────────────────────────────────────
  const hana = await signUp("Hana", "hana@heyhaiku.com", "haiku2026!");
  const river = await signUp("River", "river@heyhaiku.com", "haiku2026!");
  const mei = await signUp("Mei", "mei@heyhaiku.com", "haiku2026!");
  const atlas = await signUp("Atlas", "atlas@heyhaiku.com", "haiku2026!");
  const sol = await signUp("Sol", "sol@heyhaiku.com", "haiku2026!");
  const iris = await signUp("Iris", "iris@heyhaiku.com", "haiku2026!");
  const wolf = await signUp("Wolf", "wolf@heyhaiku.com", "haiku2026!");
  const ember = await signUp("Ember", "ember@heyhaiku.com", "haiku2026!");

  // Get existing user IDs
  const existing = await turso.execute("SELECT id, name FROM user");
  const userMap = {};
  for (const row of existing.rows) {
    userMap[row.name] = row.id;
  }

  const now = Math.floor(Date.now() / 1000);
  let offset = -60;

  const allHaikus = [
    // ── Hana (flowers & gardens) ────────────────────────
    { title: "Sunflower Field", line1: "Golden faces turn", line2: "Following the sun all day", line3: "Loyal to the light", author: hana?.id },
    { title: "After the Rain", line1: "Petals hold the drops", line2: "Tiny mirrors on each leaf", line3: "The sky lives below", author: hana?.id },
    { title: "Wildflower Meadow", line1: "No one planted these", line2: "Yet they bloom with stubborn grace", line3: "Freedom wears petals", author: hana?.id },
    { title: "The Gardener", line1: "Dirt beneath her nails", line2: "She speaks a language of roots", line3: "And the earth replies", author: hana?.id },
    { title: "Winter Garden", line1: "Bare branches reach up", line2: "Like fingers asking the sky", line3: "When will spring return", author: hana?.id },

    // ── River (water & movement) ────────────────────────
    { title: "Upstream", line1: "The salmon leaps high", line2: "Against the current it fights", line3: "Home is worth the climb", author: river?.id },
    { title: "Still Lake", line1: "Not a ripple moves", line2: "The mountain sees its own face", line3: "Perfectly reversed", author: river?.id },
    { title: "Waterfall", line1: "It does not hesitate", line2: "The edge comes and the leap follows", line3: "Trust the fall below", author: river?.id },
    { title: "Morning Dew", line1: "On every blade rests", line2: "A small transparent jewel", line3: "Gone before midday", author: river?.id },
    { title: "The Flood", line1: "The river forgets", line2: "Its banks and becomes the field", line3: "Power without shape", author: river?.id },

    // ── Mei (seasons & time) ────────────────────────────
    { title: "Equinox", line1: "Day and night agree", line2: "To share the sky equally", line3: "Balance is a gift", author: mei?.id },
    { title: "Summer Storm", line1: "Thunder shakes the house", line2: "Lightning writes across the sky", line3: "Then silence returns", author: mei?.id },
    { title: "October Walk", line1: "Leaves crunch underfoot", line2: "Each step a small orchestra", line3: "Autumn plays its song", author: mei?.id },
    { title: "The Shortest Day", line1: "Darkness comes so soon", line2: "We light candles against night", line3: "Small fires of hope", author: mei?.id },
    { title: "Spring Thaw", line1: "Ice cracks on the pond", line2: "Beneath it the water wakes", line3: "Stretching after sleep", author: mei?.id },
    { title: "Late August", line1: "The heat finally breaks", line2: "A cool breeze slips through the door", line3: "Summer waves goodbye", author: mei?.id },

    // ── Atlas (travel & distance) ───────────────────────
    { title: "Airport Window", line1: "Planes lift off the ground", line2: "Each one holds a different dream", line3: "Scattered by the wind", author: atlas?.id },
    { title: "Foreign Market", line1: "Spices fill the air", line2: "Words I do not understand", line3: "But the smiles I do", author: atlas?.id },
    { title: "Mountain Pass", line1: "Thin air at the top", line2: "Below two valleys divide", line3: "I stand in between", author: atlas?.id },
    { title: "Night Train", line1: "Tracks hum underneath", line2: "Towns flash by like fireflies", line3: "Morning finds me changed", author: atlas?.id },
    { title: "The Map", line1: "Folded and refolded", line2: "The creases mark where I've been", line3: "Blank spaces call me", author: atlas?.id },

    // ── Sol (light & warmth) ────────────────────────────
    { title: "Golden Hour", line1: "The world turns to gold", line2: "Shadows stretch across the grass", line3: "Day takes its last bow", author: sol?.id },
    { title: "Eclipse", line1: "The moon steals the sun", line2: "For a moment all is dark", line3: "Then the light returns", author: sol?.id },
    { title: "Candlelight", line1: "One small flame persists", line2: "Pushing back the heavy dark", line3: "Brave for its own size", author: sol?.id },
    { title: "Sunrise Alone", line1: "No one else is here", line2: "The horizon cracks with pink", line3: "This moment is mine", author: sol?.id },
    { title: "Bonfire", line1: "Sparks rise to the stars", line2: "As if trying to join them", line3: "Brief but beautiful", author: sol?.id },

    // ── Iris (color & perception) ───────────────────────
    { title: "After the Storm", line1: "Colors arch the sky", line2: "A bridge between rain and sun", line3: "Both needed for this", author: iris?.id },
    { title: "Fog", line1: "The world loses shape", line2: "Everything soft and unnamed", line3: "Walking into white", author: iris?.id },
    { title: "Blue Hour", line1: "Not day and not night", line2: "The sky holds its breath in blue", line3: "The in between time", author: iris?.id },
    { title: "Stained Glass", line1: "Light passes through art", line2: "And paints the stone floor in dreams", line3: "Color without weight", author: iris?.id },
    { title: "Northern Lights", line1: "Green curtains of light", line2: "Dancing where the cold sky bends", line3: "The earth is dreaming", author: iris?.id },
    { title: "Red Leaves", line1: "The tree is on fire", line2: "But it does not burn it glows", line3: "Autumn wears its crown", author: iris?.id },

    // ── Wolf (animals & wildness) ───────────────────────
    { title: "The Hawk", line1: "Circles without rest", line2: "Patience drawn in widening rings", line3: "Then the sudden dive", author: wolf?.id },
    { title: "Whale Song", line1: "Deep beneath the waves", line2: "A voice crosses the ocean", line3: "Someone listens back", author: wolf?.id },
    { title: "Spider Web", line1: "Dew on every thread", line2: "The architect sits and waits", line3: "Geometry of need", author: wolf?.id },
    { title: "The Fox", line1: "Red flash in the snow", line2: "Gone before I blink my eyes", line3: "Was it even real", author: wolf?.id },
    { title: "Migration", line1: "They follow the pull", line2: "A compass written in blood", line3: "South until it's warm", author: wolf?.id },

    // ── Ember (fire & transformation) ───────────────────
    { title: "The Forge", line1: "Metal learns new shapes", line2: "Under the hammer's firm hand", line3: "Heat makes things become", author: ember?.id },
    { title: "Campfire Stories", line1: "Faces glow with light", line2: "Old tales find new ears tonight", line3: "The fire remembers", author: ember?.id },
    { title: "Volcanic Ash", line1: "Destruction rains down", line2: "But from the ash the soil grows", line3: "Rich with what was lost", author: ember?.id },
    { title: "Last Ember", line1: "The fire is almost gone", line2: "One coal holds the memory", line3: "Of what burned before", author: ember?.id },
    { title: "Phoenix", line1: "It ends in ashes", line2: "But something stirs underneath", line3: "Beginning again", author: ember?.id },

    // ── Extra haikus for existing users ─────────────────
    { title: "Debugging", line1: "The error persists", line2: "I stare at the screen and think", line3: "Semicolon. Found.", author: userMap["Julio"] },
    { title: "Late Night Push", line1: "Git commit at three", line2: "The tests are finally green", line3: "Sleep can wait no more", author: userMap["Julio"] },
    { title: "The Pull Request", line1: "Please review my code", line2: "I promise it works this time", line3: "Trust me I have tests", author: userMap["Julio"] },

    { title: "Bamboo Forest", line1: "Green towers of peace", line2: "The wind makes them whisper soft", line3: "Ancient standing tall", author: userMap["Sakura"] },
    { title: "Tea Ceremony", line1: "Slow hands pour the tea", line2: "Steam rises like morning prayers", line3: "Stillness in a cup", author: userMap["Sakura"] },
    { title: "Koi Pond", line1: "Orange beneath glass", line2: "The fish trace their endless paths", line3: "Calm in repetition", author: userMap["Sakura"] },

    { title: "Library Dust", line1: "Old pages still smell", line2: "Like all the hands that held them", line3: "Stories touching skin", author: userMap["Kenji"] },
    { title: "Chess Move", line1: "The queen stands alone", line2: "All the pawns have given their", line3: "Lives for her advance", author: userMap["Kenji"] },

    { title: "Paper Airplane", line1: "Folded from a test", line2: "It flies better than my grade", line3: "Freedom has two wings", author: userMap["Luna"] },
    { title: "Shooting Star", line1: "Blink and you will miss", line2: "The universe showing off", line3: "Just for you tonight", author: userMap["Luna"] },
    { title: "Midnight Radio", line1: "Static then a voice", line2: "Someone somewhere plays a song", line3: "We are less alone", author: userMap["Luna"] },
  ];

  let count = 0;
  for (const h of allHaikus) {
    if (!h.author) continue;
    await turso.execute({
      sql: "INSERT INTO haiku (id, title, line1, line2, line3, authorId, createdAt) VALUES (?, ?, ?, ?, ?, ?, ?)",
      args: [crypto.randomUUID(), h.title, h.line1, h.line2, h.line3, h.author, now + offset],
    });
    offset -= Math.floor(Math.random() * 3600) + 600;
    count++;
  }

  console.log(`\nSeeded ${count} new haikus!`);
  console.log(`Total users now: ${Object.keys(userMap).length}`);
  console.log("\nNew user credentials (same password: haiku2026!):");
  console.log("  hana@heyhaiku.com");
  console.log("  river@heyhaiku.com");
  console.log("  mei@heyhaiku.com");
  console.log("  atlas@heyhaiku.com");
  console.log("  sol@heyhaiku.com");
  console.log("  iris@heyhaiku.com");
  console.log("  wolf@heyhaiku.com");
  console.log("  ember@heyhaiku.com");

  turso.close();
}

main().catch(console.error);
