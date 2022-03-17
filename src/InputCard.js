import { useState } from "react";

const InputCard = () => {
    const [city, setCity] = useState('Kokkola');

    const handleSubmit = (e) => {
        e.preventDefault();
        
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