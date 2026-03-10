interface Poem {
  title: string;
  author: string;
  lines: string[];
}

async function getRandomPoem(): Promise<Poem | null> {
  try {
    const res = await fetch("https://poetrydb.org/random", {
      cache: "no-store",
    });
    const poems: Poem[] = await res.json();
    return poems[0] ?? null;
  } catch {
    return null;
  }
}

export default async function PoemsPage() {
  const poem = await getRandomPoem();

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-2">
        In Hey Haiku we like all kinds of poems
      </h1>
      <p className="text-haiku mb-8">
        So here you have a random poem without the structure of a haiku.
      </p>

      {poem ? (
        <div className="bg-white rounded-xl p-8 shadow-sm border border-haiku/10">
          <h2 className="text-2xl font-bold text-haiku-dark mb-1">
            &ldquo;{poem.title}&rdquo;
          </h2>
          <p className="text-haiku mb-6">by {poem.author}</p>
          <div className="space-y-1 text-gray-700 italic leading-relaxed">
            {poem.lines.map((line, i) => (
              <p key={i}>{line || <br />}</p>
            ))}
          </div>
        </div>
      ) : (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500">
            Could not fetch a poem right now. Please try again later.
          </p>
        </div>
      )}

      <p className="mt-6 text-center text-sm text-haiku">
        Refresh the page for a new poem.
      </p>
    </div>
  );
}
