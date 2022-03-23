import { useEffect, useState } from "react";

const InputCard = ({inputToInfo}) => {
    const [city, setCity] = useState('Kokkola');
    const key = '3GedPYOghUx6xKzgD8ktxz9SqPWrPO43';
    const baseCity = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const baseWeather = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const [cityKey, setCityKey] = useState(12345);
    const [apiCity, setApiCity] = useState('');
    const [apiWeather, setApiWeather] = useState(cityKey);

    async function getApi(){
        fetch(apiCity)
        .then(res => {return res.json()})
        .then(location => {
            setCityKey(location[0].Key);
            setApiWeather(`${ baseWeather }${ location[0].Key }?apikey=${ key }`);
            return fetch(apiWeather);
        })
        .then(res => {return res.json()})
        .then(weather => {
            inputToInfo(city, weather[0].Temperature.Metric.Value, weather[0].WeatherIcon, weather[0].WeatherText)
        })
        .catch(error => {console.log(error)})
    }

    useEffect(() => {
        getApi();
    }, [apiCity, apiWeather])

    const handleSubmit = (e) => {
        e.preventDefault();
        setApiCity(`${ baseCity }?apikey=${ key }&q=${ city }`);
    }

    return ( 
        <div className="input-card">
            <form onSubmit={ handleSubmit }>
                <input type="text" required value={ city } onChange={(e) => setCity(e.target.value)}/>
                <button>Submit</button>
            </form>
        </div>
    );
}
 
export default InputCard;