import React from "react";
import CardNews from "../components/Homepage/CardNews/CardNews";

const Homepage = () => {
    return (
        <div className="container">
            <div className="top__page">
                <img src="" alt="" />
                <h1>The Bright Future of Web 3.0</h1>
                <p>
                    {" "}
                    We dive into the next evolution of the web that claims to
                    put the power of the platforms back into the hands of the
                    people. But is it really fulfilling its promise?
                </p>
                <button>Read more</button>
                <CardNews />
            </div>
            <div className="bottom__page"></div>
        </div>
    );
};

export default Homepage;
