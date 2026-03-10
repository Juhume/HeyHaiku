import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (session) {
    redirect("/home");
  }

  return (
    <>
      <div className="flex-1 flex items-center justify-center bg-haiku-cream">
        <div className="w-full max-w-md mx-4">
          <Link href="/" className="block text-center mb-8">
            <h1 className="text-4xl font-bold text-haiku-dark">Hey Haiku</h1>
          </Link>
          {children}
        </div>
      </div>
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
