import { React, useState } from "react";

import scribe from "../../assets/scribe.jpg";
import notes from "../../assets/notes.jpg";
import todoList from "../../assets/todoList.jpg";
import woodsmanCafe from "../../assets/woodsmanCafe.jpg";
import Footer from "../footer.js";
import Header from "../header.js";
import data from "../../db/db.json";

import { makeStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";


function Projects(props) {
  const [projects] = useState(data.results);

  const pictures = { scribe: scribe, notes: notes, todoList: todoList, woodsmanCafe: woodsmanCafe };

  const imageSource = (image, name, style) => {
    console.log({ pictures })
    let source = ''
    Object.keys(pictures).forEach(key => {
      if (key === image) {
        source = pictures[key]
      }
    })
    return <CardMedia className = { style } image = { source } title = { name }/>
    // return <img src={source} title={name} alt={name}></img>
  }

  const useStyles = makeStyles({
    root: {
      maxWidth: 225,
      height: 350,
      padding: 10,
      margin: 15,
    },
    media: {
      width: 225,
      height: 161,
    },
  });
  
  const classes = useStyles();
  return (
    <>
      <Header />
      <main>
        <Grid container spacing={4}>
          {
            projects.map((item) => (
              <Card className={classes.root}>          
                  {imageSource(item.image, item.name, classes.media)}
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                    {item.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                    Tools: {item.tools}
                    </Typography>
                  </CardContent>
                <CardActions>
                  <Button size="small" color="primary" href={item.github_link}>
                    Source Code
                  </Button>
                  <Button size="small" color="primary" href={item.deployed_link}>
                    Deployed Site
                  </Button>
                </CardActions>
              </Card>

            ))
          }  
        </Grid>
      </main>
      <Footer/>
      </>
  );
  
}

export default Projects;