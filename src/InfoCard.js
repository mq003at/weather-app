import lightrain from './icon/light-rain.png';

const InfoCard = () => {
    return (  
        <div className="info-card">
            <article>
                <div class="container">
                    <h3 id="city-name">Helsinki</h3>
                    <span id="temp">7</span ><span id='degree'>&#176;</span><span id="c">C</span>
                    <div id="ico"><img src={ lightrain } alt="Light Rain" width="100" height="100"></img></div>
                    <div id="status">Light Rain</div>
                </div>
            </article>
        </div>
    );
}
 
export default InfoCard;