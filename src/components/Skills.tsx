import React from "react";
import { Modal } from "./Modal";

export const Skills = (): JSX.Element => {
    const [show, setShow] = React.useState(false);

    const handleShow = () => {
        setShow((state) => !state);
    };
    
    const handleModal = () => {
        setShow(false);
    };

    return (
        <React.Fragment>
            <main>
            <h1>Skills</h1>
                <h3>HTML, CSS, JavaScript, TypeScript, React, Redux-Toolkit, Express, Handlebars, MongoDB Atlas, and PostgreSQL</h3>
                <br />
                <br />
                <button onClick={handleShow}>Open Modal</button>
                <Modal show={show} closeModal={handleModal} />
            </main>
        </React.Fragment>
    );
};


