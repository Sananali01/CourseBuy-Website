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
import img from '../assets/peakpx.jpg';

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
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <AboutContent>
              <h2 className={css(animations.fadeInUp)}>
                <FontAwesomeIcon icon={faGraduationCap} /> About KnowledgeTree
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
  { name: 'John Smith', position: 'Lead Developer', img: 'team-member2.jpg' },
  { name: 'Alice Johnson', position: 'Marketing Director', img: 'team-member3.jpg' },
  { name: 'Bob Brown', position: 'Product Manager', img: 'team-member4.jpg' },
  { name: 'Mary Davis', position: 'UX/UI Designer', img: 'team-member5.jpg' },
  { name: 'Tom Wilson', position: 'Data Scientist', img: 'team-member6.jpg' }
];

const AboutWrapper = styled.div`
  padding: 50px 0;
  background: #f5f5f5;
`;

const AboutContent = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto;
  background: #fff;
  padding: 30px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    font-size: 36px;
    color: var(--orange);
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
  background: #f9f9f9;
  padding: 50px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    color: var(--orange);
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  p {
    font-size: 18px;
    color: #555;
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
    color: var(--orange);
    margin-bottom: 20px;
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

  img {
    width: 200px;
    height: 200px;
    border-radius: 20%;
    margin: 0 auto 20px;
    margin-bottom: 20px;
  }

  h3 {
    font-size: 22px;
    color: var(--orange);
    margin-bottom: 10px;
  }

  p {
    font-size: 16px;
    color: #555;
  }
`;

const SocialIcons = styled.div`
  margin-top: 10px;

  svg {
    margin: 0 5px;
    color: #555;
    cursor: pointer;

    &:hover {
      color: #333;
    }
  }
`;

const TestimonialsSection = styled.div`
  background: #f9f9f9;
  padding: 50px 0;
  text-align: center;

  h2 {
    font-size: 32px;
    color: var(--orange);
    margin-bottom: 20px;
  }
`;

const StyledSlider = styled(Slider)`
  .slick-dots {
    bottom: -30px;
  }

  .slick-dots li button:before {
    color: #333;
  }

  .slick-dots li.slick-active button:before {
    color: #333;
  }

  .slick-prev:before,
  .slick-next:before {
    color: #333;
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
    color: #555;
    font-style: italic;
    line-height: 1.8;
    margin: 10px 0;
  }

  h4 {
    font-size: 16px;
    color: var(--orange);
    font-weight: bold;
    margin-top: 10px;
  }

  svg {
    font-size: 20px;
    color: #333;
    margin: 0 10px;
  }
`;

export default AboutUsPage;
