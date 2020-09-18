import React from "react";

//Bring in Page Containers
import Home from "../_pages/Home";
import AboutUs from "../_pages/AboutUs";
import Login from "../_pages/Login";

//Setup Page Container Lookup Object
const Pages = {
    Home,
    AboutUs,
    Login,
};

//Define and Export PageSwitch Component
////route = appRoutesArray[i]
////routerParams = Router component props
////login
export default (route, routerParams) => {
    // If Component Exists in Lookup Array, Render Component
    if (typeof Pages[route.page] !== "undefined") {
        return React.createElement(Pages[route.page], {
            key: route._uid,
            route: route,
            routerParams: routerParams,
        });
    }

    // Else Render Component "Page Has Not Been Created" Component
    return React.createElement(
        () => (
            <div
                style={{
                    marginTop: "75px",
                    padding: "3rem",
                    textAlign: "center",
                }}
            >
                <span style={{ fontSize: "1.5rem" }}>
                    The page{" "}
                    <strong>
                        <em>{route.page}</em>
                    </strong>{" "}
                    has not been created yet.
                </span>
            </div>
        ),
        { key: route._uid }
    );
};
