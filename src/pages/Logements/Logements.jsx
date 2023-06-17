import React from 'react';
import Carrousel from '../../components/Caroussel/carrousel';
import { Navigate, useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/collapse';

import './logements.scss'

const Logement = () => {
  const {logementId} = useParams()
  console.log(logements);
   const appart = logements.find((appart)=>appart.id === logementId)
  return appart ? (
   <main>
      <Carrousel appartPicture={appart.pictures}/>

      <section className='location'>
        <div className='location-header'>
          <p className='title-appart' >{appart.title}</p>
          <p className='title-city' >{appart.location}</p>
          <div className='tags'>{appart.tags.map((tag, index) => (
            <span className='tag' key={index}>{tag}</span>
           ))}
          </div>
        </div>

      <div className='location-host'>
        <div className='host'>
          <div className='host-name'>{appart.host.name} </div> 
          <img className='host-picture' src={appart.host.picture} alt="" />
        </div>
        <div className='notation'>
          <Rating rating={appart.rating} /> 
        </div>
       </div>
      </section> 
      <div className='location-info'>
        <div className='collapse-container'>
          <Collapse  title= "Description" content= {appart.description}/>
        </div>
        <div className='collapse-container'>
          <Collapse title="Equipement" content={<ul>{appart.equipments.map((equipment) => 
            <li key={equipment}>{equipment}</li>)}
              </ul>} />
        </div> 
      </div>

   
    </main>
  ):(
    <Navigate replace to="../../components/ErrorPage/ErrorPage" /> 
  )
};
export default Logement;
