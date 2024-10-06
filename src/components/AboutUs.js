
import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="about-us">
            <h2>About Us</h2>
            <p>
                We are an innovative EdTech company dedicated to enhancing education through technology. Our mission is to make learning accessible and engaging for everyone.
            </p>
            <h3>Our Mission</h3>
            <div className="mission">
                <p>
                    Our mission is to empower learners and educators by providing cutting-edge tools and resources that enhance the educational experience. We believe in the transformative power of education and strive to create inclusive learning environments.
                </p>
            </div>
            <h3>Our Vision</h3>
            <div className="vision">
                <p>
                    Our vision is to be a leader in the EdTech industry, known for our commitment to innovation and quality. We envision a world where education is personalized, engaging, and accessible to all, regardless of their background or location.
                </p>
            </div>
        </div>
    );
};

export default AboutUs;
