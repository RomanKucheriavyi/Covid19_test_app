import React, { useState } from 'react';
import Header from '../header';
import CountriesTable from '../countries-table';
import Searcher from '../searcher';
import Modal from '../modal';
import { useDataFetching } from "../../services/covid-service-hooks";

import './app.css';

const App = () => {
    const [modalActive, setModalctive] = useState(false);
    const [modalData, setModalData] = useState([]);
    const { filtered, setSearch, setFiltered } = useDataFetching();
    return (
        <div className='App'>
            <div className='headline'>
                <Header />
                <Searcher setSearch = {setSearch}/>
            </div>
            <CountriesTable 
                filtered = {filtered}
                setFiltered = {setFiltered}
                openModal = {setModalctive}
                setModalData = {setModalData}
                />
            <Modal
                active = {modalActive} 
                setActive = {setModalctive}
                modalData = {modalData}>
            </Modal>    
        </div>
    );
};

export default App;






