import { React } from "react";
import { Route, Switch } from 'react-router-dom';


import Footer from "./components/footer.js";
import Experiences from "./components/main/experiences.js";
import Projects from "./components/main/projects.js";
import LandingPage from "./components/main/landingPage.js";
import ContactForm from "./components/form/emailModal.js";

function App() {
  return(
    <>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/experiences" component={Experiences} />
        <Route exact path="/portfolio" component={Projects} />
        <Route exact path="/contact-me" component={ContactForm}/>
      </Switch>
    </>
  )
}

export default App;
