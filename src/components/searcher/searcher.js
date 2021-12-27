import React from "react";

import searchIcon from "../../assets/svg/search-icon.svg"
import "./searcher.css"

const Searcher = ({setSearch}) => {
    return (
        <div className="search-form">
            <input
            className = "form-control search-input"
            type = "search"
            placeholder = "Search..."
            onChange={(e) => setSearch(e.target.value)}/>
            <img src = {searchIcon}/> 
        </div>

    );
};

export default Searcher;