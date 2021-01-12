import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
//import {} from "./pages";
import NavBar from "molecule/NavBar/NavBar";
import MainComponent from "component/MainComponent/MainComponent";

const PageRouter = (props) => {
    return (
        <Router>
            <Switch>
                <NavBar />
            </Switch>
            <section className="article">
                <Switch>
                    <Route exact path="/" component={MainComponent} />
                </Switch>
            </section>
            <section className="footer">
                <Switch></Switch>
            </section>
        </Router>
    );
};

export default PageRouter;
