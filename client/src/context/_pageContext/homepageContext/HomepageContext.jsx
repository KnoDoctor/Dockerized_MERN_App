import React, { createContext, useReducer } from "react";
import HomepageReducer from "./HomepageReducer";
import axios from "axios";
import { API_URL } from "../../../config/ApiConfig";

//Initial State
const initialState = {
    redditData: [],
    error: null,
    isLoading: true,
};

// Create Context
export const HomepageContext = createContext(initialState);

// Create Provider Component
export const HomepageProvider = ({ children }) => {
    const [state, dispatch] = useReducer(HomepageReducer, initialState);

    // Actions
    async function getRedditData(subreddit) {
        try {
            const res = await axios.get(
                API_URL + `/api/v1/reddit/${subreddit}`
            );

            dispatch({
                type: "GET_REDDIT_DATA",
                payload: res.data.posts,
            });
        } catch (err) {
            dispatch({
                type: "REDDIT_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    return (
        <HomepageContext.Provider
            value={{
                redditData: state.redditData,
                error: state.error,
                isLoading: state.loading,
                getRedditData,
            }}
        >
            {children}
        </HomepageContext.Provider>
    );
};
