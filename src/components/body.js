import { React, useState } from "react";
import Bio from "./main/bio.js";
import Experiences from "./main/experiences.js";
import Projects from "./main/projects.js";
import data from "../db/db.json";
import { makeStyles } from '@material-ui/core/styles';


function Body() {

  const [projects] = useState(data.results);

  const useStyles = makeStyles({
    body: {
      maxWidth: 1200,
      justifyContent: "center",
      margin: "auto",
    },
  });
  
  
  const classes = useStyles();


  return(
    <>
      <main className={classes.body}>
        <Bio />
        <Experiences />
        <Projects projects={projects}/>
      </main>
    </>
  )
}

export default Body;