"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "@/lib/auth-client";

interface NavbarProps {
  user: { id: string; name: string };
}

export function Navbar({ user }: NavbarProps) {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogout = async () => {
    await signOut();
    router.push("/");
    router.refresh();
  };

  const links = [
    { href: "/home", label: "Home" },
    { href: "/create", label: "Create Haiku" },
    { href: "/my-haikus", label: `${user.name}'s Haikus` },
    { href: "/inspiration", label: "Inspiration" },
    { href: "/poems", label: "Random Poem" },
    { href: "/info", label: "About Haikus" },
  ];

  return (
    <nav className="bg-haiku-dark text-white px-6 py-4">
      <div className="max-w-6xl mx-auto flex items-center justify-between flex-wrap gap-4">
        <Link href="/home" className="text-2xl font-bold tracking-wide">
          Hey Haiku
        </Link>

        <div className="flex items-center gap-5 flex-wrap text-sm">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`hover:text-haiku-light transition-colors ${
                pathname === link.href
                  ? "text-haiku-light underline underline-offset-4"
                  : ""
              }`}
            >
              {link.label}
            </Link>
          ))}
          <button
            onClick={handleLogout}
            className="hover:text-haiku-light transition-colors cursor-pointer"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
}
