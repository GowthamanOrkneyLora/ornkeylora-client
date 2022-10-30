import React from "react";
import {
  AppBar,
  Toolbar,
  List,
  ListItem,
  ListItemText,
  makeStyles,
  Container,
  Button
} from "@material-ui/core";
// import { Home } from "@material-ui/icons";
import { Link } from "react-router-dom";
import Logo from '../../images/logo.PNG';
// import { Home } from "@mui/icons-material";

const usedStyles = makeStyles({
  appBar: {
    background: "#0C7CC0"
  },
  navbarDisplayFlex: {
    display: "flex",
    justifyContent: "space-between",
  },
  navDisplayFlex: {
    display: "flex",
    justifyContent: "space-between"
  },
  linkText: {
    textDecoration: "none",
    // textTransform: "uppercase",
    width: "90px",
    color: "white"
  },
  logo: {
    height: "60px",
    borderRadius: '5%',
    overflow: "hidden"
  }
});

const navLinks = [
  { title: "Customer Details", path: "/customer-details" },
  { title: "Order Details", path: "/order-details" },
//   { title: "register", path: "/register" },
//   { title: "sign in", path: "/signin" }
];

const NavBar = () => {
  const classes = usedStyles();
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Container maxWidth="lg" className={classes.navbarDisplayFlex}>
            <Link to={'/'}>
              <Button edge="start" color="inherit" aria-label="home">
                <div className={classes.logo}>
                  <img src={Logo} style={{height: "100%", width: "100%"}} alt="logo"/>
                </div>
              </Button>
            </Link>
            <List
              component="nav"
              aria-labelledby="main navigation"
              className={classes.navDisplayFlex}
            >
              {navLinks.map(({ title, path }) => (
                <ListItem button key={title} component={Link} to={path}>
                  <ListItemText className={classes.linkText} primary={title} />
                </ListItem>
              ))}
            </List>
          </Container>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
