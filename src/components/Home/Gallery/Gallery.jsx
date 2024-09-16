import React, { useState } from 'react';
import styles from './Gallery.module.css';
import image3 from '../../../images/image3.jpg';
import image4 from '../../../images/image4.jpg';
import image5 from '../../../images/image5.jpg';
import image6 from '../../../images/image6.jpg';

const images = [
  {
    src: image3,
    title: 'Dracaena Trifasciata',
    subtitle: 'Live the Beauty',
    category: 'Photoshoot / Adv.Campaign',
  },
  {
    src: image4,
    title: 'Cereus Penuvianus',
    subtitle: 'Live the Beauty',
    category: 'Photoshoot / Adv.Campaign',
  },
  {
    src: image5,
    title: 'Calliope',
    subtitle: 'Live the Beauty',
    category: 'Photoshoot / Adv.Campaign',
  },
  {
    src: image6,
    title: 'Golden Pothos',
    subtitle: 'Live the Beauty',
    category: 'Photoshoot / Adv.Campaign',
  },
];

function GalleryItem({
  src,
  category,
  subtitle,
  title,
  updateActiveImage,
  index,
}) {
  const handleClick = () => {
    updateActiveImage(index);
  };

  return (
    <div className={styles.galleryItemWrapper} onClick={handleClick}>
      <div className={styles.galleryItem}>
        <div className={styles.galleryItemInfo}>
          <h1 className={styles.galleryInfoTitle}>{title}</h1>
          <h2 className={styles.galleryInfoSubtitle}>{subtitle}</h2>
          <p className={styles.galleryInfoCategory}>{category}</p>
        </div>
        <div
          className={styles.galleryItemImage}
          style={{ backgroundImage: `url(${src})` }}
        ></div>
      </div>
    </div>
  );
}

export default function Gallery() {
  const [activeImage, setActiveImage] = useState(0); // Changed initial active image to 0

  return (
    <section className={styles.galleryWrap}>
      <div className={styles.gallery}>
        <div className={styles.galleryCounter}>
          <span>{activeImage + 1}</span>{' '}
          {/* Added +1 to display correct image number */}
          <span>/</span>
          <span>{images.length}</span>
        </div>

        {images.map((image, index) => (
          <GalleryItem
            key={image.src}
            index={index}
            {...image}
            updateActiveImage={setActiveImage} // Changed to directly set the active image index
          />
        ))}
      </div>
    </section>
  );
}
