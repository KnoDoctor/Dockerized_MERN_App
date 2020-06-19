import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { GlobalContext } from "../../context/GlobalState";

//API

//COMPONENTS

//Material-UI Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";

//STYLES
const useStyles = makeStyles((theme) => ({}));

export const AboutUs = (props) => {
    const { pageName, message, containerClass } = props;

    //Set Component Initial State

    //Styles

    //Use Context
    const { getTransactions } = useContext(GlobalContext);

    //Fetch Data Load
    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div class={containerClass}>
            <h1>{pageName}</h1>
            <h4>{message}</h4>
        </div>
    );
};
