"use client";

import { Layout } from "@/app/components";
import { Box, Button, Typography } from "@mui/material";
import { useRouter } from "next/navigation";

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
          Üdv a Hungaroton katalógusban
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="text.secondary"
        >
          Böngészd a művészeket és fedezd fel a zenéiket!
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => router.push("/artists")}
        >
          Művészek listája
        </Button>
      </Box>
    </Layout>
  );
}
