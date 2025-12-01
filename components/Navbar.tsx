
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks = [
    { name: '關於我', id: 'about' },
    { name: '精選作品', id: 'portfolio' },
    { name: '服務流程', id: 'process' },
    { name: '常見問題', id: 'faq' },
  ];

  // Dynamic colors based on scroll state
  const navBg = isScrolled 
    ? 'bg-mori-50/80 backdrop-blur-md border-b border-mori-200/50' 
    : 'bg-transparent';
    
  const textColor = isScrolled ? 'text-mori-900' : 'text-white';
  const logoColor = isScrolled ? 'text-mori-900' : 'text-white';
  
  // Minimal button style
  const buttonClass = isScrolled 
    ? 'border border-mori-900 text-mori-900 hover:bg-mori-900 hover:text-white' 
    : 'border border-white/50 text-white hover:bg-white hover:text-mori-900';

  return (
    <nav 
      className={`
        fixed top-0 left-0 w-full z-50 
        transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] 
        ${navBg} 
        ${isScrolled ? 'py-3 md:py-4 lg:py-5' : 'py-5 md:py-6 lg:py-8'}
      `}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div 
          className={`
            font-serif font-bold tracking-[0.15em] cursor-pointer 
            transition-colors duration-500 
            ${logoColor} 
            text-[20px] md:text-[24px] lg:text-[30px] 
            relative z-50
          `}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        >
          MORI DESIGN
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 lg:gap-10">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`
                group relative tracking-widest font-light 
                transition-colors duration-300 
                ${textColor} opacity-90 hover:opacity-100 
                text-[12px] md:text-[14px] lg:text-[16px]
              `}
            >
              {link.name}
              {/* Minimal Dot Hover Effect */}
              <span 
                className={`
                  absolute -bottom-2 left-1/2 w-1 h-1 rounded-full 
                  transform -translate-x-1/2 scale-0 
                  transition-transform duration-300 group-hover:scale-100 
                  ${isScrolled ? 'bg-mori-900' : 'bg-white'}
                `}
              ></span>
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className={`
              rounded-sm tracking-widest transition-all duration-500 
              ${buttonClass} 
              px-4 py-1.5 md:px-5 md:py-2 lg:px-6 lg:py-2 
              text-[12px] md:text-[14px] lg:text-[16px]
            `}
          >
            立即預約
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden z-50">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`
              focus:outline-none transition-colors duration-300 
              ${isMobileMenuOpen ? 'text-mori-900' : textColor}
            `}
          >
            <i 
              className={`
                fa-solid 
                ${isMobileMenuOpen ? 'fa-times' : 'fa-bars'} 
                text-[20px]
              `}
            ></i>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`
          fixed inset-0 bg-mori-50 z-40 
          flex flex-col items-center overflow-y-auto 
          transform transition-transform duration-700 cubic-bezier(0.7,0,0.3,1) md:hidden 
          ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
      >
        <div className="min-h-full flex flex-col items-center justify-center py-20 space-y-6 md:space-y-8 w-full">
          {navLinks.map((link) => (
            <button
              key={link.name}
              onClick={() => scrollToSection(link.id)}
              className={`
                font-serif text-mori-800 
                transition-colors hover:text-mori-500 hover:italic 
                text-[24px]
              `}
            >
              {link.name}
            </button>
          ))}
          <button
            onClick={() => scrollToSection('contact')}
            className={`
              mt-8 border-b border-mori-900 pb-1 
              text-mori-900 tracking-widest text-[16px]
            `}
          >
            立即預約諮詢
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
