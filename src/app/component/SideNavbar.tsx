// src/app/component/SideNavbar.tsx
import React, { useState, useEffect, useRef } from "react";

const Sidebar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const sidenavRef = useRef<HTMLDivElement>(null);

  const menuItems = [
    { name: "Home", link: "/" },
    { name: "Services", link: "#service-sec" },
    { name: "About me", link: "#about-sec" },
    { name: "Contact me", link: "#contact-container" },
    { name: "Portfolio", link: "/events" },
  ];

  const toggleMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsMenuOpen(prev => !prev);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isMenuOpen &&
        hamburgerRef.current && !hamburgerRef.current.contains(event.target as Node) &&
        sidenavRef.current && !sidenavRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    const handleScroll = () => {
      if (isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('scroll', handleScroll);

    return () => {
      document.removeEventListener('click', handleClickOutside);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isMenuOpen]);

  return (
    <div className="sidenav-container">
      <div 
        ref={hamburgerRef}
        className="hamburger"
        onClick={toggleMenu}
      >
        <div className={`hamburger-line ${isMenuOpen ? 'hamburger-open' : ''}`} />
      </div>

      <div 
        ref={sidenavRef}
        className={`sidenav ${isMenuOpen ? 'sidenav-open' : ''}`}
      >
        <ul className="menu-list">
          {menuItems.map((item, index) => (
            <li 
              key={index} 
              className="menu-item"
            >
              <a 
                href={item.link} 
                className="menu-link"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;