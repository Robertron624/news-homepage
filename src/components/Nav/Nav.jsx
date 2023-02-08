import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import "./index.scss"
import mobileHamburger from "../../assets/icon-menu.svg"


function Navbar() {

    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo__container">
                    <img src={logo} alt="logo" />
                </a>
                <img className="mobile__menu" src={mobileHamburger} alt="mobile menu" />
                <ul className="nav__links">
                    <li className="nav__link"><Link to="/">Home</Link></li>
                    <li className="nav__link"><Link to="/new">New</Link></li>
                    <li className="nav__link"><Link to="/popular">Popular</Link></li>
                    <li className="nav__link"><Link to="/trending">Trending</Link></li>
                    <li className="nav__link"><Link to="/categories">Categories</Link></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
