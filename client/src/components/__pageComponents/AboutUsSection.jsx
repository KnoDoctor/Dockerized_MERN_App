import React, { useContext, useEffect, useState } from "react";

//CONTEXT
import { AboutUsContext } from "../../context/_pageContext/aboutUsContext/AboutUsContext";

//Material-UI Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

//STYLES
const useStyles = makeStyles((theme) => ({
    containerClass: {
        marginTop: 100,
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

export default (props) => {
    const { route } = props;

    //Set Component Initial State
    const [text, setText] = useState("");
    const [amount, setAmount] = useState("");

    //Styles
    const classes = useStyles();

    //Use Context
    const {
        transactions,
        getTransactions,
        addTransaction,
        isLoading,
    } = useContext(AboutUsContext);

    //Fetch Data Load
    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Handle Search Box Submit
    const onSubmit = (e) => {
        e.preventDefault();
        addTransaction({
            text: text,
            amount: amount,
        });
        setText("");
        setAmount("");
    };

    return (
        <>
            {isLoading ? (
                "Loading"
            ) : (
                <div class={classes.containerClass}>
                    <h1>{route.pageName}</h1>
                    <h4>{route._uid}</h4>
                    <div>
                        <ul>
                            {transactions.map((transaction) => (
                                <li>
                                    {transaction.text} - {transaction.amount}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <h3>Enter a Transaction</h3>
                    <Paper
                        component="form"
                        onSubmit={onSubmit}
                        className={classes.searchRoot}
                    >
                        <InputBase
                            className={classes.input}
                            value={text}
                            onChange={(e) => setText(e.target.value)}
                            placeholder="Enter text"
                            inputProps={{
                                "aria-label": "search for a transaction",
                            }}
                        />
                        <InputBase
                            className={classes.input}
                            value={amount}
                            onChange={(e) => setAmount(e.target.value)}
                            placeholder="Enter amount"
                            inputProps={{
                                "aria-label": "search for a transaction",
                            }}
                        />
                        <IconButton
                            type="submit"
                            className={classes.iconButton}
                            aria-label="search"
                        >
                            <SearchIcon />
                        </IconButton>
                        <Divider
                            className={classes.divider}
                            orientation="vertical"
                        />
                        <IconButton
                            color="primary"
                            className={classes.iconButton}
                            aria-label="directions"
                        >
                            <DirectionsIcon />
                        </IconButton>
                    </Paper>
                </div>
            )}
        </>
    );
};
