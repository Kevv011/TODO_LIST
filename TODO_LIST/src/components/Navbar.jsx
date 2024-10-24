import '../assets/css/Navbar.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTableList } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import logotype from '../assets/img/logo.png';

export const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg text-white p-0 m-0">
            <div className="container-fluid mx-1 mx-md-5">

                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">

                    {/* Logo */}
                    <div className="d-flex justify-content-center align-items-center">
                        <img src={logotype} alt="Logo" className="logo" />
                        <h5><strong>ACTIVIDADES</strong></h5>
                    </div>

                    {/* Links */}
                    <ul className="navbar-nav text-white d-flex flex-row">
                        <li className="nav-item">
                            <Link className="nav-link text-white fs-2" to='/'><FontAwesomeIcon icon={faPlus} /></Link>
                        </li>
                        <li className="nav-item ms-3">
                            <Link className="nav-link text-white fs-2" to='/list'><FontAwesomeIcon icon={faTableList} /></Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}