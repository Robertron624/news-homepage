import React from "react";
import CardNews from "../components/Homepage/CardNews/CardNews";
import Hero from "../assets/image-web-3-desktop.jpg";
import HeroMobile from "../assets/image-web-3-mobile.jpg";
import ImageCards from "../components/Homepage/ImageCard/ImageCard";
import "./homepage.scss";

const Homepage = () => {
    return (
        <div className="container">
            <div className="top__page">
                <div className="top__page--left">
                    <div className="hero__container">
                        <img className="desktop__hero" src={Hero} alt="Hero image" />
                        <img className="mobile__hero" src={HeroMobile} alt="Hero image"/>
                    </div>
                    <div className="main__new">
                        <h1 className="main__new--title">
                            The Bright Future of Web 3.0
                        </h1>
                        <div className="main__new--body">
                            <p>
                                {" "}
                                We dive into the next evolution of the web that
                                claims to put the power of the platforms back
                                into the hands of the people. But is it really
                                fulfilling its promise?
                            </p>
                            <button>Read more</button>
                        </div>
                    </div>
                </div>
                <CardNews />
            </div>
            <div className="bottom__page">
                    <ImageCards />
            </div>
        </div>
    );
};

export default Homepage;
