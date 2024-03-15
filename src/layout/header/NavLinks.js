import React from "react";
import { Button, Divider } from "@mui/material";
import { Link } from "react-router-dom";

const NavLinks = ({ handleCloseNavMenu }) => {
  return (
    <>
      <Link to="/faq">
        <Button
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "black",
            display: "block",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "30px",
            fontFamily: "Rubik",
            marginLeft: "20px",
          }}
        >
          שאלות ותשובות
        </Button>
      </Link>
      <Divider orientation="vertical" variant="middle" flexItem />
      <Link to="/upload-product">
        <Button
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "white",
            display: "block",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "30px",
            fontFamily: "Rubik",
            backgroundColor: "#0CC397",
            borderRadius: "100px",
            width: "133px",
            height: "46px",
            marginRight: "40px",
            ":hover": { backgroundColor: "#0CC397" },
          }}
        >
          פרסום מוצר
        </Button>
      </Link>

      <Link to="/login">
        <Button
          onClick={handleCloseNavMenu}
          sx={{
            my: 2,
            color: "black",
            display: "block",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "30px",
            fontFamily: "Rubik",
            textDecoration: "underline",
            marginRight: "20px",
            ":hover": { textDecoration: "underline" },
          }}
        >
          התחברות
        </Button>
      </Link>
    </>
  );
};

export default NavLinks;
