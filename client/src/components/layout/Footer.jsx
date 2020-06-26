import React from "react";

//Material-UI Stuff
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

//COMPONENTS

//LinkPI

//Router
// eslint-disable-next-line
import { BrowserRouter as Router, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7) + 1,
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9) + 1,
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-end",
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    },
    content: {
        flexGrow: 1,
        padding: 0,
        marginTop: 0,
    },
    siteFooter: {
        width: "100%",
        backgroundColor: "#000000",
    },
}));

export default function Footer(props) {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <footer id="colophon" className={classes.siteFooter}>
                <div className="footer-logo">
                    <div className="footer-logo-container">
                        <Link to="/">
                            <img
                                src="http://wwwrebuild.butterfield.com/wp-content/uploads/B&amp;R%20Logo%20-%20White.png"
                                alt="Logo-White"
                                className="header-logo"
                            ></img>
                        </Link>
                    </div>
                </div>
                <div className="footer-navigation">
                    <div className="footer-navigation-container">
                        <Grid container spacing={0} className={"footer-items"}>
                            <Grid
                                item
                                xs={3}
                                className={"footer-menu-item footer-about-us"}
                            >
                                <p>ABOUT US</p>
                                <ul>
                                    <li>
                                        <Link to="#">
                                            What Sets B&amp;R Apart
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our People</Link>
                                    </li>
                                    <li>
                                        <Link to="#">We Give Back</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our Equipment</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Activity Levels</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Support Levels</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Service Partners</Link>
                                    </li>
                                </ul>
                            </Grid>

                            <Grid
                                item
                                xs={3}
                                className={"footer-menu-item footer-regions"}
                            >
                                <p>REGIONS</p>
                                <ul>
                                    <li>
                                        <Link to="/destinations/north-america/">
                                            North America
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/south-america/">
                                            South America
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/europe/">
                                            Europe
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/Linksia/">
                                            Asia
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/Linkfrica">
                                            Africa
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/destinations/oceania/">
                                            Oceania
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                className={
                                    "footer-menu-item footer-experiences"
                                }
                            >
                                <p>EXPERIENCES</p>
                                <ul>
                                    <li>
                                        <Link to="#">Safari</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Wellness</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Aggressively Active</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Food + Wine</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Culture</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Luxury</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Unique</Link>
                                    </li>
                                </ul>
                            </Grid>
                            <Grid
                                item
                                xs={3}
                                className={"footer-menu-item footer-more-br"}
                            >
                                <p>MORE B&amp;R</p>
                                <ul>
                                    <li>
                                        <Link to="#">Blog</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Media</Link>
                                    </li>
                                    <li>
                                        <Link to="#">FAQs</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Request an Itinerary</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Our Brochure</Link>
                                    </li>
                                    <li>
                                        <Link to="#">
                                            Travel Protection &amp; Cancellation
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="#">Work For Us</Link>
                                    </li>
                                    <li>
                                        <Link to="#">Contact Us</Link>
                                    </li>
                                    <li>
                                        <Link to="/fetch-with-hooks">
                                            Component Builder
                                        </Link>
                                    </li>
                                </ul>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="contact-us">
                    <div className="contact-us-container">
                        <Link to="#">
                            <p>
                                <span>Contact Us:</span> 1-866-551-9090
                            </p>
                        </Link>
                    </div>
                </div>
            </footer>
        </div>
    );
}
