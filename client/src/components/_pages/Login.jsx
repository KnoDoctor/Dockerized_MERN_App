//REACT
import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { GlobalContext } from "../../context/GlobalContext";

//API

//COMPONENTS

//Material-UI Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";

//STYLES
const useStyles = makeStyles((theme) => ({
    containerClass: {
        marginTop: 100,
    },
}));

export default (props) => {
    const { route, routerParams } = props;
    console.log(routerParams);

    const { loginStatus, getLoginStatus, setLoginStatus } = useContext(
        GlobalContext
    );

    const updateLoginStatus = (loginStatus) => {
        setLoginStatus(loginStatus);
        getLoginStatus();
    };

    //Styles
    const classes = useStyles();

    return (
        <div class={classes.containerClass}>
            <h1>{route.pageName}</h1>
            <h4>{route._uid}</h4>
            <button
                onClick={function () {
                    updateLoginStatus("true");
                    routerParams.history.goBack();
                }}
            >
                Login
            </button>
            <div></div>
        </div>
    );
};
