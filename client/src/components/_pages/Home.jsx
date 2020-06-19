import React, { useContext, useEffect, useState } from "react";

//REACT PLAYER
import ReactPlayer from "react-player";

//CONTEXT
import { GlobalContext } from "../../context/GlobalState";

//API

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
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import SkipNextIcon from "@material-ui/icons/SkipNext";

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

export const Home = (props) => {
    const { pageName, message, containerClass } = props;

    //Set Component Initial State
    const [subReddit, setSubReddit] = useState("");

    //Styles
    const classes = useStyles();
    const theme = useTheme();

    //Use Context
    const { redditData, getRedditData, getTransactions } = useContext(
        GlobalContext
    );

    //Fetch Data Load
    useEffect(() => {
        getTransactions();
        getRedditData("videos");
        //eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    //Handle Search Box Submit
    const onSubmit = (e) => {
        e.preventDefault();
        getRedditData(subReddit);
        setSubReddit("");
    };

    return (
        <>
            <div>
                <h3>Enter a Subreddit</h3>
                <Paper
                    component="form"
                    onSubmit={onSubmit}
                    className={classes.searchRoot}
                >
                    <InputBase
                        className={classes.input}
                        value={subReddit}
                        onChange={(e) => setSubReddit(e.target.value)}
                        placeholder="Search for a Subreddit"
                        inputProps={{ "aria-label": "search for a subreddit" }}
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
                {redditData.map((post) => (
                    <a href={post.data.url}>
                        <Card className={classes.root}>
                            <ReactPlayer url={post.data.url} />
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
                                <div className={classes.controls}>
                                    <IconButton aria-label="previous">
                                        {theme.direction === "rtl" ? (
                                            <SkipNextIcon />
                                        ) : (
                                            <SkipPreviousIcon />
                                        )}
                                    </IconButton>
                                    <IconButton aria-label="play/pause">
                                        <PlayArrowIcon
                                            className={classes.playIcon}
                                        />
                                    </IconButton>
                                    <IconButton aria-label="next">
                                        {theme.direction === "rtl" ? (
                                            <SkipPreviousIcon />
                                        ) : (
                                            <SkipNextIcon />
                                        )}
                                    </IconButton>
                                </div>
                            </div>
                        </Card>
                    </a>
                ))}
            </div>
        </>
    );
};
