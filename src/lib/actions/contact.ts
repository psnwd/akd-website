"use server";

import { db } from "@/server/db";
import { contactFormSchema } from "../types/contact";

export async function contact(formData: FormData) {
  const { data, success, error } = contactFormSchema.safeParse(
    Object.fromEntries(formData),
  );

  if (!success || !data || error) {
    throw new Error("Validation failed");
  }

  await db.contact.create({
    data: {
      name: data.name,
      email: data.email,
      message: data.message,
    },
  });
}
