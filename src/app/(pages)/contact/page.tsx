// app/contact/page.tsx
import React from 'react';

export default function Contact() {
    return (
        <div id="contact-container">
            <h1>Contact Me</h1>
            <p className="subtitle">Reach Out: Let&apos;s Turn Ideas into Action and Drive Results</p>
            
            <form id="contact-form">
                <input 
                    type="text" 
                    placeholder="Name" 
                    className="form-input" 
                />
                <input 
                    type="tel" 
                    placeholder="Phone Number" 
                    className="form-input" 
                />
                <input 
                    type="email" 
                    placeholder="Email" 
                    className="form-input" 
                />
                <div className='form-input'>
                <select className="form-input">
                    <option value="">Service Of Interest</option>
                    <option value="consulting">Consulting</option>
                    <option value="development">Development</option>
                    <option value="design">Design</option>
                </select>
                </div>
                <textarea 
                    placeholder="Project Details..." 
                    className="form-input"
                ></textarea>
                <button type="submit" className="submit-btn">
                    Send
                </button>
            </form>
        </div>
    );
}