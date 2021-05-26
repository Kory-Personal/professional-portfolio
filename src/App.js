import { React } from "react";
import { Route, Switch } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import Footer from "./components/footer.js";
import Bio from "./components/main/bio.js";
import Experiences from "./components/main/experiences.js";
import Projects from "./components/main/projects.js";
import LandingPage from "./components/main/landingPage.js";

function App() {


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
      <Switch>

        <Route exact path="/" component={LandingPage}/>
      <main className={classes.body}>
        <Route exact path="/about-me" component={Bio}/>
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/portfolio" component={Projects} />
      </main>
      </Switch>
      <Footer/>
    </>
  )
}

export default App;
