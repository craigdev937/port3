import React from "react";
import me from "../img/me.jpg";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Hi! I'm Craig</h1>
            <p>My passions are computer technology and connecting with people.</p>

            <img src={me} alt="Me" />

            <p>Growing up I was inspired by heros.  People who were empathetic and selfless.  Qualities that I strive for because connecting with others leads to success and happiness.</p>
            
            <p>I'm a self-taught web developer in Newark, NJ'.  My skills include: HTML, CSS, Javascript, TypeScript, React, and Express.</p>
            <p>Besides my passion for coding, my interests are traveling, fitness, and writing science fiction and fantasy.</p>

            <h1>Contact</h1>
            <button>
                <a href="mailto:indigomx9@gmail.com">Contact</a>
            </button>
        </React.Fragment>
    );
};


