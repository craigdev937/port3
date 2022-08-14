import React from "react";
import "./MyProj.css";
import { Link } from "react-router-dom";
import { IData } from "../types/Interfaces";

type Props = {
    projectInfo: IData
};

export const MyProj = 
({ projectInfo }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <Link to={`/project/${projectInfo.id}`}>
                <section className={`projectCard 
                            ${projectInfo.class}`}>
                    <aside className="projectCardInfo">
                        <h2 className="projectName"
                            >{projectInfo.name}
                        </h2>
                    </aside>
                </section>
            </Link>
        </React.Fragment>
    );
};



