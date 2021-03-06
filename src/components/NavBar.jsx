import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar({openCategory}) {
  return (
    <div>
      <AppBar className="header" style={{backgroundColor:'#121212',position:'fixed',zIndex:'1'}}>
        <Toolbar className="toolbar" >
            <a href={window.location.pathname === '/' ? '/' : '/en'}>
          <img  className="logo"  src="/green-logo.png" alt="Green Logo"/>
          </a>
          <IconButton onClick={() => openCategory()} color="inherit"  aria-label="menu">
            <MenuIcon  />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
