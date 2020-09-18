import React from "react";

//CONTEXT
import { AboutUsProvider } from "../../context/_pageContext/aboutUsContext/AboutUsContext";

//COMPONENTS
import AboutUsSection from "../pageComponents/AboutUsSection";

export default (props) => {
    return (
        <AboutUsProvider>
            <AboutUsSection
                route={props.route}
                routerParams={props.routerParams}
            />
        </AboutUsProvider>
    );
};
