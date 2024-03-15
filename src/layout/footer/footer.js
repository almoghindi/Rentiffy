import React from "react";
import { Box } from "@mui/material";
import CategoriesList from "./CategoriesList";
import SocialMediaIcons from "./SocialMediaIcons";
import PageLinks from "./PageLinks";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#010925",
        color: "#fff",
        padding: "24px 0",
        fontFamily: "Rubik",
        marginTop: "100px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          margin: "0 auto",
        }}
      >
        <Box sx={{ display: "flex", gap: "24px" }}>
          <CategoriesList title="אופניים" />
          <CategoriesList title="צילום ואודיו" />
          {/* Add more category lists here */}
        </Box>
        <Box
          sx={{
            backgroundColor: "#000",
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "16px",
            padding: "12px 0",
            width: "100%",
          }}
        >
          <Box sx={{ marginRight: "20%" }}>
            <PageLinks />
          </Box>
          <Box sx={{ marginLeft: "20%" }}>
            <SocialMediaIcons />{" "}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
