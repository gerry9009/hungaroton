import React from "react";

import { HeaderProps } from "./Header.type";

import { Box, Typography } from "@mui/material";
import Link from "next/link";

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
      <Link
        href="/"
        style={{ textDecoration: "none", display: "inline-block" }}
      >
        <Typography
          variant="h5"
          color="text.primary"
          data-testid="page-title"
          component="span"
          sx={{ display: "inline-block" }}
        >
          {title}
        </Typography>
      </Link>
    </Box>
  );
};

export default React.memo(Header);
