import React, { createContext, useReducer } from "react";
import GlobalReducer from "./GlobalReducer";
import axios from "axios";

//Initial State
const initialState = {
    transactions: [],
    redditData: [],
    error: null,
    isLoading: true,
    loginStatus: "false",
};

// Create Context
export const GlobalContext = createContext(initialState);

// Create Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(GlobalReducer, initialState);

    // Actions
    ////Login Actions
    async function getLoginStatus() {
        const loginStatus = localStorage.getItem("loginStatus");
        console.log(loginStatus);
        dispatch({
            type: "GET_LOGIN_STATUS",
            payload: loginStatus,
        });
    }

    async function setLoginStatus(loginStatus) {
        localStorage.setItem("loginStatus", loginStatus);
        console.log(loginStatus);
        dispatch({
            type: "SET_LOGIN_STATUS",
            payload: loginStatus,
        });
    }

    ////Transaction Actions
    async function getTransactions() {
        try {
            const res = await axios.get("/api/v1/transactions");

            dispatch({
                type: "GET_TRANSACTIONS",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    async function deleteTransaction(id) {
        try {
            await axios.delete(`/api/v1/transactions/${id}`);

            dispatch({
                type: "DELETE_TRANSACTION",
                payload: id,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    async function addTransaction(transaction) {
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };
        try {
            const res = await axios.post(
                "/api/v1/transactions/",
                transaction,
                config
            );

            dispatch({
                type: "ADD_TRANSACTION",
                payload: res.data.data,
            });
        } catch (err) {
            dispatch({
                type: "TRANSACTION_ERROR",
                payload: err.response.data.error,
            });
        }
    }

    ////Get Reddit Data
    async function getRedditData(subreddit) {
        try {
            const res = await axios.get(`/api/v1/reddit/${subreddit}`);

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
        <GlobalContext.Provider
            value={{
                transactions: state.transactions,
                redditData: state.redditData,
                error: state.error,
                isLoading: state.isLoading,
                loginStatus: state.loginStatus,
                getTransactions,
                deleteTransaction,
                addTransaction,
                getRedditData,
                getLoginStatus,
                setLoginStatus,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
