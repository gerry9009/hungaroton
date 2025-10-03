"use client";

import { Layout } from "@/app/components";
import {
  Button,
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
} from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import { useRouter, useSearchParams } from "next/navigation";

export const HomePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const name = searchParams.get("name");
  const portrait = searchParams.get("img");
  const albums = Number(searchParams.get("albums")) || 0;

  const renderImage = () => {
    if (portrait) {
      return (
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            maxHeight: 450,
            height: "auto",
            objectFit: "cover",
          }}
          src={portrait}
          alt={name ?? "portrait"}
        />
      );
    }

    return (
      <Box
        sx={{
          width: "100%",
          height: 450,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <AlbumIcon sx={{ fontSize: 80, color: "grey.500" }} />
      </Box>
    );
  };

  const renderAlbums = () => {
    if (albums === 0) {
      return (
        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", mt: 2, color: "text.secondary" }}
        >
          Nincsenek albumok
        </Typography>
      );
    }

    return (
      <>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: 1,
            mt: 2,
          }}
        >
          {Array.from({ length: albums }).map((_, i) => (
            <AlbumIcon key={i} color="primary" fontSize="large" />
          ))}
        </Box>

        <Typography
          variant="subtitle1"
          sx={{ textAlign: "center", mt: 2, color: "text.secondary" }}
        >
          Összesen: {albums} album
        </Typography>
      </>
    );
  };

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
          Vissza
        </Button>
      </Box>
    </Layout>
  );
};

export default HomePage;
