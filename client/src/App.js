import React from "react";
import { Header } from "./components/layout/Header";
import { Body } from "./components/layout/Body";
import { Footer } from "./components/layout/Footer";

import { GlobalProvider } from "./context/GlobalState";

import "./App.css";

//Bring in React Router
import { BrowserRouter as Router } from "react-router-dom";

function App() {
    return (
        <GlobalProvider>
            <Router>
                <Header />
                <Body />
                <Footer />
            </Router>
        </GlobalProvider>
    );
}

export default App;
