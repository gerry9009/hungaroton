import React from "react";

import { Header } from "../Header";
import { Footer } from "../Footer";

import { Box, Container } from "@mui/material";

import { WithHeaderProps } from "./WithHeader.type";

export const WithHeader = ({
  children,
  title,
  footerString,
}: WithHeaderProps) => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Header title={title} />
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
      <Footer footerString={footerString} />
    </Box>
  );
};

export default React.memo(WithHeader);
