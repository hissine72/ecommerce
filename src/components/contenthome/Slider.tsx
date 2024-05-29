import React, { useState } from 'react';
// import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';


const images = [
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090335/fillers.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090128/boxes.png?auto=format&amp;ixlib=react-9.7.0',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17085923/mailers.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090022/accessories.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17085850/flexible-packaging.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090119/bags.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090216/envelopes.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090017/tubes.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17085903/food-packaging.png?auto=format&ixlib=react-9.7.0&w=512',
  'https://ph-prod.imgix.net/wp-content/uploads/2024/04/17090203/containers.png?auto=format&ixlib=react-9.7.0&w=512',
  
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const getVisibleImages = () => {
    const visibleImages = [];
    for (let i = 0; i < 6; i++) {
      visibleImages.push(images[(currentIndex + i) % images.length]);
    }
    return visibleImages;
  };

  const visibleImages = getVisibleImages();

  return (
    <div className="container mx-auto mt-[200px]">
        <div className=' flex-col md:flex-row md:flex justify-between items-center '>
            <h1 className='font-bold w-[100px] text-xl md:w-[650px] md:text-5xl font-sans '>Industries. Trade-specific solutions designed for your line of business</h1>
            <p className=' text-lg mr-[190px] md:text-xl leading-8 text-gray-700 mb-4 mt-4'>Explore our range of packaging solutions crafted with <br/> various product categories in mind. Find your perfect match.</p>
        </div>
      <div className="flex justify-between mb-4 relative top-[260px]">
        <button onClick={prevSlide} className=' rounded-[50%] relative left-8  w-[60px] h-[60px] bg-white'>
        <FontAwesomeIcon icon={faChevronLeft}  className=' '/>
        </button>
        <button onClick={nextSlide} className=" rounded-[50%] relative right-8  w-[60px] h-[60px] bg-white">
        <FontAwesomeIcon icon={faChevronRight}  className='   '/>
          </button>
      </div>
      <div className="overflow-hidden">
        <div className="flex -mx-2">
          {visibleImages.map((src, index) => (
            <div key={index} className="px-2 w-[350px] flex-shrink-0">
              <img src={src} alt={`Slide ${index + 1}`} className="w-full h-auto rounded-md " />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Slider;
