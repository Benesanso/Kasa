import React from 'react';
import About from '../../assets/background-about.png';
import AboutMobile from '../../assets/kalen-emsley-Bkci_8qcdvQ-unsplash 2 (1).png';
import './about.scss';
import Collapse from '../../components/Collapse/collapse'


const collapseAbout = [
  {
    title: 'Fiabilité',
    content: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.'
  },
  {
    title: 'Respect',
    content: "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."
  },
  {
    title: 'Service',
    content: "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question."
  },
  {
    title: 'Sécurité',
    content: "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."
  }
];

function banner() {
  return (
    <div className=' main-about'>
        <article className='banner-about'>
          <img className='banner-img' src={About} alt='Vue des montagnes'/>
          <img className='banner-img-mobile' src={AboutMobile} alt='Vue des montagnes'/>
        </article>
     
      <section className='section-about'>
      {collapseAbout.map((collapse, index) => (
          <div className='collapse-about-container' key={index}>
            <Collapse title={collapse.title} content={collapse.content} />
          </div>
        ))}
      </section>
    </div>
  );
}

export default banner;
