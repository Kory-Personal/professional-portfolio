import { React, useState } from "react";
import axios from 'axios';
import "./email.scss";

// import Header from "../header.js";
// import Footer from "../footer.js";

import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import {makeStyles} from '@material-ui/core/styles';

import Modal from 'react-modal';
import { Typography } from "@material-ui/core";
import EmailIcon from "@material-ui/icons/Email";
import { ListItemIcon } from "@material-ui/core";

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

Modal.setAppElement('div')

export default function ContactForm() {
    // let subtitle;
    const useStyles = makeStyles((theme) => ({
        emailForm: {
            '& .MuiTextField-root': {
                margin: theme.spacing(1),
                width: '25ch',
                display: "flex",
            }
        }
    }))

    const classes = useStyles();

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [message, setMessage] = useState();
    const [modalIsOpen,setIsOpen] = useState(false);
    
    const openModal = () => {
        setIsOpen(true);
    }

    // const afterOpenModal = () => {
    //     // references are now sync'd and can be accessed.
    //     subtitle.style.color = '#f00';
    // }

    const closeModal = () => {
        setIsOpen(false);
    }

    const onNameChange = (e) => {
        setName(e.target.value);
    }
    const onEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const onMessageChange = (e) => {
        setMessage(e.target.value)
    }

    const onSubmit = async (e) => {
        e.preventDefault();
        try {
            const verify = process.env.REACT_APP_LOCAL
            const isVerified = await axios({
                method: 'GET',
                url: `${verify}/verify?email=${email}`,
            })
            console.log(isVerified.data)
            if (isVerified.data === "valid") {
                const URL = process.env.REACT_APP_LOCAL
                await axios({
                    method: 'POST',
                    url: `${URL}/send`,
                    data: {
                        name,
                        email,
                        message
                    },
                })
                e.target.reset();
            } 
        } catch (e) {
            alert("Please enter a valid email.")
            console.log(e);
        }

    }


    return (
        <>
            
            <button className="modalButton" onClick={openModal}>
                <ListItemIcon>
                    <EmailIcon color="error"/>
                </ListItemIcon>
                <Typography>Email</Typography>
            </button>
            <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <div>
                    <form className={classes.emailForm} onSubmit={onSubmit}>
                        <TextField
                            id="standard-basic"
                            label="Name"
                            placeholder="Full Name"
                            variant="outlined"
                            onChange={onNameChange}
                        />
                        <TextField
                            id="standard-basic"
                            label="Email"
                            placeholder="your-email@example.com"
                            variant="outlined"
                            onChange={onEmailChange}
                        />
                        <TextField
                            id="standard-basic"
                            label="Message"
                            placeholder="Please enter message."
                            variant="outlined"
                            onChange={onMessageChange}
                            multiline
                            rows={4}
                        />
                        <Button type="submit">Send</Button>
                        <Button onClick={closeModal}>Cancel</Button>
                    </form>
                </div>
            </Modal>
        </>
    )
}