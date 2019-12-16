import React from "react";
import {AppBar,Toolbar,IconButton,Typography,Button} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';
import useStyles from "../Styles/NavigationStyle"


export default function Navigation() {
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar className={classes.Toolbar}>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
          Javascript Games!!
        </Typography>
        <div className={classes.grow}/>
        <Button className={classes.Button}color="inherit">Sign up</Button>
        <Button className={classes.Button}color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
  )
}