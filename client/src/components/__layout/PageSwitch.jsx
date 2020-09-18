import React from "react";

//Import Page Renderer Component
import PageRenderer from "./PageRenderer";

//Import Switch and Route
import { Switch, Route } from "react-router-dom";

//Define and Export PageSwitch Component
export default function PageSwitch(props) {
    const { appRoutesArray } = props;

    return (
        <main>
            <Switch>
                {appRoutesArray.map((route) => (
                    <Route
                        exact
                        path={route.slugPattern}
                        render={(routerParams) => (
                            <>{PageRenderer(route, routerParams)}</>
                        )}
                    ></Route>
                ))}
            </Switch>
        </main>
    );
}
