import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';
import Card from '../Cards/card';
import '../Gallery/gallery.scss';

function Gallery() {
  return (
    <main className="gallery">
      {logements.map((data) => (
        <Link to={`/logements/${data.id}`} className='card' key={data.id}>
          <Card cover = {data.cover} alt={data.title} title = {data.title} />
            <span className="background"></span>
        </Link>
      ))}
    </main>
  );
}

export default Gallery;
