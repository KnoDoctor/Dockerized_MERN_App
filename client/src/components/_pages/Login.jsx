//REACT
import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { GlobalContext } from "../../context/GlobalState";

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
    const { route, routerParams, loginState } = props;

    //Styles
    const classes = useStyles();

    return (
        <div class={classes.containerClass}>
            <h1>{route.pageName}</h1>
            <h4>{route._uid}</h4>
            <div></div>
        </div>
    );
};
