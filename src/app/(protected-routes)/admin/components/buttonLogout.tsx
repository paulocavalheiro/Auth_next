"use client";

import { Button } from "@mui/material";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function ButtonLogout() {
  const router = useRouter();

  const logout = async () => {
    await signOut({ redirect: false });

    router.replace("/");
  };

  return (
    <Button variant="contained" onClick={logout}>
      Logout
    </Button>
  );
}
