import React from "react";

import { Box, Container } from "@mui/material";

import { BaseLayoutProps } from "./BaseLayout.type";

export const BaseLayout = ({ children }: BaseLayoutProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Container
        component="main"
        maxWidth="lg"
        sx={{
          flex: 1,
          py: { xs: 4, sm: 6, md: 8 },
        }}
      >
        {children}
      </Container>
    </Box>
  );
};

export default React.memo(BaseLayout);
