import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";
import axios from "axios";

//Initial State
const initialState = {
    transactions: [],
    redditData: [],
    error: null,
    loading: true,
};

// Create Context
export const GlobalContext = createContext(initialState);

// Create Provider Component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions
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
                loading: state.loading,
                getTransactions,
                deleteTransaction,
                addTransaction,
                getRedditData,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};
