import { getServerSession } from "next-auth";
import { ReactNode } from "react";
import { nextAuthOptions } from "../api/auth/[...nextauth]/route";
import { redirect } from "next/navigation";

interface PrivateLayoutProps {
  children: ReactNode;
}

export default async function PrivateLayout({
  children,
}: Readonly<{
  children: PrivateLayoutProps;
}>) {
  /**
   * verifica sessão do user
   */
  const session = await getServerSession(nextAuthOptions);

  if (!session) {
    redirect("/");
  }

  return <>{children}</>;
}
