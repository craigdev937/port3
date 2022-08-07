import React from "react";
import me from "../img/me.jpg";
import "./Home.css";

export const Home = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Hi! I'm Craig</h1>
            <p>I'm a self-taught web developer in Newark, NJ.  My passions are computer technology and connecting with people.  I'm always learning new things.</p>

            <img className="profile__pic" src={me} alt="Me" />

            <p>Growing up I was inspired by heros.  People who were empathetic and selflessness.  Qualities that I strive for because connecting with others leads to success and happiness.</p>
            
            <p>My skills include: HTML, CSS, Javascript, TypeScript, React, and Express.</p>
            <p>Besides my passion for coding, my interests are traveling, fitness, and writing science fiction and fantasy.</p>
            <button className="profile__btn">
                <a href="mailto:indigomx9@gmail.com">Contact</a>
            </button>
        </React.Fragment>
    );
};


