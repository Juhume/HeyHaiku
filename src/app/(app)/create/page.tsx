"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createHaiku } from "@/app/actions/haiku";
import { countLineSyllables } from "@/lib/haiku";

export default function CreateHaikuPage() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [line1, setLine1] = useState("");
  const [line2, setLine2] = useState("");
  const [line3, setLine3] = useState("");
  const [message, setMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);
  const [pending, setPending] = useState(false);

  const s1 = line1.trim() ? countLineSyllables(line1) : 0;
  const s2 = line2.trim() ? countLineSyllables(line2) : 0;
  const s3 = line3.trim() ? countLineSyllables(line3) : 0;

  function syllableColor(current: number, target: number) {
    if (current === 0) return "text-gray-400";
    if (current === target) return "text-green-600";
    return "text-red-500";
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setPending(true);
    setMessage(null);

    const formData = new FormData();
    formData.set("title", title);
    formData.set("line1", line1);
    formData.set("line2", line2);
    formData.set("line3", line3);

    const result = await createHaiku(formData);

    if (result?.error) {
      setMessage({ type: "error", text: result.error });
      setPending(false);
    } else {
      setMessage({ type: "success", text: "Haiku created successfully!" });
      setPending(false);
      setTimeout(() => router.push("/my-haikus"), 1200);
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-haiku-dark mb-8">
        Create a Haiku
      </h1>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-lg mb-1">Title of your Haiku</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Give a name to your Haiku"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-haiku focus:ring-1 focus:ring-haiku outline-none bg-white text-gray-900"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">
            Line 1{" "}
            <span className={`text-sm ${syllableColor(s1, 5)}`}>
              {s1}/5 syllables
            </span>
          </label>
          <input
            type="text"
            value={line1}
            onChange={(e) => setLine1(e.target.value)}
            placeholder="It begins with five"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-haiku focus:ring-1 focus:ring-haiku outline-none bg-white text-gray-900"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">
            Line 2{" "}
            <span className={`text-sm ${syllableColor(s2, 7)}`}>
              {s2}/7 syllables
            </span>
          </label>
          <input
            type="text"
            value={line2}
            onChange={(e) => setLine2(e.target.value)}
            placeholder="Then seven in the middle"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-haiku focus:ring-1 focus:ring-haiku outline-none bg-white text-gray-900"
          />
        </div>

        <div>
          <label className="block text-lg mb-1">
            Line 3{" "}
            <span className={`text-sm ${syllableColor(s3, 5)}`}>
              {s3}/5 syllables
            </span>
          </label>
          <input
            type="text"
            value={line3}
            onChange={(e) => setLine3(e.target.value)}
            placeholder="Five again to end"
            required
            className="w-full p-3 rounded-lg border border-gray-300 focus:border-haiku focus:ring-1 focus:ring-haiku outline-none bg-white text-gray-900"
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="w-full bg-haiku text-white py-3 rounded-lg text-lg hover:bg-haiku-dark transition-colors disabled:opacity-50 cursor-pointer"
        >
          {pending ? "Creating..." : "Create Haiku"}
        </button>

        {message && (
          <p
            className={`text-center text-lg ${
              message.type === "success" ? "text-green-600" : "text-red-600"
            }`}
          >
            {message.text}
          </p>
        )}
      </form>

      <div className="mt-8 p-6 bg-haiku/5 rounded-xl border border-haiku/10">
        <p className="text-haiku-dark">
          <strong>Remember!</strong>
          <br />
          The haiku structure is 5 syllables in the first line, 7 for the second
          line and 5 again to complete the haiku. If you don&apos;t follow this
          structure, the haiku won&apos;t be created.
        </p>
        <p className="text-haiku-dark mt-4 italic">
          It starts with five here
          <br />
          and followed by seven more
          <br />
          The haiku is done
        </p>
      </div>
    </div>
  );
}
