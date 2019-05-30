import React from "react";
import instaLogo from "./img/instaLogo.png"
import instaWord from "./img/instaWord.png"
import instaCompass from "./img/instaCompass.png"
import instaHeart from "./img/instaHeart.png"
import instaPerson from "./img/instaPerson.png"
import './SearchBar.css';

// used https://dev.to/sage911/how-to-write-a-search-component-with-suggestions-in-react-d20 for search bar

function SearchBar() {
    return (
        <div className="SearchBar">
            <div className="logos">
                <img src={instaLogo} alt="instaLogo" className="instaLogo"/>
                <img src={instaWord} alt="instaWord" className="instaWord"/>
            </div>

            <form>
                <input placeholder="Search" className="search"/>
            </form>

            <div className="icons">
                <img src={instaCompass} alt="instaCompass" className="instaCompass"/>
                <img src={instaHeart} alt="instaHeart" className="instaHeart"/>
                <img src={instaPerson} alt="instaPerson" className="instaPerson"/>
            </div>
        </div>
    );
}

export default SearchBar;