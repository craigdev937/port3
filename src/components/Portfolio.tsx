import React from "react";
import "./Portfolio.css";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <h3>Cards with links</h3>
            <main className="container">
                <section className="box-1">
                    <aside className="section-header">One</aside>
                    <aside className="section-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur modi earum quod quisquam error odio dignissimos, ipsum ad.</aside>
                    <aside className="section-footer">one</aside>
                </section>
                <section className="box-2">
                    <aside className="section-header">Two</aside>
                    <aside className="section-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur modi earum quod quisquam error odio dignissimos, ipsum ad.</aside>
                    <aside className="section-footer">two</aside>
                </section>
                <section className="box-3">
                    <aside className="section-header">Three</aside>
                    <aside className="section-body">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit consequatur modi earum quod quisquam error odio dignissimos, ipsum ad.</aside>
                    <aside className="section-footer">three</aside>
                </section>
            </main>
        </React.Fragment>
    );
};


