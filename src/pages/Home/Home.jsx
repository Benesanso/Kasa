import React from 'react';
import Background from '../../assets/Background-home.png';
import './home.scss';
import Gallery from '../../components/Gallery/gallery'

function Banner() {
    return(
   <main className='main-banner'>
    <article className='banner'>
        <img className='banner-img' src={Background} alt='côte rocher avec vue plage'/>
        <h1 className='banner-title'>Chez vous, partout et ailleurs</h1>
        <span className="background-banner"></span>
    </article>
    <Gallery />
   </main> 
  );
  }
  export default Banner;