import React from "react";

//CONTEXT

//API

//COMPONENTS
import { Home } from "../_pages/Home";
import { AboutUs } from "../_pages/AboutUs";
import { Login } from "../_pages/Login";

//Material-UI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//ROUTER
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//STYLES
const useStyles = makeStyles(() => ({
    content: {
        flexGrow: 1,
        padding: 0,
        marginTop: 75,
    },
}));

export const Body = () => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <Container fixed maxWidth="md">
                <Switch>
                    <Route path={"/about-us"}>
                        <AboutUs
                            pageName={"About Us"}
                            message={"Hello Again :D"}
                            containerClass={"about-us"}
                        />
                    </Route>
                    <Route path={"/login"}>
                        <Login
                            pageName={"Login"}
                            message={"Hello Again :D :D"}
                            containerClass={"login"}
                        />
                    </Route>
                    <Route path={"/"}>
                        <Home
                            pageName={"Home"}
                            message={"Hello World"}
                            containerClass={"home"}
                        />
                    </Route>
                </Switch>
            </Container>
        </main>
    );
};
