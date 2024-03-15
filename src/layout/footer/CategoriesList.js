import React from "react";
import { List, ListItem, ListItemText, Typography } from "@mui/material";

const CategoriesList = ({ title }) => {
  const categories = ["קטגוריה 1", "קטגוריה 2", "קטגוריה 3", "קטגוריה 4"];

  return (
    <List>
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      {categories.map((category, index) => (
        <ListItem key={index}>
          <ListItemText primary={category} />
        </ListItem>
      ))}
    </List>
  );
};

export default CategoriesList;
