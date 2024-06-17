import React from 'react';
import styled from 'styled-components';

// Sample images for the gallery
import img1 from '../assets/gallery/photo (1).jpg';
import img2 from '../assets/gallery/photo (2).jpg';
import img3 from '../assets/gallery/photo (3).jpg';
import img4 from '../assets/gallery/photo (4).jpg';
import img5 from '../assets/gallery/photo (5).jpg';
import img6 from '../assets/gallery/photo (6).jpg';
import img7 from '../assets/gallery/photo (7).jpg';
import img9 from '../assets/gallery/photo (9).jpg';
import img10 from '../assets/gallery/photo (10).jpg';

// Programming languages images
import python from '../assets/languages/python.jpg';
import javascript from '../assets/languages/javascript.jpg';
import java from '../assets/languages/java.jpg';
import csharp from '../assets/languages/csharp.jpg';
import cpp from '../assets/languages/cpp.jpg';
import ruby from '../assets/languages/ruby.jpg';
import php from '../assets/languages/php.jpg';
import typescript from '../assets/languages/typescript.png';
import kotlin from '../assets/languages/kotlin.png';
import go from '../assets/languages/go.jpg';
import rust from '../assets/languages/rust.png';
import node from '../assets/languages/node.jpg';
import reactLogo from '../assets/languages/react.png';
import angular from '../assets/languages/angular.png';
import vue from '../assets/languages/vue.png';

// Styled components
const GalleryWrapper = styled.div`
  padding: 50px 0;
  h1{
    text-align: center;
    font-size: xx-large;
  }
`;

const GalleryHeader = styled.h2`
  font-size: 32px;
  color: #333;
  margin-bottom: 20px;
  margin-top: 20px;
`;

const GalleryContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 40px;
  margin-right:10px;
  margin-left:10px;

  @media (min-width: 768px) and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
}
@media (min-width: 320px) and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
}
`;

const GalleryItem = styled.div`
  overflow: hidden;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  img {
    width: 100%;
    height: 300px; /* Adjust the height as per your requirement */
    transition: transform 0.3s ease;
    @media (min-width: 320px) and (max-width: 508px) {
      height: 200px; 
}
  }

  &:hover {
    transform: scale(1.05);
    img {
      transform: scale(1.1);
    }
  }
`;

const GalleryPage = () => {
  return (
    <GalleryWrapper>
       <h1 >Explore Our Gallery</h1>

      <GalleryHeader>Programming Languages</GalleryHeader>
      <GalleryContainer>
        <GalleryItem>
          <img src={python} alt="Python" />
        </GalleryItem>
        <GalleryItem>
          <img src={javascript} alt="JavaScript" />
        </GalleryItem>
        <GalleryItem>
          <img src={java} alt="Java" />
        </GalleryItem>
        <GalleryItem>
          <img src={csharp} alt="C#" />
        </GalleryItem>
        <GalleryItem>
          <img src={cpp} alt="C++" />
        </GalleryItem>
        <GalleryItem>
          <img src={ruby} alt="Ruby" />
        </GalleryItem>
        <GalleryItem>
          <img src={php} alt="PHP" />
        </GalleryItem>
        <GalleryItem>
          <img src={typescript} alt="TypeScript" />
        </GalleryItem>
        <GalleryItem>
          <img src={kotlin} alt="Kotlin" />
        </GalleryItem>
        <GalleryItem>
          <img src={go} alt="Go" />
        </GalleryItem>
        <GalleryItem>
          <img src={rust} alt="Rust" />
        </GalleryItem>
        <GalleryItem>
          <img src={node} alt="Node.js" />
        </GalleryItem>
        <GalleryItem>
          <img src={reactLogo} alt="React" />
        </GalleryItem>
        <GalleryItem>
          <img src={angular} alt="Angular" />
        </GalleryItem>
        <GalleryItem>
          <img src={vue} alt="Vue.js" />
        </GalleryItem>
      </GalleryContainer>

      <GalleryHeader>Our Gallery</GalleryHeader>
      <GalleryContainer>
        <GalleryItem>
          <img src={img2} alt="Gallery Item 2" />
        </GalleryItem>
        <GalleryItem>
          <img src={img3} alt="Gallery Item 3" />
        </GalleryItem>
        <GalleryItem>
          <img src={img4} alt="Gallery Item 4" />
        </GalleryItem>
        <GalleryItem>
          <img src={img5} alt="Gallery Item 5" />
        </GalleryItem>
        <GalleryItem>
          <img src={img6} alt="Gallery Item 6" />
        </GalleryItem>
        <GalleryItem>
          <img src={img1} alt="Gallery Item 1" />
        </GalleryItem>
        <GalleryItem>
          <img src={img7} alt="Gallery Item 7" />
        </GalleryItem>
        <GalleryItem>
          <img src={img9} alt="Gallery Item 9" />
        </GalleryItem>
        <GalleryItem>
          <img src={img10} alt="Gallery Item 10" />
        </GalleryItem>
      </GalleryContainer>
    </GalleryWrapper>
  );
};

export default GalleryPage;
