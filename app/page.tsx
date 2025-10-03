"use client";

import { useRouter } from "next/navigation";

import { Layout } from "@/app/components";
import { CONTENT_TEXTS } from "./constants";

import { Box, Button, Typography } from "@mui/material";

export default function HomePage() {
  const router = useRouter();

  return (
    <Layout>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "70vh",
          gap: 4,
        }}
      >
        <Typography variant="h3" component="h1" textAlign="center">
          {CONTENT_TEXTS.home.welcome}
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
        >
          {CONTENT_TEXTS.home.welcomeMessage}
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/artists")}
        >
          {CONTENT_TEXTS.home.button}
        </Button>
      </Box>
    </Layout>
  );
}
