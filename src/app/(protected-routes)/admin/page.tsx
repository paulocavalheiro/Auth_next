import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import ButtonLogout from "./components/buttonLogout";
import { Box, Stack } from "@mui/material";
import { getServerSession } from "next-auth";
import { useEffect } from "react";

export default async function UsuarioList() {
  const session = await getServerSession(nextAuthOptions);

  return (
    <>
      <Stack spacing={2} direction="column" sx={{ width: "300px" }}>
        <Box>
          Bem vindo <b> {session?.user?.name} </b> !
        </Box>
        <ButtonLogout />
      </Stack>
    </>
  );
}
