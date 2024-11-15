import React, { useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [anchorElement, setAnchorElement] = useState(null);

  const handleClose = () => {
    setAnchorElement(null);
  };

  const handleOpen = (event) => {
    setAnchorElement(event.currentTarget);
  };

  return (
    <div className="navContainer">
      <div className="mobileMenu">
        <Button
          aria-controls="simple-menu"
          aria-haspopup="true"
          onClick={handleOpen}
        >
          <span className="material-symbols-outlined">menu</span>
        </Button>
        <Menu
          keepMounted
          anchorEl={anchorElement}
          onClose={handleClose}
          open={Boolean(anchorElement)}
        >
          <MenuItem onClick={handleClose}>
            <Link to={"/"}>Home</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/about"}>About</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/projects"}>Projects</Link>
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <Link to={"/contact"}>Contact</Link>
          </MenuItem>
        </Menu>
      </div>
      <div className="nav">
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/projects">Projects</a>
        <a href="/contact">Contact</a>
      </div>
    </div>
  );
}
