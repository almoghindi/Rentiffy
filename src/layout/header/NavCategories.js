import React from "react";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const categories = [
  "אופניים",
  "צילום ואודיו",
  "אירועים",
  "מסיבות",
  "קמפינג וטיולים",
  "שמלות וחליפות",
  "ספורט ימי",
  " ספורט חורפי",
  "צעצועים וציוד לתינוקות",
  "כלים וציוד בנייה",
];
const NavCategories = ({ handleCloseNavMenu }) => {
  return (
    <div>
      {categories.map((category) => (
        <Link to="/search">
          <Button
            key={category}
            onClick={handleCloseNavMenu}
            sx={{
              my: 1,
              color: "black",
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "21.33px",
              fontFamily: "Rubik",
              marginRight: "10px",
            }}
          >
            {category}
          </Button>
        </Link>
      ))}
    </div>
  );
};

export default NavCategories;
