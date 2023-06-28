"use server";

import { auth } from "@/lib/auth";

export const saveGuestbookMessage = (data: FormData) => {
  // auth
};

export const getSession = async () => {
  const session = await auth();
  if (!session || !session.user) throw new Error("Unauthorized to access");

  return session;
};
