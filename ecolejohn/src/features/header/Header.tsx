import React from 'react';
import { useDispatch } from "react-redux";
import { setKart } from '../../store';

import './header.scss';
import kart from './../../assets/kartcolor.png';


const Header : React.FC = () => {
  const dispatch = useDispatch();

  const kartAnimManagement = () => {
    const kartIcon : HTMLElement | null = document.getElementById('kart');
    kartIcon?.classList.add('animKart');
    dispatch(setKart(true));
    
    const removeAnimTag = () => {
      kartIcon?.classList.remove('animKart');
    }

    setTimeout(removeAnimTag, 4900);
  };

  return(
    <>
      <div className='header'>
        <a id='actuLink' className='header__link' href="#actu">Actu</a>
        <a id='nousEcoleJohnLink' className='header__link' href="#nousEcoleJohn">Nous L'EcoleJohn</a>
        <a id='horsLesMursLink' className='header__link' href="#horsLesMurs">Hors Les Murs</a>

        <h1> Ecole John Music </h1>

        <a id='equipeLink' className='header__link' href="#equipe">L'équipe</a>
        <a id='inscriptionLink' className='header__link' href="#inscription">Inscription</a>
        <a id='eventsLink' className='header__link' href="#events">Events</a>

        <img id='kart' className='header__kart' src={kart} onClick={kartAnimManagement}></img>
      </div> 
    </>
  )
}

export default Header;