import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";

const FAQCard = ({ image, title }) => {
  return (
    <Card
      sx={{
        width: "200px",
        height: "140px",
        borderRadius: "16px",
        margin: "12px",
      }}
    >
      <CardMedia sx={{ height: "100px" }} image={image} title={title} />
      <CardContent>
        <h3
          style={{
            fontFamily: "Rubik",
            fontWeight: "600",
            fontSize: "18px",
            lineHeight: "10px",
            marginTop: "-10px",
          }}
        >
          {title}
        </h3>
      </CardContent>
    </Card>
  );
};

export default FAQCard;
