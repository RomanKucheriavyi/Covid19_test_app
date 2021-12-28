import React, {useEffect} from 'react'
import {createPortal} from 'react-dom';

import totalConfirmedIcon from "../../assets/svg/total-confirmed-icon.svg";
import totalDeathsIcon from "../../assets/svg/total-deaths-icon.svg";
import totalRecoveredIcon from "../../assets/svg/total-recovered-icon.svg";
import "./modal.css";

const modalRoot = document.createElement('div');
modalRoot.setAttribute('id', 'modal-root');
document.body.appendChild(modalRoot);

const Modal = ({active, setActive, modalData}) => {

    const element = document.createElement('div');

    useEffect(() => {
        modalRoot.appendChild(element);
        return () => modalRoot.removeChild(element);
    });

    const {countryName, totalConfirmed, totalDeaths, totalRecovered} = modalData;

    if (!active) {
        return null;
    }

    return createPortal(
        <div>
            <div className="overlay"></div>
            <div className="country-modal">
                <h2 className="country-modal-title">{countryName}</h2>
                <div className="country-modal-content">
                    <div className="total-confirmed">
                        <img src={totalConfirmedIcon}/>
                        <span>TotalConfirmed</span>
                        <span>{totalConfirmed}</span>
                    </div>
                    <div className="total-death">
                        <img src={totalDeathsIcon}/>
                        <span>TotalDeaths</span>
                        <span>{totalDeaths}</span>
                    </div>
                    <div className="total-recovered">
                        <img src={totalRecoveredIcon}/>
                        <span>TotalRecovered</span>
                        <span>{totalRecovered}</span>
                    </div>
                </div>
                <button className='close-button' onClick={() => setActive(false)}>
                    OK
                </button>
            </div>
        </div>, element
    );
};

export default Modal;


