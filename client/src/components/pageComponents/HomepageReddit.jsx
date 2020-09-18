import React, { useContext, useEffect, useState } from "react";

//REACT PLAYER
import ReactPlayer from "react-player";

//CONTEXT
import { GlobalContext } from "../../context/GlobalContext";

//COMPONENTS

//Material-UI Stuff
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import SearchIcon from "@material-ui/icons/Search";
import DirectionsIcon from "@material-ui/icons/Directions";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";

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

export default () => {
    //Styles
    const classes = useStyles();

    //Use Context
    const { transactions, getTransactions, redditData, isLoading } = useContext(
        GlobalContext
    );

    //Fetch Data Load
    useEffect(() => {
        getTransactions();
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <>
            {isLoading ? (
                "Loading"
            ) : (
                <div>
                    <h2>
                        Current Subreddit222:
                        {redditData[0] == undefined
                            ? ""
                            : redditData[0].data.subreddit}
                    </h2>
                    {redditData.map((post) => (
                        <a href={post.data.url}>
                            <Card className={classes.root}>
                                <CardMedia
                                    className={classes.cover}
                                    image={post.data.thumbnail}
                                    title="Live from space album cover"
                                />
                                <div className={classes.details}>
                                    <CardContent className={classes.content}>
                                        <Typography component="h5" variant="h5">
                                            {post.data.title}
                                        </Typography>
                                        <Typography
                                            variant="subtitle1"
                                            color="textSecondary"
                                        >
                                            Submitted by: {post.data.author}
                                        </Typography>
                                    </CardContent>
                                </div>
                            </Card>
                        </a>
                    ))}
                </div>
            )}
        </>
    );
};
