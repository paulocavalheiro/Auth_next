// "use client";
import { Inter } from "next/font/google";
import styles from "./layout.module.scss";
import React from "react";
import { Box, Container } from "@mui/material";
import NextTopLoader from "nextjs-toploader";
import NextAuthSessionProvider from "@/providers/sessionProvider";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <React.Fragment>
      <html lang="en">
        <body className={inter.className}>
          <NextTopLoader
            color="#2299DD"
            height={3}
            shadow="0 0 10px #2299DD,0 0 5px #2299DD"
            crawl={true}
          />
          <NextAuthSessionProvider>
            <Container maxWidth="md">
              <Box className={styles.containerBox}>{children}</Box>
            </Container>
          </NextAuthSessionProvider>
        </body>
      </html>
    </React.Fragment>
  );
}
