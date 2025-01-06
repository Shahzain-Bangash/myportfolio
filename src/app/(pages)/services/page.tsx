// Services.js
import React from "react";

const Services = () => {
  return (
    <div className="services-container" id="service-sec">
      <h1 className="services-title">
        Services
        <div className="title-underline"></div>
      </h1>
      
      <div className="services-grid">
        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>Frontend Development</h2>
          <p>
            Create responsive and interactive websites using HTML, CSS, and
            JavaScript.Ensure smooth user experiences across various devices
            with optimized frontend designs.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>Responsive Web Design</h2>
          <p>
            Design mobile-first websites that adapt 
            to all screen sizes.Deliver a seamless 
            experience for desktop, tablet, 
            and mobile users.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>Next.js Development</h2>
          <p>
            Build fast and SEO-friendly websites using Next.js.Enhance
            performance with server-side rendering (SSR)
            and static site generation (SSG).
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>UI/UX Design</h2>
          <p>
            Focus on creating intuitive and user-friendly designs.Provide a 
            delightful user experience through thoughtful UI/UX 
            design principles.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>Landing Page Development</h2>
          <p>
            Design high-converting landing pages that effectively capture leads.
            Implement engaging call-to-actions and optimized layouts.
          </p>
        </div>

        <div className="service-card">
          <i className="fas fa-users"></i>
          <h2>SEO Optimization</h2>
          <p>
            Improve website ranking on search engines using on-page SEO
            techniques.Optimize content, metadata, and performance
            for better visibility.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;