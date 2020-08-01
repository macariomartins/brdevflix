import React from 'react';
import './Menu.css';
import { Link } from 'react-router-dom';
import { FaFolder, FaYoutube } from 'react-icons/fa';
import Button from '../Button';
import Logo from '../../assets/img/Logo.png';

function Menu() {
  return (
    <nav className="Menu">
      <Link className="LogoWrapper" to="/">
        <img className="Logo" src={Logo} alt="BR_DevFlix" />
      </Link>

      <div className="Actions">
        <Button as={Link} to="/cadastro/categoria" className="ButtonLink">
          <FaFolder style={{ position: 'relative', top: '2px' }} />
          {' '}
          Nova categoria
        </Button>

        <Button as={Link} to="/cadastro/video" className="ButtonLink">
          <FaYoutube style={{ position: 'relative', top: '2px' }} />
          {' '}
          Novo vídeo
        </Button>
      </div>
    </nav>
  );
}

export default Menu;
