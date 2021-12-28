import React, { useState } from 'react';
import Header from '../header';
import CountriesTable from '../countries-table';
import Searcher from '../searcher';
import Modal from '../modal';
import { useDataFetching, useFilteredData } from "../../services/covid-service-hooks";

import './app.css';

const App = () => {
    const [modalActive, setModalActive] = useState(false);
    const [modalData, setModalData] = useState({});
    const {data} = useDataFetching();
    const { filtered, setSearch, setFiltered } = useFilteredData(data);
    return (
        <div className='App'>
            <div className='headline'>
                <Header />
                <Searcher setSearch = {setSearch}/>
            </div>
            <CountriesTable 
                filtered = {filtered}
                setFiltered = {setFiltered}
                openModal = {setModalActive}
                setModalData = {setModalData}
                />
            <Modal
                active = {modalActive} 
                setActive = {setModalActive}
                modalData = {modalData}>
            </Modal>    
        </div>
    );
};

export default App;






