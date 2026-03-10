import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";
import { db } from "@/lib/db";
import { haiku, user } from "@/lib/db/schema";
import { eq, desc } from "drizzle-orm";
import { HaikuCard } from "@/components/haiku-card";

export default async function LandingPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/home");
  }

  const recentHaikus = await db
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
    .orderBy(desc(haiku.createdAt))
    .limit(6);

  return (
    <>
      {/* Hero */}
      <div className="relative flex items-center justify-center min-h-[85vh] bg-[url('https://images.unsplash.com/photo-1490131784822-b4626a8ec96a?auto=format&fit=crop&w=1950&q=80')] bg-cover bg-center">
        <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-12 max-w-lg mx-4 text-center shadow-xl">
          <h1 className="text-5xl font-bold text-haiku-dark mb-6">
            Hey Haiku
          </h1>
          <div className="text-xl italic text-gray-700 leading-relaxed mb-8">
            <p>Create, share, enjoy it,</p>
            <p>a new world awaits for you,</p>
            <p>Hey Haiku is here.</p>
          </div>
          <p className="text-gray-600 mb-8">
            Ready for the world of writing haikus?
            <br />
            The journey begins now.
          </p>
          <div className="flex gap-4 justify-center">
            <Link
              href="/login"
              className="bg-haiku text-white px-8 py-3 rounded-full hover:bg-haiku-dark transition-colors text-lg"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="border-2 border-haiku text-haiku px-8 py-3 rounded-full hover:bg-haiku hover:text-white transition-colors text-lg"
            >
              Sign Up
            </Link>
          </div>
        </div>

        {/* Scroll hint — ink drops */}
        {recentHaikus.length > 0 && (
          <div className="absolute bottom-8 flex flex-col items-center gap-1.5 animate-pulse">
            <div className="w-1 h-4 bg-haiku-dark/70 rounded-full" />
            <div className="w-1.5 h-3 bg-haiku-dark/50 rounded-full" />
            <div className="w-1 h-2 bg-haiku-dark/30 rounded-full" />
          </div>
        )}
      </div>

      {/* Demo: recent haikus */}
      {recentHaikus.length > 0 && (
        <section className="max-w-5xl mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-haiku-dark mb-3 font-serif italic">
              From our community
            </h2>
            <p className="text-haiku text-lg">
              A glimpse into the haikus our users are creating right now.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {recentHaikus.map((h) => (
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

          <div className="text-center mt-12">
            <Link
              href="/signup"
              className="inline-block bg-haiku text-white px-10 py-4 rounded-full hover:bg-haiku-dark transition-colors text-lg"
            >
              Join Hey Haiku and start writing
            </Link>
          </div>
        </section>
      )}

      <footer className="bg-haiku text-white text-center py-4">
        Hey Haiku, a project made with &hearts; by{" "}
        <a
          href="https://github.com/Juhume"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-haiku-light"
        >
          @juhume
        </a>
      </footer>
    </>
  );
}
