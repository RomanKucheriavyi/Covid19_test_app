import React, {useState} from "react";

import "./countries-table.css";

const CountriesTable = ({filtered, setFiltered, openModal, setModalData}) => {

    const [order, setOrder] = useState("up");

    const sortColumn = (col) => {
        if (order === "up") {
            const sorted = [...filtered].sort((a, b) =>
                a[col] < b[col] ? 1 : -1
            );
            setFiltered(sorted);
            setOrder("down");
        }
        if (order === "down") {
            const sorted = [...filtered].sort((a, b) =>
                a[col] > b[col] ? 1 : -1
            );
            setFiltered(sorted);
            setOrder("up");
        }
    };

    const CountriesList = filtered.map((countriesListItem, index) => {
        let { id, Country, TotalConfirmed, TotalDeaths, TotalRecovered} = countriesListItem;
        return (
            <tr key={id} onClick={() => setModalData({Country, TotalConfirmed, TotalDeaths, TotalRecovered}, openModal(true))}>
                <td>{index+1}</td>
                <td>{Country}</td>
                <td>{TotalConfirmed}</td>
            </tr>
        );
    });

    return (
        <div className="covid-table">
            <table>
                <thead>
                    <tr>
                        <th id="item-number">№</th>
                        <th id="item-Country" onClick={() => sortColumn("Country")}>Country</th>
                        <th id="item-TotalConfirmed" onClick={() => sortColumn("TotalConfirmed")}>Total Confirmed</th>
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
