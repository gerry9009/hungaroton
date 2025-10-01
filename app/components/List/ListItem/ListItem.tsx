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
          sx={{
            width: "100%",
            maxHeight: 175,
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
          height: 175,
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
      py={4}
      sx={{
        height: "3rem",
        display: "flex",
        alignItems: "center",
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography
        variant="h6"
        gutterBottom
        sx={{
          color: "text.primary",
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
          <Button size="small" variant="contained" onClick={onClick}>
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
