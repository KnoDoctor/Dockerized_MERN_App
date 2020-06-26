import React, { useContext, useEffect, useState } from "react";

//REACT PLAYER
import ReactPlayer from "react-player";

//CONTEXT
import { GlobalContext } from "../../context/GlobalContext";
import { HomepageContext } from "../../context/_pageContext/homepageContext/HomepageContext";

//COMPONENTS

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
    root: {
        width: "100%",
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

    //Set Component Initial State
    const [subReddit, setSubReddit] = useState("");

    //Use Context
    const { redditData, getRedditData, isLoading } = useContext(
        HomepageContext
    );
    const { transactions, getTransactions } = useContext(GlobalContext);

    //Fetch Data Load
    useEffect(() => {
        getRedditData("youtubehaiku");
        getTransactions();
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
            {isLoading ? (
                "Loading"
            ) : (
                <div>
                    <h3>Enter a Subreddit</h3>
                    <br></br>
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
                            inputProps={{
                                "aria-label": "search for a subreddit",
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
                    {redditData.map((post) => (
                        <Card className={classes.root}>
                            <ReactPlayer light={true} url={post.data.url} />
                        </Card>
                    ))}
                </div>
            )}
        </>
    );
};
