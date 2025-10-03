import { Box, CardMedia, Typography } from "@mui/material";
import AlbumIcon from "@mui/icons-material/Album";
import { CONTENT_TEXTS } from "@/app/constants";

export const useRenderArtistComponent = ({
  name,
  portrait,
  albums,
}: {
  name: string | null;
  portrait: string | null;
  albums: number;
}) => {
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
          {CONTENT_TEXTS.artistDetails.noAlbums}
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
          {CONTENT_TEXTS.artistDetails.albums.replace(
            "{albums}",
            String(albums)
          )}
        </Typography>
      </>
    );
  };

  return { renderImage, renderAlbums };
};
