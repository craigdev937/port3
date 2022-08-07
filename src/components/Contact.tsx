import React from "react";

export const Contact = (): JSX.Element => {
    return (
        <React.Fragment>
            <h1>Contact</h1>
            <form action="">
                <aside>
                    <label htmlFor="name">Name</label>
                    <input type="text" />
                </aside>
                <aside>
                    <label htmlFor="name">Email</label>
                    <input type="email" />
                </aside>
                <aside>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" />
                </aside>
            </form>
            
        </React.Fragment>
    );
};


