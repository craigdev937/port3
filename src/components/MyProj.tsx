import React from "react";
import { Link } from "react-router-dom";
import { IData } from "../types/Interfaces";

type Props = {
    projectInfo: IData,
    id: number
};

export const MyProj = 
({ projectInfo, id }: Props): JSX.Element => {
    return (
        <React.Fragment>
            <Link to={`/project/${id}`}>
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



