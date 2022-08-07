import React from "react";
import "./Portfolio.css";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <h3>Cards with links</h3>
            <main className="grid-container">
                <section className="box-1">
                    <a href="https://www.google.com" target="_blank">
                        <aside className="section-header">Google</aside>
                    </a>
                        <aside className="section-body">Front-end Project 1</aside>
                        <aside className="section-footer">Project 1 - CODE</aside>
                </section>
                <section className="box-2">
                    <a href="https://www.twitter.com" target="_blank">
                        <aside className="section-header">Twitter</aside>
                    </a>
                    <aside className="section-body">Front-end Project 2</aside>
                    <aside className="section-footer">Project 2 - CODE</aside>
                </section>
                <section className="box-3">
                    <a href="https://www.facebook.com" target="_blank">
                        <aside className="section-header">Facebook</aside>
                    </a>
                    <aside className="section-body">Front-end Project 3</aside>
                    <aside className="section-footer">Project 3 - CODE</aside>
                </section>
            </main>
        </React.Fragment>
    );
};


