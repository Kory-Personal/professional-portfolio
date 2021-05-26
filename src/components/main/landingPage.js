import React from "react";
import { Link } from "react-router-dom";
import narrows from "../../assets/tacomaNarrows.jpg";
import waterfall from "../../assets/waterfall.jpg";

import { makeStyles } from "@material-ui/core/styles"

export default function HomePage() {
    const useStyles = makeStyles({
        main: {
            margin: "none",
            display: "flex",
            flex: 1,
            backgroundImage: 'url(' + narrows + ')',
            backgroundSize: "cover",
            backgroundRepeat: "never",
            height: '100%',
            width: "100%",
        }
    })

    const classes = useStyles();

    return (
        <main className={classes.main}>
            <div>
                <p>Hello! My name is Kory Jackson and I am a Software Developer from Washington.</p>
            </div>
        </main>
    )
}