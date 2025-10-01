import React from "react";

import { Box, Typography } from "@mui/material";

import InboxIcon from "@mui/icons-material/Inbox";

export const EmptyList = () => (
  <Box
    sx={{
      width: "100%",
      py: 6,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      color: "text.secondary",
    }}
  >
    <InboxIcon sx={{ fontSize: 64 }} />
    <Typography variant="h6" component="p" sx={{ ml: 2 }}>
      No items to display
    </Typography>
  </Box>
);

export default React.memo(EmptyList);
