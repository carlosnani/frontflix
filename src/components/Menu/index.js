import React from 'react';
import Logo from '../../assets/img/logo_blue.png';
import './Menu.css';
import Button from '../Button/index';
import {Link} from 'react-router-dom';

function Menu() {
    return (
        <header>
            <nav className="Menu">
               <Link to="/">
                <img className="logo" src={Logo} alt="Logo Front Flix" height="40"/>
               </Link>      
               <Button as={Link} className="ButtonLink" to="/cadastro/video">Novo Vídeo</Button>               
            </nav>
        </header>
    )
}

export default Menu;