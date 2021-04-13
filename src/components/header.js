import React from "react";

import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function Header() {
  return (
    <>
      <h1>Kory Jackson</h1>
      <h3>Chef turned Software Developer</h3>
      <a href="https://www.linkedin.com/in/kory-jackson-927363164/" aria_hidden="true" ><LinkedInIcon /></a>
      <a href="https://www.github.com/dirrbick"><GitHubIcon /></a>
      <a href="https://www.google.com"><EmailIcon/></a>
    </>
  )
}

export default Header;