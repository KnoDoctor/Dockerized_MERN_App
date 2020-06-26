import React from "react";

//Import Page Renderer
import PageRenderer from "./PageRenderer";

//Import Switch and Route
import { Switch, Route } from "react-router-dom";

export default function PageSwitch(props) {
    const { loginState, appRoutesArray } = props;

    return (
        <main>
            <Switch>
                {appRoutesArray.map((route) => (
                    <Route
                        exact
                        path={route.slugPattern}
                        render={(routerParams) => (
                            <>{PageRenderer(route, routerParams, loginState)}</>
                        )}
                    ></Route>
                ))}
            </Switch>
        </main>
    );
}
