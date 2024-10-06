// Services.js
import React from 'react';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <h2>Our Services</h2>
            <ul>
                <li>
                    <h3>Online Courses</h3>
                    <p>Learn at your own pace with our comprehensive online courses.</p>
                </li>
                <li>
                    <h3>Virtual Workshops</h3>
                    <p>Participate in interactive workshops with industry experts.</p>
                </li>
                <li>
                    <h3>Career Guidance</h3>
                    <p>Receive personalized advice to help shape your career path.</p>
                </li>
                <li>
                    <h3>Mentorship Programs</h3>
                    <p>Connect with mentors who can help you grow in your field.</p>
                </li>
                <li>
                    <h3>Networking Events</h3>
                    <p>Join events to meet like-minded individuals and expand your network.</p>
                </li>
                <li>
                    <h3>Resources & Materials</h3>
                    <p>Access a wealth of materials to support your learning journey.</p>
                </li>
            </ul>
        </div>
    );
};

export default Services;
