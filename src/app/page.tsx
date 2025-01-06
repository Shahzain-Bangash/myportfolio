"use client";
import React, { useEffect } from "react";
// import Header from "./components/Header";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Link from "next/link";
import Typewriter from "typewriter-effect";
import Header from "./component/Header";
import Services from "./(pages)/services/page";
import AboutPage from "./(pages)/about/page";
import Contact from "./(pages)/contact/page";
import Footer from "./component/Footer";



export default function Home() {
  useEffect(() => {
    const handleResize = () => {
      // Handle resize logic here
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize); // Clean up event listener
    };
  }, []);
  
  return (
    <div className="home-sec" id="home-sec">
      <div className="container custom1">
      <Header />
          

        {/* Short Personal Info */}
        <main className="mainContent">
          <div className="main-div">
          <section className="sectionOne">
            <div className="innerSec">
              <h3 className="text-gray-400 sectionOne-head1">Hi, I am</h3>
              <h2 className="text-gray-300 sectionOne-head2">Shahzain Ali</h2>
            </div>
            <div className="typewriterText">
              <Typewriter 
                options={{
                  strings: [
                    '<span class="bg-gradient-to-r from-[#984300] to-[#FD6F00] bg-clip-text text-transparent">Front-End Developer</span>',
                    '<span class="bg-gradient-to-r from-[#984300] to-[#CA5900] bg-clip-text text-transparent">UI/UX Designer</span>',
                  ],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                }}
              />
            </div>

            {/* Official websites links */}
            <ul className="socialLinks">
              <li><Link href=""><span className="fab fa-linkedin"></span></Link></li>
              <li><Link href=""><span className="fab fa-github"></span></Link></li>
              <li><Link href=""><span className="fab fa-facebook"></span></Link></li>
              <li><Link href=""><span className="fab fa-instagram"></span></Link></li>
            </ul>

            {/* Buttons */}
            <div className="buttonsSection">
              <button className="hireMe">Hire Me</button>
              <button className="downloadCV">Download CV</button>
            </div>

            {/* Stats Section */}
            <section className="statsSection">
              <div className="statItem">
                <p className="statNumber">2+</p>
                <h2 className="statLabel">Experience</h2>
              </div>
              <div className="statItem">
                <p className="statNumber">20+</p>
                <h2 className="statLabel">Project Done</h2>
              </div>
              <div className="statItem">
                <p className="statNumber">30+</p>
                <h2 className="statLabel">Happy Clients</h2>
              </div>
            </section>
          </section>

          {/* Screen Section */}
          <section className="screenSection">
            <div className="screenCard">
              <div className="screenText">
                Innovative Solutions for Modern <br /> Challenges. Transforming <br /> Ideas  into Digital <br /> Excellence
              </div>
            </div>
          </section>
          </div>
        </main>
      </div>
      <Services/>
      <AboutPage/>
      <Contact/>
      <Footer/>
    </div>
  );
}
