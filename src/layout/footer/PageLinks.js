import React from "react";
import { Box, Link } from "@mui/material";

const PageLinks = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "flex-end",
        alignItems: "center",
      }}
    >
      <Box sx={{ mr: 2 }}>
        <Link to="/" color="inherit">
          בית
        </Link>
      </Box>
      <Box sx={{ mr: 2 }}>
        <Link to="/faq" color="inherit">
          שאלות ותשובות
        </Link>
      </Box>
      <Box sx={{ mr: 2 }}>
        <Link to="/login" color="inherit">
          התחברות
        </Link>
      </Box>
    </Box>
  );
};

export default PageLinks;
