import { db } from "@/lib/db";
import { haiku, user } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { HaikuCard } from "@/components/haiku-card";
import Link from "next/link";

export default async function HomePage() {
  const allHaikus = await db
    .select({
      id: haiku.id,
      title: haiku.title,
      line1: haiku.line1,
      line2: haiku.line2,
      line3: haiku.line3,
      createdAt: haiku.createdAt,
      authorName: user.name,
    })
    .from(haiku)
    .innerJoin(user, eq(haiku.authorId, user.id))
    .orderBy(desc(haiku.createdAt));

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-2">
        All haikus created by our users
      </h1>
      <p className="text-haiku mb-8">
        A growing collection of poetry, one haiku at a time.
      </p>

      {allHaikus.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-xl text-gray-500 mb-4">
            No haikus yet. Be the first!
          </p>
          <Link
            href="/create"
            className="inline-block bg-haiku text-white px-6 py-3 rounded-full hover:bg-haiku-dark transition-colors"
          >
            Create a Haiku
          </Link>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2">
          {allHaikus.map((h) => (
            <HaikuCard
              key={h.id}
              title={h.title}
              line1={h.line1}
              line2={h.line2}
              line3={h.line3}
              author={h.authorName}
            />
          ))}
        </div>
      )}
    </div>
  );
}
