import React from 'react';
import Logo from '../../assets/images/devflix-logo.png';
import { Link } from 'react-router-dom';
import Button from '../Button';
//import ButtonLink from '../components/ButtonLink';

import './Menu.css';

function Menu() {
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Devflix logo" />
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/video">
                Novo vídeo
            </Button>
        </nav>
    );
}

export default Menu;