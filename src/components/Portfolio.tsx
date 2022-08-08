import React from "react";
import "./Portfolio.css";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Portfolio</h1>
            <main className="grid-container">
                <section className="box box__color1">
                    <a href="https://www.google.com" target="_blank">
                        <aside className="box__header">Google</aside>
                    </a>
                    <a href="#">
                        <aside className="box__body">Project 1</aside>
                    </a>
                </section>
                <section className="box box__color2">
                    <a href="https://www.twitter.com" target="_blank">
                        <aside className="box__header">Twitter</aside>
                    </a>
                    <aside className="box__body">Project 2</aside>
                </section>
                <section className="box box__color3">
                    <a href="https://www.facebook.com" target="_blank">
                        <aside className="box__header">Facebook</aside>
                    </a>
                    <aside className="box__body">Project 3</aside>
                </section>
                <section className="box box__color1">
                    <a href="https://www.youtube.com" target="_blank">
                        <aside className="box__header">You Tube</aside>
                    </a>
                        <aside className="box__body">Project 4</aside>
                </section>
                <section className="box box__color2">
                    <a href="https://www.github.com" target="_blank">
                        <aside className="box__header">Github</aside>
                    </a>
                    <aside className="box__body">Project 5</aside>
                </section>
                <section className="box box__color3">
                    <a href="https://www.usatoday.com" target="_blank">
                        <aside className="box__header">USA Today</aside>
                    </a>
                    <aside className="box__body">Project 6</aside>
                </section>
            </main>
        </React.Fragment>
    );
};


