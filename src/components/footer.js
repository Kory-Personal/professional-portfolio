import React from "react";
import { Link } from "react-router-dom";

import {makeStyles} from '@material-ui/core/styles';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

import ContactEmail from "./form/emailModal.js";

function Footer() {

  const useStyles = makeStyles({
    footer: {
      display: "flex",
      justifyContent: "space-evenly",
    }
  })

  const classes = useStyles();
  return (
    <>
      <footer className={classes.footer}>
        <Link to="/portfolio">Portfolio</Link>
        {/* <Link to="/contact-me">Contact Me</Link> */}
        <ContactEmail/>
        <a href="https://www.linkedin.com/in/kory-jackson-927363164/" aria_hidden="true" ><LinkedInIcon /></a>
        <a href="https://www.github.com/dirrbick"><GitHubIcon /></a>
        <a href="https://www.google.com"><EmailIcon /></a>
        <p>Dirrbick &copy; 2021</p>
      </footer>
    </>
  )
}

export default Footer;