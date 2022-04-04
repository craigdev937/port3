import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = (): JSX.Element => (
    <nav className="navbar">
        <Link className="navbar__logo" to="/"><h3>LOGO</h3></Link>
        <ul className="navbar__ul">
            <Link className="navbar__link" to="/">Home</Link>
            <Link className="navbar__link" to="/about">About</Link>
            <Link className="navbar__link" to="/portfolio">Portfolio</Link>
        </ul>
    </nav>
);



