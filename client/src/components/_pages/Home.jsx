import React from "react";

//CONTEXT
import { HomepageProvider } from "../../context/_pageContext/homepageContext/HomepageContext";

//Material UI Stuff
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

//COMPONENTS
import HomepageReddit from "../pageComponents/HomepageReddit";

export default () => {
    return (
        <HomepageProvider>
            <CssBaseline />
            <Container maxWidth="lg">
                <HomepageReddit />
            </Container>
        </HomepageProvider>
    );
};
