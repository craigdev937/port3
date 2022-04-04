import React from "react";
import "./App.css";
import { Page } from "../routes/Page";
import { Footer } from "../components/Footer";

export const App = (): JSX.Element => {
    return (
        <React.Fragment>
            <Page />
            <Footer />
        </React.Fragment>
    );
};




