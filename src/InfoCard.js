import { useState } from "react";

import InputCard from './InputCard';

const InfoCard = () => {
    const [city, setCity] = useState('Kokkola');
    const [degree, setDegree] = useState(2);
    const [icon, setIcon] = useState('18');
    const [status, setStatus] = useState('Light Rain');

    const inputToInfo = (city, degree, icon, status) => {
        setCity(city);
        setDegree(degree);
        setStatus(status);
        if (icon < 10) setIcon(`0${icon}`); else setIcon(icon);
    }

    return (  
        <div>
            <InputCard inputToInfo = { inputToInfo }/>
            <div className="info-card">
            <article>
                <div class="container">
                    <h3 id="city-name" style={{ textTransform: 'capitalize'}}>{ city }</h3>
                    <span id="temp">{ degree }</span ><span id='degree'>&#176;</span><span id="c">C</span>
                    <div id="ico"><img src={ `https://developer.accuweather.com/sites/default/files/${icon}-s.png` } alt="Light Rain" width="200" height="125"></img></div>
                    <div id="status">{ status }</div>
                </div>
            </article>
        </div>
        </div>
    );
}
 
export default InfoCard;