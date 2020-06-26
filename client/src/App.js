import React from "react";

import Header from "./components/layout/Header";

import PageSwitch from "./components/layout/PageSwitch";
import { Footer } from "./components/layout/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";
//Bring in React Router
import { BrowserRouter as Router } from "react-router-dom";

//Import Routes
import appRoutesArray from "./routes/appRoutesArray";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <CssBaseline />
                <Header appRoutesArray={appRoutesArray} />
                <PageSwitch appRoutesArray={appRoutesArray} />
                <Footer />
            </Router>
        </GlobalProvider>
    );
}

export default App;
