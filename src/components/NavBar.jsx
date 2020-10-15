import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar() {
  return (
    <div>
      <AppBar   style={{backgroundColor:'#121212',position:'fixed'}}>
        <Toolbar style={{display:'flex',justifyContent:'space-between',width:'100%'}} >
          <img   src="/green-logo.png" alt="Green Logo"/>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
