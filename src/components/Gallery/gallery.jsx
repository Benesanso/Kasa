import { Link } from 'react-router-dom';
import logements from '../../data/logements.json';
import '../Gallery/gallery.scss';

function Gallery() {
  console.log(logements);
  return (
    <main className="gallery">
      {logements.map((data) => (
        <Link to={`/logements/${data.id}`} className="gallery-card" key={data.id}>
          <img  className='gallery-image'  src={data.cover} alt={data.title} />
          <h3 className='gallery-title'>{data.title}</h3>
          <span className="background"></span>
        </Link>
      ))}
    </main>
  );
}

export default Gallery;
