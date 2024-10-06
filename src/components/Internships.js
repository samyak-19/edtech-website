// Internships.js
import React from 'react';
import './Internships.css';

const Internships = () => {
    return (
        <div className="internships">
            <h2>Internships Available</h2>
            <ul>
                <li>
                    <h3>Software Engineering Intern</h3>
                    <p>Work on developing and maintaining software applications.</p>
                    <p className="internship-date">Posted on: October 1, 2024</p>
                    <a href="#">Apply Now</a>
                </li>
                <li>
                    <h3>Data Analyst Intern</h3>
                    <p>Analyze data to help the company make informed decisions.</p>
                    <p className="internship-date">Posted on: October 3, 2024</p>
                    <a href="#">Apply Now</a>
                </li>
                <li>
                    <h3>Marketing Intern</h3>
                    <p>Assist with marketing campaigns and social media strategies.</p>
                    <p className="internship-date">Posted on: October 4, 2024</p>
                    <a href="#">Apply Now</a>
                </li>
                <li>
                    <h3>UX/UI Design Intern</h3>
                    <p>Help design and improve user interfaces for our products.</p>
                    <p className="internship-date">Posted on: October 5, 2024</p>
                    <a href="#">Apply Now</a>
                </li>
            </ul>
        </div>
    );
};

export default Internships;
