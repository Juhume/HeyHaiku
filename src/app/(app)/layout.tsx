import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { Navbar } from "@/components/navbar";

export default async function AppLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    redirect("/login");
  }

  return (
    <>
      <Navbar user={session.user} />
      <main className="flex-1">{children}</main>
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
