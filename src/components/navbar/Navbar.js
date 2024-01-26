
import {NavLink} from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
const handleClick = () => {

}

    return (
        <nav className="navbar">
            <div className="container">
              <div className="logo">
             <a href="/"> <img src='logo.png' alt="Logo" style={{height:"45px"}}/></a>
            </div>
            <div className="nav-elements">
                <ul>
                    <li><NavLink to="/projects"> Projects </NavLink></li>
                    <li><NavLink to="/about"> About </NavLink></li>
                    <li><NavLink to="/contact"> Contact </NavLink></li>
                    <li>
              <a href="/contact"><button className="nav-button" >
                Hire Me
              </button></a>
            </li>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;