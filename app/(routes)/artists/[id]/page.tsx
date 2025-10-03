"use client";

import { Layout } from "@/app/components";
import { CONTENT_TEXTS } from "@/app/constants";

import { Button, Card, CardContent, Typography, Box } from "@mui/material";

import { useRouter, useSearchParams } from "next/navigation";
import { useRenderArtistComponent } from "./page.hooks";

export const HomePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const portrait = searchParams.get("img");
  const albums = Number(searchParams.get("albums")) || 0;

  const { renderImage, renderAlbums } = useRenderArtistComponent({
    name,
    portrait,
    albums,
  });

  return (
    <Layout>
      <Card
        variant="outlined"
        sx={{
          maxWidth: 450,
          mx: "auto",
          borderColor: "divider",
          borderWidth: 2,
          borderStyle: "solid",
          borderRadius: 3,
          overflow: "hidden",
          boxShadow: 3,
        }}
      >
        {renderImage()}

        <CardContent>
          <Typography
            variant="h5"
            gutterBottom
            sx={{
              color: "text.primary",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {name}
          </Typography>

          {renderAlbums()}
        </CardContent>
      </Card>

      <Box sx={{ mt: 3, textAlign: "center" }}>
        <Button variant="contained" onClick={() => router.back()}>
          {CONTENT_TEXTS.artistDetails.backButton}
        </Button>
      </Box>
    </Layout>
  );
};

export default HomePage;
