import React from 'react';
import Background from '../../assets/Background-home.png';
import './home.scss';
import Gallery from '../../components/Gallery/gallery'

function Banner() {
    return(
   <main className='main-banner'>
    {/* Bannière de l'accueil */} 
    <article className='banner'>
        <img className='img' src={Background} alt='côte rocher avec vue plage'/>
        <h1 className='title'>Chez vous, partout et ailleurs</h1>
        <span className="background-banner"></span>
    </article>
    {/* Composant Gallery */}
    <Gallery />
   </main> 
  );
  }
  export default Banner;