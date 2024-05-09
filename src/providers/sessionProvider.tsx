"use client";

import { SessionProvider } from "next-auth/react";
import { ReactNode } from "react";

interface NextProviderProps {
  children: ReactNode;
}

export default function NextAuthSessionProvider({
  children,
}: NextProviderProps) {
  return <SessionProvider>{children}</SessionProvider>;
}
