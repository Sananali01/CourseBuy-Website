import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import { fadeInUp } from 'react-animations';
import { StyleSheet, css } from 'aphrodite';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight, faLaptopCode, faUsers, faGraduationCap } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import img from '../assets/1.jpg';
import img2 from '../assets/2.jpg';
import img3 from '../assets/3.png';
import img4 from '../assets/4.jpg';
import img5 from '../assets/5.jpg';
import img6 from '../assets/6.jpg';

// Animation styles
const animations = StyleSheet.create({
  fadeInUp: {
    animationName: fadeInUp,
    animationDuration: '2s',
  }
});

const AboutUsPage = () => {
  const testimonials = [
    { text: "KnowledgeTree has transformed my career. The courses are top-notch and the support is fantastic!", author: "Emily R." },
    { text: "I love the flexibility and the depth of knowledge provided by the instructors.", author: "Michael B." },
    { text: "The best online learning platform I've ever used!", author: "Sarah K." },
    { text: "The course variety and quality are unparalleled.", author: "David W." },
    { text: "Excellent customer service and top-quality courses.", author: "Laura G." },
    { text: "I achieved my career goals thanks to KnowledgeTree.", author: "James T." },
    { text: "A fantastic learning experience!", author: "Amy H." },
    { text: "The instructors are industry experts and very helpful.", author: "Robert F." },
    { text: "Highly recommend to anyone looking to improve their skills.", author: "Samantha C." },
    { text: "An excellent platform for continuous learning.", author: "Chris P." }
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <AboutWrapper>
      <div className="container mb-5">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <AboutContent>
            <FontAwesomeIcon icon={faGraduationCap} className='main-icon' /> 
              <h2 className={css(animations.fadeInUp)}>
               About KnowledgeTree
              </h2>
              <p className={css(animations.fadeInUp)}>
                Welcome to KnowledgeTree, your premier destination for online courses in coding, marketing, and more. 
                We empower learners around the globe with expert-led courses designed to enhance your professional skills 
                and expand your knowledge.
              </p>
              <p className={css(animations.fadeInUp)}>
                Our platform offers a diverse range of courses curated by industry experts who are passionate about 
                education and innovation. Whether you're a beginner or a seasoned professional, 
                KnowledgeTree provides a flexible learning experience that adapts to your schedule and goals.
              </p>
              <p className={css(animations.fadeInUp)}>
                Join our community of motivated learners and discover the transformative power of online education. 
                Explore our course catalog today and take the next step towards achieving your career aspirations 
                with KnowledgeTree.
              </p>
            </AboutContent>
          </div>
        </div>
      </div>
      
      <MissionSection>
        <h2 className={css(animations.fadeInUp)}>
          <FontAwesomeIcon icon={faLaptopCode} /> Our Mission
        </h2>
        <p className={css(animations.fadeInUp)}>
          Our mission is to make high-quality education accessible to everyone, everywhere. We strive to provide 
          the best learning experiences through innovative courses and a supportive community.
        </p>
      </MissionSection>
      
      <TeamSection>
        <h2 className={css(animations.fadeInUp)}>
          <FontAwesomeIcon icon={faUsers} /> Meet the Team
        </h2>
        <TeamGrid>
          {teamMembers.map((member, index) => (
            <TeamMember key={index} className={css(animations.fadeInUp)}>
              <img src={member.img} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
              <SocialIcons>
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faLinkedin} />
                <FontAwesomeIcon icon={faGithub} />
              </SocialIcons>
            </TeamMember>
          ))}
        </TeamGrid>
      </TeamSection>

      <TestimonialsSection>
        <h2 className={css(animations.fadeInUp)}>Testimonials</h2>
        <StyledSlider {...settings}>
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} className={css(animations.fadeInUp)}>
              <FontAwesomeIcon icon={faQuoteLeft} />
              <p>"{testimonial.text}"</p>
              <h4>- {testimonial.author}</h4>
              <FontAwesomeIcon icon={faQuoteRight} />
            </Testimonial>
          ))}
        </StyledSlider>
      </TestimonialsSection>
    </AboutWrapper>
  );
};

const teamMembers = [
  { name: 'Jane Doe', position: 'CEO & Founder', img: img },
  { name: 'John Smith', position: 'Lead Developer', img: img2 },
  { name: 'Alice Johnson', position: 'Marketing Director', img: img3 },
  { name: 'Bob Brown', position: 'Product Manager', img: img4},
  { name: 'Mary Davis', position: 'UX/UI Designer', img: img5 },
  { name: 'Tom Wilson', position: 'Data Scientist', img: img6 }
];

const AboutWrapper = styled.div`
  padding: 50px 0;
`;

const AboutContent = styled.div`

  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
.main-icon{
  font-size: xx-large;
  color: var(--clr-orange);
}
  h2 {
    font-size: xx-large;
    color: var(--clr-orange);
    font-weight: bolder;
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    color: #555;
    line-height: 1.8;
    margin-bottom: 30px;
  }
`;

const MissionSection = styled.div`
  background: var(--clr-black);
  padding: 50px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    color: var(--clr-orange);
    margin-bottom: 20px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    color: white;
    max-width: 600px;
    margin: 0 auto;
    line-height: 1.8;
  }
`;

const TeamSection = styled.div`
  padding: 50px 0;
  text-align: center;
 

  h2 {
    font-size: 32px;
    color: var(--clr-orange);
    margin-bottom: 20px;
    font-weight: bolder;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const TeamGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  max-width: 1000px;
  margin: 0 auto;
  

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 540px) {
    grid-template-columns: 1fr;
  }
`;

const TeamMember = styled.div`
  text-align: center;
  background: #fff;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border: 2px solid var(--clr-black);

  img {
    height: 31rem;
    width: 21rem;
    border-radius: 0%;
    border: 0.5rem solid var(--clr-grey);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, .3);
    object-fit: cover;
    margin: 0 auto 20px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 22px;
    color: var(--clr-orange);
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: var(--clr-grey);
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  svg {
    margin: 0 5px;
    color: #555;
    cursor: pointer;
    color: var(--clr-orange);
    &:hover {
      color: var(--clr-grey);
    }
  }
`;

const TestimonialsSection = styled.div`
  background: var(--clr-black);
  padding: 50px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    font-weight: bold;
    color: var(--clr-orange);
    margin-bottom: 20px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    color: white;
  }

  .slick-dots li.slick-active button:before {
    color: white;
  }

  .slick-prev:before,
  .slick-next:before {
    color: white;
  }


    .slick-next {
      right: 120px;
    }
    .slick-prev {
      left: 120px;
    }

  @media (max-width: 1000px) {
    .slick-prev,
    .slick-next {
      display: none !important;
    }
  }

  @media (max-width: 480px) {
    .slick-dots {
      bottom: -20px;
    }
  }
`;

const Testimonial = styled.div`
  max-width: 700px;
  margin: 0 auto;
  text-align: center;

  p {
    font-size: 18px;
    color: var(--clr-white);
    font-style: italic;
    line-height: 1.8;
    margin: 10px 0;
  }

  h4 {
    font-size: 16px;
    color: var(--clr-cream);
    font-weight: bold;
    margin-top: 10px;
  }

  svg {
    font-size: 20px;
    color: white;
    margin: 0 10px;
  }
`;

export default AboutUsPage;
