import theme from "@/app/utils/theme";
import { Box, Pagination, useMediaQuery } from "@mui/material";
import { PaginationBarProps } from "./PaginationBar.type";

export const PaginationBar = ({ ...props }: PaginationBarProps) => {
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery(theme.breakpoints.between("sm", "md"));

  let paginationSize: "small" | "medium" | "large" = "large";
  if (isSmallScreen) paginationSize = "small";
  else if (isMediumScreen) paginationSize = "medium";
  else paginationSize = "large";

  return (
    <Box
      pt={10}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Pagination
        {...props}
        size={paginationSize}
        color="primary"
        shape="rounded"
      />
    </Box>
  );
};

export default PaginationBar;
