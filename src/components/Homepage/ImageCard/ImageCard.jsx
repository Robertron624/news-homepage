import React from "react";
import "./index.scss";

const cardImages = [
    {
        imgSrc: "/image-retro-pcs.jpg",
        imageTitle: "Reviving Retro PCs",
        imageText: "What happens when old PCs are given modern upgrades?",
    },
    {
        imgSrc: "/image-top-laptops.jpg",
        imageTitle: "Top 10 Laptops of 2022",
        imageText: "Our best picks for various needs and budgets.",
    },
    {
        imgSrc: "/image-gaming-growth.jpg",
        imageTitle: "The Growth of Gaming",
        imageText: "How the pandemic has sparked fresh opportunities.",
    },
];

const ImageCards = () => {
    return (
        <div className="image__card--container">
            {cardImages.map(({imgSrc, imageText, imageTitle}, index) => (
                <div key={`${index}-${imageTitle}`} className="image__card">
                    <img src={imgSrc} alt="card image" />
                    <div className="image__card--content">
                        <span className="image__card--index">{`0${index+1}`}</span>
                        <a href="#" className="image__card--title">{imageTitle}</a>
                        <p className="image__card--text">{imageText}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageCards;
