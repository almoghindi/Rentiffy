import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton, Menu, MenuItem, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";

const NavMenu = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  pages,
  categories,
}) => {
  const [anchorElCategories, setAnchorElCategories] = useState(null);
  const open = Boolean(anchorElCategories);

  // Function to handle opening the categories submenu
  const handleOpenCategories = (event) => {
    setAnchorElCategories(event.currentTarget);
  };

  // Function to handle closing the categories submenu
  const handleCloseCategories = () => {
    setAnchorElCategories(null);
  };
  return (
    <>
      <IconButton
        size="large"
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {pages.map((page) => (
          <Link to={page.link} key={page} style={{ color: "black" }}>
            <MenuItem onClick={handleCloseNavMenu}>
              <Typography textAlign="center">{page.title}</Typography>
            </MenuItem>
          </Link>
        ))}
        <MenuItem key="categories" onClick={handleCloseNavMenu}>
          <Button
            id="fade-button"
            aria-controls={open ? "fade-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleOpenCategories}
            sx={{
              textAlign: "right",
              color: "black",
              fontSize: "16px",
              fontFamily: "rubik",
              padding: 0,
            }}
          >
            קטגוריות
          </Button>
        </MenuItem>
      </Menu>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={open}
        onClose={handleCloseCategories}
        sx={{
          display: { xs: "block", md: "none" },
        }}
      >
        {categories.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  );
};

export default NavMenu;
