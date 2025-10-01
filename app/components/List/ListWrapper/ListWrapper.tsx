import React from "react";

import { EmptyList } from "../EmptyList";

import { Box, Grid, Skeleton, Typography } from "@mui/material";

import { ListWrapperProps } from "./ListWrapper.type";

export const ListWrapper = ({
  title,
  children,
  loading = false,
  EmptyComponent,
}: ListWrapperProps) => {
  const count = React.Children.count(children);
  const hasChildren = count > 0;

  const renderContent = () => {
    if (loading) {
      return Array.from({ length: 9 }).map((_, index) => (
        <Grid size={1} key={index}>
          <Box
            sx={{
              minWidth: 275,
              borderColor: "divider",
              borderWidth: 2,
              borderStyle: "solid",
            }}
          >
            <Skeleton variant="rectangular" height={250} />
            <Skeleton
              variant="text"
              sx={{
                height: "3rem",
              }}
            />
            <Skeleton variant="text" width="60%" />
          </Box>
        </Grid>
      ));
    }

    if (hasChildren) {
      return children;
    }

    return EmptyComponent ? <EmptyComponent /> : <EmptyList />;
  };

  return (
    <Grid
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 2, md: 3 }}
      container
      justifyContent="center"
      alignItems="stretch"
    >
      <Typography
        variant="h4"
        component="h2"
        gutterBottom
        sx={{ width: "100%", textAlign: "center" }}
      >
        {title}
      </Typography>
      {renderContent()}
    </Grid>
  );
};

export default React.memo(ListWrapper);
