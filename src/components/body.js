import { React, useState, useEffect } from "react";
import axios from 'axios';
import Bio from "./main/bio.js";
import Experiences from "./main/experiences.js";
import Projects from "./main/projects.js";

function Body() {

  const [projects, setProjects] = useState([]);

  const API = process.env.REACT_APP_PORTFOLIO_API;

  const getProjects = async () => {
    const response = await axios({
      method: 'get',
      url: `${API}`
    })
    console.log(response.data.results);
    setProjects(response.data.results);
  }

  useEffect(() => {
    getProjects();
  }, []);

  return(
    <>
      <main>
        <Bio />
        <Experiences />
        <Projects projects={projects}/>
      </main>
    </>
  )
}

export default Body;