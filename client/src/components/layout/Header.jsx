import React from "react";

//Material-UI Stuff
import { makeStyles } from "@material-ui/core/styles";

//COMPONENTS

//API

//Router
import { Link } from "react-router-dom";

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
}));

export default function Header(props) {
    const loginState = false;
    const classes = useStyles();

    const { appRoutesArray } = props;

    console.log(appRoutesArray);

    return (
        <div className={classes.root}>
            <header className="site-header" id="masthead">
                <div className="site-branding">
                    <Link to="/">
                        <img
                            src="http://wwwrebuild.butterfield.com/wp-content/uploads/B&R%20Logo%20-%20White.png"
                            alt="logo"
                        />
                    </Link>
                </div>
                <nav id="site-navigation" className="main-navigation">
                    <div className="menu-main-menu-container">
                        <ul
                            id="primary-menu"
                            className="menu nav-menu"
                            aria-expanded="false"
                        >
                            <>
                                {appRoutesArray.map((route) => {
                                    if (route.topNav) {
                                        return (
                                            <li
                                                id="menu-item-49"
                                                className="menu-item menu-item-type-post_type menu-item-object-page menu-item-49"
                                            >
                                                <Link to={route.slugPattern}>
                                                    {route.pageName}
                                                </Link>
                                            </li>
                                        );
                                    }
                                })}
                            </>
                        </ul>
                    </div>
                </nav>
                <>
                    {loginState === false || loginState === null ? (
                        <div
                            className="login-navigation"
                            style={{
                                position: "absolute",
                                right: "64px",
                                top: "24px",
                            }}
                        >
                            <Link to="/login">Login</Link>
                        </div>
                    ) : (
                        <div
                            className="login-navigation"
                            style={{
                                position: "absolute",
                                right: "64px",
                                top: "24px",
                            }}
                        >
                            <a href="https://my2.butterfield.com/">My B&R</a>
                            <span style={{ color: "white" }}> | </span>
                            <a href="#logout">Logout</a>
                        </div>
                    )}
                </>
            </header>
        </div>
    );
}
