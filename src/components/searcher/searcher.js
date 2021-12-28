import React from "react";

import "./searcher.css"

const Searcher = ({setSearch}) => {
    return (
        <div className="search-form">
            <input
                className = "search-input"
                type = "text"
                placeholder = "Search..."
                onChange={(e) => setSearch(e.target.value)}/>
        </div>
    );
};

export default Searcher;