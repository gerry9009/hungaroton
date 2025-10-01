import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import InsertPhotoIcon from "@mui/icons-material/InsertPhoto";
import { ListItemProps } from "./ListItem.type";

export const ListItem = ({ text, imgUrl, contentChildren }: ListItemProps) => {
  return (
    <Card
      variant="outlined"
      sx={{
        minWidth: 275,
        borderColor: "divider",
        borderWidth: 2,
        borderStyle: "solid",
      }}
    >
      {imgUrl ? (
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            maxHeight: 150,
            height: "auto",
            aspectRatio: "1/1",
            objectFit: "cover",
          }}
          src={imgUrl}
          alt={text}
        />
      ) : (
        <Box
          sx={{
            width: "100%",
            height: 150,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            bgcolor: "background.default",
          }}
        >
          <InsertPhotoIcon sx={{ fontSize: 40, color: "grey.500" }} />
        </Box>
      )}
      <CardContent>
        <Typography
          variant="h5"
          component="div"
          gutterBottom
          sx={{ color: "text.primary", fontSize: 14 }}
        >
          {text}
        </Typography>
        {contentChildren}
      </CardContent>
    </Card>
  );
};

export default ListItem;
