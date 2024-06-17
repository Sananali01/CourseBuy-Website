import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faEnvelope, faPhone, faUser, faComment } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const ContactUsPage = () => {
  return (
    <ContactWrapper>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-12">
            <ContactInfo>
              <div className="section-heading">
                <h3>Contact Information</h3>
                <p>Feel free to reach out to us!</p>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faMapMarkerAlt} />
                <div>
                  <p>123 Awesome Street,</p>
                  <p>City, Country</p>
                </div>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faEnvelope} />
                <p>knowledgetree@email.com</p>
              </div>
              <div className="info-item">
                <FontAwesomeIcon icon={faPhone} />
                <p>+1 234 567 890</p>
              </div>
              <div className="section-heading">
                <h3>Follow Us on Social Media</h3>
              </div>
              <div className="info-item social-icons">
                <AnimatedLink href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faFacebook} style={{ fontSize: '32px', color: '#3b5998' }} />
                </AnimatedLink>
                <AnimatedLink href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faTwitter} style={{ fontSize: '32px', color: '#1da1f2' }} />
                </AnimatedLink>
                <AnimatedLink href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '32px', color: '#c32aa3' }} />
                </AnimatedLink>
                <AnimatedLink href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '32px', color: '#0077b5' }} />
                </AnimatedLink>
                <AnimatedLink href="/" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon icon={faYoutube} style={{ fontSize: '32px', color: '#ff0000' }} />
                </AnimatedLink>
              </div>
            </ContactInfo>
          </div>
          <div className="col-lg-6 col-md-12">
            <ContactForm>
              <h2>Contact Us</h2>
              <form>
                <div className="mb-3">
                  <label htmlFor="name" className="form-label">
                    <FontAwesomeIcon icon={faUser} className="mr-2" />
                    Your Name
                  </label>
                  <input type="text" id="name" name="name" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="email" className="form-label">
                    <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
                    Your Email
                  </label>
                  <input type="email" id="email" name="email" className="form-control" required />
                </div>
                <div className="mb-3">
                  <label htmlFor="message" className="form-label">
                    <FontAwesomeIcon icon={faComment} className="mr-2" />
                    Your Message
                  </label>
                  <textarea id="message" name="message" rows="6" className="form-control" required></textarea>
                </div>
                <button type="submit" className="btn btn-primary">
                  Send Message
                </button>
              </form>
            </ContactForm>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
};

const ContactWrapper = styled.div`
  padding: 50px 0;
`;

const ContactInfo = styled.div`
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .section-heading {
    text-align: center;
    margin-bottom: 30px;
  }

  .section-heading h3 {
    font-size: 28px;
    color: #333;
    margin-bottom: 10px;
  }

  .section-heading p {
    font-size: 18px;
    color: #555;
  }

  .info-item {
    display: flex;
    align-items: center;
    gap: 10px;
    margin-bottom: 15px;

    svg {
      font-size: 24px;
      color: #007bff; /* original color */
    }

    p {
      margin: 0;
      font-size: 18px;
      color: #555;
    }
  }

  .social-icons {
    display: flex;
    gap: 15px;
    margin-top: 20px;
  }
`;

const ContactForm = styled.div`
  background-color: #f9f9f9;
  padding: 30px;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  h2 {
    margin-bottom: 30px;
    font-size: 32px;
    color: #333;
    text-align: center;
  }

  form {
    .mb-3 {
      margin-bottom: 25px;
    }

    .form-label {
      font-size: 20px;
      color: #555;
    }

    .form-control {
      height: 50px;
      font-size: 18px;
      border-radius: 8px;
      &:focus {
        box-shadow: none;
        border-color: #007bff;
      }
    }

    textarea.form-control {
      height: 150px;
    }

    .btn-primary {
      padding: 12px 30px;
      font-size: 20px;
      font-weight: 700;
      border-radius: 8px;
      background-color: var(--orange);
      border: none;
      &:hover {
        background-color: black;
      }
    }
  }
`;

// Animation for social media icons
const AnimatedLink = styled.a`
  svg {
    font-size: 28px;
    transition: transform 0.3s ease-in-out;
    &:hover {
      transform: scale(1.1);
    }
  }
`;

export default ContactUsPage;
