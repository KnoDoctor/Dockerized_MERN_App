import React, { createContext, useReducer } from "react";
import AboutUsReducer from "./AboutUsReducer";
import axios from "axios";
import { API_URL } from "../../../config/ApiConfig";

//Initial State
const initialState = {
    transaction: [],
    error: null,
    isLoading: true,
};

// Create Context
export const AboutUsContext = createContext(initialState);

// Create Provider Component
export const AboutUsProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AboutUsReducer, initialState);

    // Actions
    async function getTransactions() {
        try {
            const res = await axios.get(API_URL + "/api/v1/transactions");

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
            await axios.delete(API_URL + `/api/v1/transactions/${id}`);

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
                API_URL + "/api/v1/transactions/",
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

    return (
        <AboutUsContext.Provider
            value={{
                transactions: state.transactions,
                error: state.error,
                isLoading: state.isLoading,
                getTransactions,
                deleteTransaction,
                addTransaction,
            }}
        >
            {children}
        </AboutUsContext.Provider>
    );
};
