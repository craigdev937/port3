import React from "react";
import { useParams } from "react-router-dom";
import { PortData } from "./PortData";

type Params = {
    id: string
};

export const Details = (): JSX.Element => {
    const { id } = useParams<Params>();
    const numId = id !== undefined ? parseInt(id) : 0;

    return (
        <React.Fragment>
            <h2>{PortData[numId].name}</h2>
            <main className="projectDetailContainer">
                <section className="projectDetailCard">
                    {numId === 6 ? 
                        <aside 
                            className={`projectPicture 
                                ${PortData[numId].class}`}>
                        </aside>
                        : 
                        <a href={PortData[numId].deployed}>
                            <div 
                                className={`projectPicture 
                                ${PortData[numId].class}`}>
                            </div>
                        </a>
                    }
                    <aside className="projectBtnContainer">
                        {PortData[numId].deployed === "#/Project/7" ?
                        <></>
                        :
                        <div>
                            <button 
                                className="projectBtn"
                                onClick={() => window.open(PortData[numId].deployed)}
                                >Demo
                            </button>
                        </div>
                        }
                        <div>
                            <button 
                                className="projectBtn"
                                onClick={() => window.open(PortData[numId].github)}
                                >Code
                            </button>
                        </div>
                    </aside>
                    <aside className="projectInfo">
                        <div className="projectSummary">
                            <p>{PortData[numId].info}</p>
                        </div>
                        <div className="projectTech">
                            <h3>Technology Used:</h3>
                            <section className="techlist">
                                <p>{PortData[numId].technology}</p>
                            </section>
                        </div>
                    </aside>
                </section>
            </main>
        </React.Fragment>
    );
};


