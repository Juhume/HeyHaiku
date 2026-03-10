"use server";

import { db } from "@/lib/db";
import { haiku } from "@/lib/db/schema";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import { revalidatePath } from "next/cache";
import { eq, and } from "drizzle-orm";
import { validateHaiku } from "@/lib/haiku";

export async function createHaiku(formData: FormData) {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) {
    return { error: "Not authenticated" };
  }

  const title = formData.get("title") as string;
  const line1 = formData.get("line1") as string;
  const line2 = formData.get("line2") as string;
  const line3 = formData.get("line3") as string;

  if (!title || !line1 || !line2 || !line3) {
    return { error: "All fields are required" };
  }

  const validation = validateHaiku(line1, line2, line3);
  if (!validation.valid) {
    return {
      error: `Not a valid haiku! Syllable count: ${validation.syllables.join("-")} (expected 5-7-5)`,
    };
  }

  await db.insert(haiku).values({
    title,
    line1,
    line2,
    line3,
    authorId: session.user.id,
  });

  revalidatePath("/home");
  revalidatePath("/my-haikus");

  return { success: true };
}

export async function deleteHaiku(id: string): Promise<void> {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session) return;

  await db
    .delete(haiku)
    .where(and(eq(haiku.id, id), eq(haiku.authorId, session.user.id)));

  revalidatePath("/home");
  revalidatePath("/my-haikus");
}
