"use client";

import { Button, TextField, Typography } from "@mui/material";
import styles from "./login.module.scss";
import SendIcon from "@mui/icons-material/Send";
import { SyntheticEvent, useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function Login() {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const router = useRouter();

  const login = async (event: SyntheticEvent) => {
    event.preventDefault();
    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (result?.error) {
      console.log(result.error);
      return;
    }

    router.replace("/admin");
  };

  return (
    <form className={styles.loginBox} onSubmit={login}>
      <Typography variant="h5" fontWeight={700} color={"#fff"}>
        Login
      </Typography>
      <TextField
        required
        id="email"
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <TextField
        required
        label="Senha"
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        variant="contained"
        endIcon={<SendIcon />}
        fullWidth
        type="submit"
      >
        Entrar
      </Button>
    </form>
  );
}
