import { Box, Typography } from "@mui/material";
import { HeaderProps } from "./Header.type";

export const Header = ({ title }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={{
        py: 2,
        px: { xs: 2, sm: 4, md: 6 },
        borderBottom: "1px solid",
        borderColor: "Highlight",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="h5" color="text.primary">
        {title}
      </Typography>
    </Box>
  );
};

export default Header;
