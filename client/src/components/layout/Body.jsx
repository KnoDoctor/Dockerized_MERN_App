import React from "react";

//CONTEXT

//API

//COMPONENTS
import { Home } from "../pages/Home";

//Material-UI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

//ROUTER
import { BrowserRouter as Switch, Route } from "react-router-dom";

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
                <h1>This is the Body Title</h1>
                <Switch>
                    {/* <Route path={props.appRoutes.Login.url}>
                <Login pageName={props.appRoutes.Login.pageName} />
            </Route>
            <Route path="/trip/:trip" component={Trip}></Route>
            <Route
                path="/destination/:continent/:country/:region"
                component={Destination}
            ></Route>
            <Route
                path="/destination/:continent/:country"
                component={Destination}
            ></Route>
            <Route path={props.appRoutes.About.url}>
                <About pageName={props.appRoutes.About.pageName} />
            </Route>
            <Route path={props.appRoutes.Legacy.url}>
                <Legacy pageName={props.appRoutes.Legacy.pageName} />
            </Route>
            <Route
                path="/destinations/:continent/:country"
                component={Country}
            ></Route>
            <Route
                path="/destinations/:continent"
                component={Continent}
            ></Route>
            <Route path={props.appRoutes.Destinations.url}>
                <Destinations
                    pageName={props.appRoutes.Destinations.pageName}
                />
            </Route>
            <Route path={props.appRoutes.Experiences.url}>
                <Experiences
                    pageName={props.appRoutes.Experiences.pageName}
                />
            </Route>
            <Route
                path="/experience/:experience"
                component={Experience}
            ></Route>
            <Route path={props.appRoutes.Tripfinder.url}>
                <Tripfinder
                    pageName={props.appRoutes.Tripfinder.pageName}
                />
            </Route> */}
                    <Route path={"/"}>
                        <Home pageName={""} message={""} containerClass={""} />
                    </Route>
                </Switch>
            </Container>
        </main>
    );
};
