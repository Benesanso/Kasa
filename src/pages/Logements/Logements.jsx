import React from 'react';
import Carrousel from '../../components/Caroussel/carrousel';
import { useParams } from 'react-router-dom';
import logements from '../../data/logements.json';
import Rating from '../../components/Rating/Rating';
import Collapse from '../../components/Collapse/collapse'
import './logements.scss'

const Logement = () => {
  const {logementId} = useParams()
  console.log(logements);
   const appart = logements.find((appart)=>appart.id === logementId)
  return appart ? (
   <main>
       <Carrousel appartPicture={appart.pictures}/>
       <section className='title-appart'>
        <p>{appart.title}</p>
        <span className='host'>
        <div className='host-name'>{appart.host.name} </div> 
        <img className='host-picture' src={appart.host.picture} alt="" />
        </span>
       </section>
       <section className='location-appart'>
        <p>{appart.location}</p>
       </section>
      <section className='notation'>
      <div className='tags'>{appart.tags.map((tag, index) => (
           <span className='tag' key={index}>{tag}</span>
           ))}
           
      </div>
      <Rating rating={appart.rating} /> 
      </section>
      <section className='location-info'>
            <div className='collapse-container-1'>
                <Collapse 
                title= "Description"
                content= {appart.description}
                />
            </div>
            <div className='collapse-container-2'>
                <Collapse 
                title="Equipement"
                content={
                  <ul>{appart.equipments.map((equipment) => 
                    <li key={equipment}>{equipment}</li>)}
                  </ul>}
                />
            </div> 
        </section>
        
     </main>
  ):(
    <div>logement non trouvé</div>
  )
};
export default Logement;
