import React from "react";
import "./Portfolio.css";
import { PortData } from "./PortData";
import { IData } from "../types/Interfaces";
import { MyProj } from "./MyProj";

export const Portfolio = (): JSX.Element => {
    return (
        <React.Fragment>
            {PortData.map((projectInfo: IData, index: number) => (
                <main key={index}>
                    <MyProj projectInfo={projectInfo} id={index} />
                </main>
            ))}
        </React.Fragment>
    );
};


