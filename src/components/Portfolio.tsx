import React from "react";
import "./Portfolio.css";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <main className="container">
                <aside className="box-1">One</aside>
                <aside className="box-2">Two</aside>
                <aside className="box-3">Three</aside>
            </main>
        </React.Fragment>
    );
};


