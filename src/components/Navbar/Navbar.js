import React from "react";
import "./Navbar.css";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FoodBankIcon from "@mui/icons-material/FoodBank";

const Navbar = () => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color="error">
          <Toolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 1 }}
            >
              <FoodBankIcon />
            </IconButton>

            <Typography
              className="nav-logo"
              variant="h6"
              component="div"
              sx={{ flexGrow: 1 }}
            >
              FoodHub
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
