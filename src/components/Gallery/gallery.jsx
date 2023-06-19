import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';
import Card from '../Cards/card';
import '../Gallery/gallery.scss';

function Gallery() {
  return (
    <main className="gallery">
      {/* Parcours de la liste des logements */}
      {logements.map((data) => (
        <Link to={`/logements/${data.id}`} className='card' key={data.id}>
          {/* Affichage d'une carte pour chaque logement */}
          <Card cover = {data.cover} alt={data.title} title = {data.title} />
          {/* Background pour l'effet de superposition */}
          <span className="background"></span>
        </Link>
      ))}
    </main>
  );
}

export default Gallery;
