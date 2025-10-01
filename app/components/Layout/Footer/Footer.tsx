import { Box, Typography } from "@mui/material";
import { FooterProps } from "./Footer.type";

export const Footer = ({ footerString }: FooterProps) => {
  return (
    <Box
      component="footer"
      sx={{
        py: 1,
        px: { xs: 2, sm: 4, md: 6 },
        borderTop: "1px solid",
        borderColor: "divider",
        textAlign: "center",
        backgroundColor: "background.paper",
      }}
    >
      <Typography variant="body2" color="text.primary">
        © {new Date().getFullYear()} {footerString}
      </Typography>
    </Box>
  );
};
