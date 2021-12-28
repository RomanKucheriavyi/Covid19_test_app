import React, {useState} from "react";

import "./countries-table.css";

const CountriesTable = ({filtered, setFiltered, openModal, setModalData}) => {

    const [order, setOrder] = useState("ascending");

    const sortColumn = (col) => {
        const orderMultiplier = order === "ascending" ? 1 : -1;
        const sorted = [...filtered].sort((a, b) =>
            (a[col] < b[col] ? 1 : -1) * orderMultiplier
        );
        setFiltered(sorted);
        setOrder(order === "ascending" ? "descending" : "ascending");
    };

    const CountriesList = filtered.map((countriesListItem, index) => {
        const { id, countryName, totalConfirmed, totalDeaths, totalRecovered} = countriesListItem;
        return (
            <tr key={id} onClick={() => setModalData({countryName, totalConfirmed, totalDeaths, totalRecovered}, openModal(true))}>
                <td>{index+1}</td>
                <td>{countryName}</td>
                <td>{totalConfirmed}</td>
            </tr>
        );
    });

    return (
        <div className="covid-table">
            <table>
                <thead>
                    <tr>
                        <th id="item-number">№</th>
                        <th id="item-Country" onClick={() => sortColumn("countryName")}>Country</th>
                        <th id="item-TotalConfirmed" onClick={() => sortColumn("totalConfirmed")}>Total Confirmed</th>
                    </tr>
                </thead>
                
                <tbody>
                    {CountriesList}
                </tbody>
            </table>
        </div> 
    ); 
};

export default CountriesTable;
