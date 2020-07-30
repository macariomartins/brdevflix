import React from 'react';
import Logo from '../../assets/img/Logo.png';
import './Menu.css';
import Button from '../Button';
import { Link } from 'react-router-dom';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="BR_DevFlix" />
            </Link>

            <Button as={Link} to="/cadastro/video" className="ButtonLink">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;