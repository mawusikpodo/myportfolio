import { CssBaseline } from "@material-ui/core";
import { AboutMe } from "./components/about/AboutMe";
import { Footer } from "./components/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Hero from "./components/hero/Hero";
import { Projects } from "./components/projects/Projects";
import Contact from "./components/contact/Contact";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Hero} />
          <Route path="/about" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/contacts" component={Contact} />
        </Switch>

        <Footer />
      </Router>
      <CssBaseline />
    </>
  );
}

export default App;
