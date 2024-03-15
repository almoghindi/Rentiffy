import React from "react";
import AppBar from "@mui/material/AppBar";
import { Container, Toolbar, Box, Divider } from "@mui/material";
import "@fontsource/rubik";
import NavMenu from "./NavMenu";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavLinks from "./NavLinks";
import NavCategories from "./NavCategories";
const pages = [
  { title: "שאלות ותשובות", link: "/faq" },
  { title: "פרסום מוצר", link: "/upload-product" },
  { title: "התחברות", link: "/login" },
];
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
function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="sticky"
      style={{ background: "#ffffff", color: "#000000" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <NavMenu
              anchorElNav={anchorElNav}
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              pages={pages}
              categories={categories}
            />
          </Box>
          <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
            <Logo />
          </Box>

          <SearchBar />
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }} edge="end">
            <NavLinks handleCloseNavMenu={handleCloseNavMenu} />
          </Box>
          <Box
            sx={{
              flexGrow: 0,
              display: { xs: "block", md: "none" },
              marginRight: "10px",
            }}
          >
            <Logo />
          </Box>
        </Toolbar>
      </Container>
      <Divider />
      <Box sx={{ flexGrow: 0, display: { xs: "none", md: "block" } }}>
        <NavCategories handleCloseNavMenu={handleCloseNavMenu} />
      </Box>
    </AppBar>
  );
}

export default ResponsiveAppBar;
