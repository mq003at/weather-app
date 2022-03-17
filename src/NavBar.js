import { Link } from 'react-router-dom';

const NavBar = () => {
    return ( 
        <nav className="navbar">
            <h1>Weather Application</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/" id="github">Github</Link>
            </div>
        </nav>
    );
}
 
export default NavBar;