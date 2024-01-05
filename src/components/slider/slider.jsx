import React, {useState, useEffect} from 'react';


export default function Slider({images, autoplayInterval}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((currentIndex + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const autoplay = setInterval(nextImage, autoplayInterval);

    return () => {
      clearInterval(autoplay);
    };
  }, [currentIndex]);

  return (
    <div>
      <button onClick={previousImage}>Previous</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} width="500"/>
      <button onClick={nextImage}>Next</button>
    </div>
  );

}
