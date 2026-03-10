const masters = [
  {
    name: "Matsuo Bash\u014d",
    era: "1644\u20131694",
    haikus: [
      {
        lines: ["An old silent pond", "A frog jumps into the pond", "Splash! Silence again"],
      },
      {
        lines: ["On a withered branch", "A crow has alighted", "Nightfall in autumn"],
      },
      {
        lines: ["The light of a candle", "Is transferred to another", "Spring twilight"],
      },
    ],
  },
  {
    name: "Yosa Buson",
    era: "1716\u20131784",
    haikus: [
      {
        lines: ["A summer river", "Being crossed how pleasing", "With sandals in hand"],
      },
      {
        lines: ["In the moonlight", "The color and scent of the", "Wisteria seems far away"],
      },
    ],
  },
  {
    name: "Kobayashi Issa",
    era: "1763\u20131828",
    haikus: [
      {
        lines: ["O snail", "Climb Mount Fuji", "But slowly, slowly!"],
      },
      {
        lines: ["Everything I touch", "With tenderness alas", "Pricks like a bramble"],
      },
      {
        lines: ["The snow is melting", "And the village is flooded", "With children"],
      },
    ],
  },
  {
    name: "Masaoka Shiki",
    era: "1867\u20131902",
    haikus: [
      {
        lines: ["I want to sleep", "Swat the flies softly", "Please"],
      },
      {
        lines: ["After killing a spider", "How lonely I feel", "In the cold of night"],
      },
    ],
  },
];

const prompts = [
  "Write about the exact moment when morning light first touches your window.",
  "Capture the sound of rain on different surfaces.",
  "Describe a single leaf falling \u2014 where does it land?",
  "What does the space between two heartbeats feel like?",
  "Write about something you noticed today that no one else saw.",
  "Capture the last moment before sleep.",
  "Describe the color of silence.",
  "Write about something ending and something beginning in the same breath.",
];

export default function InspirationPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-2">
        Never fear the writer&apos;s block
      </h1>
      <p className="text-haiku mb-10">
        Let the masters inspire you and the prompts guide your pen.
      </p>

      {/* Writing prompts */}
      <section className="mb-12">
        <h2 className="text-2xl font-bold text-haiku-dark mb-4">
          Writing Prompts
        </h2>
        <div className="grid gap-3 md:grid-cols-2">
          {prompts.map((prompt, i) => (
            <div
              key={i}
              className="bg-white p-4 rounded-lg border border-haiku/10 text-gray-700 italic"
            >
              &ldquo;{prompt}&rdquo;
            </div>
          ))}
        </div>
      </section>

      {/* Haiku masters */}
      <section>
        <h2 className="text-2xl font-bold text-haiku-dark mb-6">
          Learn from the Masters
        </h2>
        <div className="space-y-8">
          {masters.map((master) => (
            <div key={master.name}>
              <h3 className="text-xl font-bold text-haiku-dark">
                {master.name}{" "}
                <span className="text-sm font-normal text-haiku">
                  ({master.era})
                </span>
              </h3>
              <div className="grid gap-4 md:grid-cols-3 mt-3">
                {master.haikus.map((h, i) => (
                  <div
                    key={i}
                    className="bg-white p-5 rounded-lg border border-haiku/10"
                  >
                    {h.lines.map((line, j) => (
                      <p key={j} className="italic text-gray-700 leading-relaxed">
                        {line}
                      </p>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
