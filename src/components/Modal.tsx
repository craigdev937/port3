import React from "react";
import ReactDOM from "react-dom";
import "./Modal.css";

type Props = {
    show: boolean,
    closeModal: () => void
};

export const Modal = 
({ show, closeModal }: Props): React.ReactPortal | null => {
    if (!show) return null;

    return ReactDOM.createPortal(
        <main className="modal">
            <section className="overlay" onClick={closeModal}></section>
            <section className="content">
                <h2>Simple Modal</h2>
                <button onClick={closeModal}>Close</button>
            </section>
        </main>,
        document.getElementById("portal") as HTMLDivElement
    );
};


