import {createPortal} from 'react-dom';

import totalConfirmedIcon from "../../assets/svg/total-confirmed-icon.svg";
import totalDeathsIcon from "../../assets/svg/total-deaths-icon.svg";
import totalRecoveredIcon from "../../assets/svg/total-recovered-icon.svg";


import "./modal.css";

const modalRootElement = document.getElementById("modal-root");

const Modal = ({active, setActive, modalData}) => {
    if (!active){
        return null;
    }

    const {Country, TotalConfirmed, TotalDeaths, TotalRecovered} = modalData;
    return createPortal(
        <div>
            <div className="overlay"></div>
            <div className="modal">
                <div id="modal-country">{Country}</div>
                <div className="modal-content">
                    <div className="total-confirmed"><img id="total-confirmed" src={totalConfirmedIcon}/>TotalConfirmed {TotalConfirmed}</div>
                    <div className="total-death"><img id="total-death" src={totalDeathsIcon}/>TotalDeaths {TotalDeaths}</div>
                    <div className="total-recovered"><img id="total-recovered" src={totalRecoveredIcon}/>TotalRecovered {TotalRecovered}</div>
                </div>
                <button className='close-button' onClick={() => setActive(false)}>
                    OK
                </button>
            </div>
        </div>, modalRootElement
    );
};

export default Modal;


