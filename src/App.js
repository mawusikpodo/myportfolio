import { CssBaseline } from "@material-ui/core";
import { AboutMe } from "./components/AboutMe";
import { Footer } from "./components/Footer";
import Header from "./components/header/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Projects } from "./components/Projects";
import { Resume } from "./components/Resume";

function App() {
  return (
    <>
      <Router>
        <Header />

        <Switch>
          <Route exact path="/" component={AboutMe} />
          <Route path="/projects" component={Projects} />
          <Route path="/resume" component={Resume} />
        </Switch>
        <Footer />
      </Router>
      <CssBaseline />
    </>
  );
}

export default App;
