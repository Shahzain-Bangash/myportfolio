// components/Footer.tsx
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer id="footer-sec">
            <div>
                <nav className="footer-nav">
                    <Link href="" className="logo-link">
                        <li className="logo">LOgo</li>
                    </Link>
                    <ul className="nav-links">
                        <Link href="#home-sec">
                            <li>Home</li>
                        </Link>
                        <Link href="#service-sec">
                            <li>Services</li>
                        </Link>
                        <Link href="#about-sec">
                            <li>About me</li>
                        </Link>
                        <Link href="#contact-sec">
                            <li>Contact me</li>
                        </Link>
                        <Link href="#">
                            <li>Porfolio</li>
                        </Link>
                    </ul>
                </nav>
                <div className="social-container">
                    <ul className="social-links">
                        <li>
                            <Link href=""><span className="fab fa-linkedin"></span></Link>
                        </li>
                        <li>
                            <Link href=""><span className="fab fa-github"></span></Link>
                        </li>
                        <li>
                            <Link href=""><span className="fab fa-facebook"></span></Link>
                        </li>
                        <li>
                            <Link href=""><span className="fab fa-instagram"></span></Link>
                        </li>
                    </ul>
                </div>
                <div className="contact-info">
                    <div>
                        <span className="fa-solid fa-envelope"></span>
                        <span>alishahzain604@gmail.com</span>
                    </div>
                    <div>
                        <span className="fa-solid fa-phone"></span>
                        <span>+92 3363005909</span>
                    </div>
                </div>
                <div className="footer-credits">
                    <p>Designed by @shahzain.ali <span>Front-End-Developer</span></p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;