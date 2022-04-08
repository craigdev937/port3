import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

export const Navbar = (): JSX.Element => {
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    const closeMenu = () => {
        setOpen(false);
    };

    return (
        <nav className="navbar">
            <Link className="nav-logo" to="/"><h3>IndigoMX9</h3></Link>
            <aside className="nav-icon" onClick={handleClick}>
                {open ? <FiX /> : <FiMenu />}
            </aside>
            <ul className={open ? "nav-links active" : "nav-links"}>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/" 
                        onClick={closeMenu}
                        >Home
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/about" 
                        onClick={closeMenu}
                        >About
                    </Link>
                </li>
                <li className="nav-item">
                    <Link 
                        className="nav-link" 
                        to="/portfolio" 
                        onClick={closeMenu}
                        >Portfolio
                    </Link>
                </li>
            </ul>
        </nav>
    );
};



