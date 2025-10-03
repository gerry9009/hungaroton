import React from "react";

import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import { ListItemProps } from "./ListItem.type";

import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";

export const ListItem = ({
  title,
  imgUrl,
  ContentComponent,
  buttonConfig,
}: ListItemProps) => {
  const renderImage = () => {
    if (imgUrl) {
      return (
        <CardMedia
          component="img"
          loading="lazy"
          sx={{
            width: "100%",
            maxHeight: { xs: 120, sm: 150, md: 175 },
            height: "auto",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          src={imgUrl}
          alt={title}
        />
      );
    }

    return (
      <Box
        sx={{
          width: "100%",
          maxHeight: { xs: 120, sm: 150, md: 175 },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "background.default",
        }}
      >
        <InsertPhotoIcon sx={{ fontSize: 40, color: "grey.500" }} />
      </Box>
    );
  };

  const renderTitle = () => (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
        minHeight: { xs: "3.6rem", sm: "4.2rem", md: "4.8rem" },
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "text.primary",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          lineHeight: 1.2,
        }}
      >
        {title}
      </Typography>
    </Box>
  );

  const renderContent = () => {
    if (ContentComponent) {
      return (
        <Box
          mt={2}
          sx={{
            display: "flex",
          }}
        >
          <ContentComponent />
        </Box>
      );
    }

    return null;
  };

  const renderButton = () => {
    if (buttonConfig) {
      const { value, onClick } = buttonConfig;
      return (
        <Box
          mt={2}
          pt={2}
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            borderTop: "1px solid",
            borderColor: "divider",
          }}
        >
          <Button
            sx={{
              fontSize: { xs: "0.75rem", sm: "0.875rem", md: "1rem" },
              padding: { xs: "4px 8px", sm: "6px 12px", md: "8px 16px" },
            }}
            variant="contained"
            onClick={onClick}
          >
            {value}
          </Button>
        </Box>
      );
    }

    return null;
  };

  return (
    <Grid size={1}>
      <Card
        variant="outlined"
        sx={{
          minWidth: 275,
          borderColor: "divider",
          borderWidth: 2,
          borderStyle: "solid",
        }}
      >
        {renderImage()}
        <CardContent>
          {renderTitle()}
          {renderContent()}
          {renderButton()}
        </CardContent>
      </Card>
    </Grid>
  );
};

export default React.memo(ListItem);
