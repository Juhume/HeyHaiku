import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { db } from "@/lib/db";
import { haiku } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { deleteHaiku } from "@/app/actions/haiku";
import { HaikuCard } from "@/components/haiku-card";
import Link from "next/link";

export default async function MyHaikusPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const myHaikus = await db
    .select()
    .from(haiku)
    .where(eq(haiku.authorId, session!.user.id))
    .orderBy(desc(haiku.createdAt));

  if (myHaikus.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-bold text-haiku-dark mb-4">
          You haven&apos;t created any haiku
        </h1>
        <p className="text-xl text-haiku mb-6">
          But don&apos;t worry, the journey starts with a single verse.
        </p>
        <Link
          href="/create"
          className="inline-block bg-haiku text-white px-8 py-3 rounded-full hover:bg-haiku-dark transition-colors text-lg"
        >
          Create your first Haiku
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-8">
        All haikus you created
      </h1>

      <div className="grid gap-6 md:grid-cols-2">
        {myHaikus.map((h) => (
          <HaikuCard
            key={h.id}
            title={h.title}
            line1={h.line1}
            line2={h.line2}
            line3={h.line3}
            actions={
              <form action={deleteHaiku.bind(null, h.id)}>
                <button
                  type="submit"
                  className="text-sm text-red-500 hover:text-red-700 transition-colors cursor-pointer"
                >
                  Delete this haiku
                </button>
              </form>
            }
          />
        ))}
      </div>
    </div>
  );
}
