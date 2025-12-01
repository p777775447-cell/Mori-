
import React, { useEffect, useState } from 'react';

const Hero: React.FC = () => {
  const [loaded, setLoaded] = useState(false);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => setLoaded(true), 100);
    
    const handleScroll = () => {
      setOffset(window.pageYOffset);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      clearTimeout(timer);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <section 
      id="hero" 
      className={`
        relative min-h-screen w-full flex items-center justify-center 
        overflow-hidden bg-mori-900 
        pt-32 pb-20 md:pt-52 md:pb-32
      `}
    >
      
      {/* Immersive Cinematic Animation */}
      <style>{`
        @keyframes cinematic {
          0% { transform: scale(1.1) translate(0, 0); }
          100% { transform: scale(1.25) translate(-2%, -1%); }
        }
        .animate-cinematic {
          animation: cinematic 25s ease-in-out infinite alternate;
        }
      `}</style>

      {/* Background with Parallax */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ transform: `translateY(${offset * 0.5}px)` }} // Background moves slower than foreground
      >
        <img 
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop" 
          alt="Luxury Interior" 
          className={`
            w-full h-full object-cover 
            transition-opacity duration-[2000ms] 
            ${loaded ? 'animate-cinematic opacity-70' : 'opacity-0'}
          `}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      </div>

      {/* Content Layer with Reverse Parallax for depth */}
      <div 
        className="relative z-10 text-center px-6 max-w-6xl mx-auto"
        style={{ transform: `translateY(${offset * -0.2}px)` }}
      >
        
        <div 
          className={`
            transition-all duration-1000 ease-out delay-300 transform 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <span 
            className={`
              inline-block border-t border-white/30 pt-4 
              text-mori-100 tracking-[0.4em] uppercase font-light 
              mb-4 sm:mb-6 md:mb-8 text-[12px] md:text-[14px] lg:text-[16px]
            `}
          >
            Minimalist Living Space
          </span>
        </div>

        <div 
          className={`
            transition-all duration-1000 ease-out delay-500 transform 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <h1 
            className={`
              font-serif text-white leading-tight tracking-wide 
              text-[28px] sm:text-[36px] md:text-[50px] lg:text-[70px]
            `}
          >
            <span className="block mb-2 md:mb-4 font-light">不只是設計</span>
            <span className="block italic font-medium mt-2 md:mt-4 lg:mt-6">更是為您預留生活的餘裕</span>
          </h1>
        </div>

        <div 
          className={`
            transition-all duration-1000 ease-out delay-700 transform 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <p 
            className={`
              mt-6 sm:mt-8 md:mt-10 text-mori-100 font-light tracking-wider 
              max-w-2xl mx-auto leading-loose text-center 
              text-[14px] sm:text-[15px] md:text-[18px] lg:text-[20px]
            `}
          >
            專注於光影與動線的空間魔術師，<br />
            將您的日常，化為最令人眷戀的風景。
          </p>
        </div>

        <div 
          className={`
            mt-8 sm:mt-12 md:mt-16 
            flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8 
            transition-all duration-1000 ease-out delay-1000 transform 
            ${loaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
        >
          <button 
            onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })}
            className={`
              group relative bg-white text-mori-900 overflow-hidden 
              transition-all duration-300 tracking-widest uppercase 
              px-8 py-3 md:px-10 md:py-4 
              text-[12px] md:text-[14px] lg:text-[16px] 
              min-w-[160px] md:min-w-[200px]
            `}
          >
            <span className="relative z-10 group-hover:text-white transition-colors duration-500">查看精選案例</span>
            <div 
              className={`
                absolute inset-0 bg-mori-900 
                transform scale-x-0 group-hover:scale-x-100 
                transition-transform origin-left duration-500 ease-out
              `}
            ></div>
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div 
        className={`
          absolute bottom-6 sm:bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 
          flex flex-col items-center gap-2 
          transition-opacity duration-1000 delay-[1500ms] 
          ${loaded ? 'opacity-70' : 'opacity-0'}
        `}
      >
        <span 
          className={`
            text-white tracking-[0.3em] uppercase rotate-90 origin-left 
            translate-x-3 mb-6 md:mb-8 text-[10px] md:text-[12px]
          `}
        >
          Scroll
        </span>
        <div className="w-[1px] bg-white/50 relative overflow-hidden h-10 md:h-12">
            <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[slideInDown_1.5s_infinite]"></div>
        </div>
      </div>
      <style>{`
        @keyframes slideInDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
