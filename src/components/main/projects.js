import React from "react";

import todoList from "../../assets/todo-list.jpg";
import woodsman from "../../assets/woodsman-cafe.jpg";
import { PowerInputSharp } from "@material-ui/icons";

function Projects(props) {

  const data = props.projects;
  
  return (
    <>
      <div>
        <img src={props.img} alt="props.data.name" width={300} height={200}/>
        <h1>Todo List</h1>
        <div>
          <ul>
            <li>Tools: React, MongoDB</li>
            <li><a href="https://github.com/Dirrbick/react-hooks">Source Code</a></li>
            <li><a href="https://joe-kory-todo-list.netlify.app/"> Deployed site</a></li>
          </ul>
        </div>
      </div>
      
      </>
  );
  
}

export default Projects;