import React from "react";
import { Link } from "react-router-dom";

import { Button } from "@material-ui/core";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from '@material-ui/core/styles';
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

function Footer() {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2 id="simple-modal-title">Text in a modal</h2>
      <p id="simple-modal-description">
        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
      </p>
      <a href="https://www.linkedin.com/in/kory-jackson-927363164/" aria_hidden="true" ><LinkedInIcon /></a>
      <a href="https://www.github.com/dirrbick"><GitHubIcon /></a>
      <a href="https://www.google.com"><EmailIcon /></a>

    </div>
  );

  return (
    <>
      <Link to="/portfolio">Portfolio</Link>
      <Link><Button onClick={handleOpen}>Contact Me</Button></Link>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
        >
          {body}
        </Modal>
      <Link to="/about-me">About Me</Link>

      <footer>Dirrbick &copy; 2021</footer>
    </>
  )
}

export default Footer;