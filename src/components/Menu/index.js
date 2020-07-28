import React from 'react';
import Logo from '../../assets/img/logo_blue.png';
import './Menu.css';
import ButtonLink from '../Menu/components/ButtonLink/index';

function Menu() {
    return (
        <hader>
            <nav className="Menu">
               <a href="/">
                <img className="logo" src={Logo} alt="Logo Front Flix" height="40"/>
               </a>      
               <ButtonLink className="ButtonLink" href="/">Novo Vídeo</ButtonLink>               
            </nav>
        </hader>
    )
}

export default Menu;