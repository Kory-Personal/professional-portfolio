import React from "react";
import "./projects.scss";

import scribe from "../../assets/scribe.jpg";
import notes from "../../assets/notes.jpg";
import todoList from "../../assets/todoList.jpg";
import woodsmanCafe from "../../assets/woodsmanCafe.jpg";


// import { PowerInputSharp } from "@material-ui/icons";

function Projects(props) {

  const data = props.projects;
  const pictures = { scribe: scribe, notes: notes, todoList: todoList, woodsmanCafe: woodsmanCafe };

  const imageSource = (image, name) => {
    console.log({ pictures })
    let source = ''
    Object.keys(pictures).forEach(key => {
      if (key === image) {
        source = pictures[key]
      }
    })
    return <img src={source} title={name} alt={name}></img>
  }

  return (
    <>
      {      
        data.map((item) => (
          <div className="project" key={item.name}>
            <h1>{item.name}</h1>
            <div className="lists">
              <ul>
                {imageSource(item.image, item.name)}
                <li>Tools: {item.tools}</li>
                <li><a href={item.github_link}>Source Code</a></li>
                <li><a href={item.deployed_link}> Deployed site</a></li>

              </ul>
            </div>
          </div>
        ))
      }
      
      </>
  );
  
}

export default Projects;