import React from "react";

import Home from "../_pages/Home";
import AboutUs from "../_pages/AboutUs";
import Login from "../_pages/Login";

const Pages = {
    Home,
    AboutUs,
    Login,
};

export default (route, routerParams, loginState) => {
    // component does exist
    if (typeof Pages[route.page] !== "undefined") {
        return React.createElement(Pages[route.page], {
            key: route._uid,
            route: route,
            routerParams: routerParams,
            loginState: loginState,
        });
    }

    // component doesn't exist yet
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
