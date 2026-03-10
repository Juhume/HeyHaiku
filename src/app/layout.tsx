import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hey Haiku",
  description: "Create, share, enjoy it — a new world awaits for you — Hey Haiku is here.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Vollkorn:ital,wght@0,400;0,600;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
