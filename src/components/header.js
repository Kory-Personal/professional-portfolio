import {React} from "react";

// Dependencies
import { makeStyles } from '@material-ui/core/styles';

// Material UI Components
// import AppBar from "@material-ui/core/AppBar";
// import Toolbar from "@material-ui/core/Toolbar";
// import IconButton from "@material-ui/core/IconButton";
// import Typography from "@material-ui/core/Typography";

// // Material UI icons
// import MenuIcon from "@material-ui/icons/Menu";

function Header(props) {

  const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    header: {
      display: "flex",
      height: "15em",
      justifyContent: "center",
      // background: "#1C5D47",
      // color: "#53DBAE",
      color: "#81D136",
      background: "#2B5F82",
      margin: 0,
    },
    hOne: {
      fontSize: "3em",
      "@media (min-width: 1200px)": {
        hOne: {
          fontSize: "6em",
          letterSpacing: ".75em",
          height: ".5em",
        }
      }
    },
  }));

  const classes = useStyles();

  
  return (
    <>
      <header className={classes.header}>
        <div>
          <h1 className={classes.hOne}>Kory Jackson</h1>
          <h3>Chef turned Software Developer</h3>
        </div>
      </header>
    </>
  )
}

export default Header;