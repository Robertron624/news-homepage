import logo from "../../assets/logo.svg"
import { Link } from "react-router-dom";
import "./index.scss"


function Navbar() {

    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo__container">
                    <img src={logo} alt="logo" />
                </a>
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
