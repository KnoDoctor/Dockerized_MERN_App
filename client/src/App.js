import React from "react";

//Import Layout Components
import Header from "./components/__layout/Header";
import PageSwitch from "./components/__layout/PageSwitch";
import Footer from "./components/__layout/Footer";

//Import Global Provider
import { GlobalProvider } from "./context/GlobalContext";

//Import Applicaton Styles
import "./App.css";
import CssBaseline from "@material-ui/core/CssBaseline";

//Import React BrowserRouter as Router
import { BrowserRouter as Router } from "react-router-dom";

//Import Application Routes
import appRoutesArray from "./routes/appRoutesArray";

//Define App Component
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

//Export Application
export default App;
