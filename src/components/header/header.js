import React from "react";

import "./header.css";
import covidSymbol from "../../assets/covid-symbol.png";

const Header = () => (   
    <div className="header">
        <img 
            src = {covidSymbol}
            alt = "COVID-19 symbol" />
        <h1>STATISTIC</h1>
    </div>
);

export default Header;