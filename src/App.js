import React, { Component, lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./sass/common.scss";
const Home = lazy(() => import("./components/Home"));

class App extends Component {
  render() {
    return (
      <Suspense fallback={"Loading..."}>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </Router>
      </Suspense>
    );
  }
}

export default App;
