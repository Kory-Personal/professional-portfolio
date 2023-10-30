import {React, useState} from "react";
import { Link } from "react-router-dom";

import "./landingPage.scss";

import ContactEmail from "../form/emailModal.js";
import Background from "../../assets/portfolio-background.jpg";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu"
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import PersonIcon from '@material-ui/icons/Person';
import { ListItemIcon } from "@material-ui/core";


export default function HomePage() {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <main className="landingMain">
            <div className="landingDiv">
                {/* <p>Hello! My name is Kory Jackson and I am a Software Developer from Washington. I am an Air Force Veteran with 15 years experience in the Hospitality Industry, starting at McDonalds until recently becoming a Chef. I recently made a career change and went through the FullStack JavaScript course with Code Fellows. With what I have learned paired with my work ethic, I am looking to estabish myself in the Software Industry.</p> */}
                    <p>
                        Kory Jackson
                    </p>
                    <p>
                    I am a Chef turned Software Developer
                    </p>
                <IconButton
                    aria-label="more"
                    aria-controls="long-menu"
                    aria-haspopup="true"
                    onClick={handleClick}
                >
                    <MenuIcon fontSize="large"/>
                </IconButton>
                <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                >
                    <MenuItem>
                        <ListItemIcon>
                            <PersonIcon color="primary"/>
                        </ListItemIcon>
                        <Link to="/portfolio">Portfolio</Link>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <LinkedInIcon color="primary"/>
                        </ListItemIcon>
                        <a href="https://www.linkedin.com/in/kory-jackson-927363164/" aria_hidden="true" >LinkedIn</a>
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <GitHubIcon color="primary"/>
                        </ListItemIcon>
                        <a href="https://www.github.com/dirrbick">Github</a>
                    </MenuItem>
                    <MenuItem>
                        <ContactEmail />
                    </MenuItem>
                </Menu>
            </div>
            <img src={Background} alt="Portfolio Picture"></img>
        </main>
    )
}