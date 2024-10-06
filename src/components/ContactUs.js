import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setIsSubmitted(true);
        setTimeout(() => {
            setIsSubmitted(false);
        }, 5000);
    };

    return (
        <div className="contact-us">
            <h2>Contact Us</h2>
            <p>If you have any questions, feel free to reach out to us!</p>
            {isSubmitted && <div className="notification">Message sent successfully!</div>}
            <form onSubmit={handleSubmit}>
                <div>
                    <input type="text" placeholder="Your Name" required />
                </div>
                <div>
                    <input type="email" placeholder="Your Email" required />
                </div>
                <div>
                    <textarea rows="5" placeholder="Your Message" required></textarea>
                </div>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
};

export default ContactUs;
