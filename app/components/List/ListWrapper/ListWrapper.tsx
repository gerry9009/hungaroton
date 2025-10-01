import React from "react";

import { Grid, Typography } from "@mui/material";
import { ListWrapperProps } from "./ListWrapper.type";
import { EmptyList } from "../EmptyList";

export const ListWrapper = ({
  title,
  children,
  EmptyComponent,
}: ListWrapperProps) => {
  const count = React.Children.count(children);
  const hasChildren = count > 0;

  const renderContent = () => {
    if (hasChildren) {
      return children;
    }

    return EmptyComponent ? <EmptyComponent /> : <EmptyList />;
  };

  return (
    <Grid
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 1, sm: 2, md: 4 }}
      container
      justifyContent="center"
      alignItems="center"
      sx={{ width: "100%" }}
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

export default ListWrapper;
