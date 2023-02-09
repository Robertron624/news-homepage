import logo from "../../assets/logo.svg";
import { Link } from "react-router-dom";
import "./index.scss";
import mobileHamburger from "../../assets/icon-menu.svg";
import closeIcon from "../../assets/icon-menu-close.svg";
import { useState } from "react";

const links = [
    {
        href: "/",
        text: "Home",
    },
    {
        href: "/new",
        text: "New",
    },
    {
        href: "/popular",
        text: "Popular",
    },
    {
        href: "/trending",
        text: "Trending",
    },
    {
        href: "/categories",
        text: "Categories",
    },
];

function Navbar() {
    const [menuClass, setMenuClass] = useState("menu hidden");
    const [isMenuClicked, setIsMenuClicked] = useState(false);

    function updateMenu() {
        if (!isMenuClicked) {
            setMenuClass("menu visible");
            document
                .querySelector(".overlay")
                .classList.remove("overlay-hidden");
        } else {
            setMenuClass("menu hidden");
            document.querySelector(".overlay").classList.add("overlay-hidden");
        }
        setIsMenuClicked(!isMenuClicked);
    }

    return (
        <header>
            <nav className="navbar">
                <a href="/" className="logo__container">
                    <img src={logo} alt="logo" />
                </a>
                <div className="burger-menu" onClick={updateMenu}>
                    <img
                        className="mobile__menu"
                        src={mobileHamburger}
                        alt="mobile menu"
                    />
                </div>
                <ul className="nav__links">
                    {links.map((link, index) => (
                        <li key={index} className="nav__link">
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <div className={menuClass}>
                <div onClick={updateMenu} className="close__container">
                    <img src={closeIcon} alt="close menu icon" />
                </div>
                <ul className="nav__links">
                    {links.map((link, i) => (
                        <li key={i} onClick={updateMenu} className="nav__link">
                            <Link to={link.href}>{link.text}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </header>
    );
}

export default Navbar;
