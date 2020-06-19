import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { GlobalContext } from "../../context/GlobalState";

//API

//COMPONENTS

//Material-UI Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";

//STYLES
const useStyles = makeStyles((theme) => ({
    root: {
        display: "grid",
        margin: "1rem 0 1rem 0",
        gridTemplateColumns: "2fr 4fr",
    },
    details: {
        display: "flex",
        flexDirection: "column",
        flex: "auto",
        alignItems: "center",
    },
    content: {
        flex: "1 1",
        width: "100%",
    },
    cover: {
        width: "100%",
    },
    controls: {
        display: "flex",
        alignItems: "center",
        paddingLeft: theme.spacing(1),
        paddingBottom: theme.spacing(1),
    },
    playIcon: {
        height: 38,
        width: 38,
    },
    searchRoot: {
        padding: "2px 4px",
        display: "flex",
        alignItems: "center",
        width: "100%",
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export const Login = (props) => {
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
