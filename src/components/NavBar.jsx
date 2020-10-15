import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";

export default function NavBar() {
  return (
    <div>
      <AppBar position="static"  style={{backgroundColor:'#121212'}}>
        <Toolbar style={{display:'flex',justifyContent:'space-between',width:'100%'}} >
          <img  width="200" src="/green-logo.png"/>
          <IconButton color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}
