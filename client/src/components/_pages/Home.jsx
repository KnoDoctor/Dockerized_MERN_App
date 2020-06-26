import React from "react";

//CONTEXT
import { HomepageProvider } from "../../context/_pageContext/homepageContext/HomepageContext";

//COMPONENTS
import HomepageReddit from "../__pageComponents/HomepageReddit";

export default () => {
    return (
        <HomepageProvider>
            <HomepageReddit />
        </HomepageProvider>
    );
};
