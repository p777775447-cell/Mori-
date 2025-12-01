
import React, { useState, useEffect, useRef } from 'react';

interface Project {
  id: number;
  location: string;
  size: string;
  title: string;
  image: string;
}

const projects: Project[] = [
  {
    id: 1,
    location: " 【雲朵舒芙蕾】",
    size: "9坪",
    title: "主打軟糯療癒的「奶油風」，全室以米白奶咖色為主，最大的特色是將空間線條「圓弧化」。天花板的雲朵燈呼應著巨大的圓拱門造型，搭配圓潤飽滿的沙發，讓視覺上沒有尖銳稜角，營造出甜而不膩的溫柔包覆感。",
    image: "https://i.postimg.cc/1Xc767Rs/奶油風.jpg"
  },
  {
    id: 2,
    location: " 【日光木寓】 ．【木織慢活】",
    size: "10坪",
    title: "清爽耐看的「日式北歐風」，完美結合了日式溫潤木感與北歐簡約灰調。利用淺色木紋櫃體搭配格柵線條增加層次，並以灰色地磚與沙發平衡視覺，整體強調乾淨整齊的秩序感，是兼具明亮顏值與實用收納的風格。",
    image: "https://i.postimg.cc/fyjqXqWM/日式北歐風.jpg"
  },
  {
    id: 3,
    location: "【微光拱廊】",
    size: "15坪",
    title: "追求寧靜高級感的「侘寂風」，重點在於材質的原始肌理。牆面使用帶有手刷紋的特殊塗料（微水泥），結合發光拱形設計與枯枝花藝點綴，在統一的灰白大地色調中，展現出質樸、空靈且極具藝術張力的氛圍。",
    image: "https://i.postimg.cc/cCMkYk1S/70平侘寂风_柔中带刚_1_设计师_小鱼_来自小红书网页版.jpg"
  },
  {
    id: 4,
    location: "【焦糖午後】",
    size: "8坪",
    title: "自帶懷舊濾鏡的「美拉德風」，就是利用深淺不同的棕色系堆疊層次。選用深胡桃木傢俱搭配焦糖色沙發，再點綴暖黃燈光與綠植，讓空間充滿沈穩的重量感，呈現出如秋天般溫暖、濃郁又有故事性的電影氛圍。",
    image: "https://i.postimg.cc/4yb2t24G/美拉德风客厅布置_灵活又有生活气息_1_生活灵感捕手_来自小红书网页版.jpg"
  }
];

const Portfolio: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="portfolio" 
      ref={sectionRef} 
      className="py-8 md:py-12 lg:py-16 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Minimal Header - Centered for better alignment */}
        <div 
          className={`
            flex flex-col items-center text-center gap-3 md:gap-4 mb-8 md:mb-12 
            transition-all duration-1000 transform 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span 
            className={`
              text-mori-700 tracking-[0.4em] uppercase font-bold 
              text-[10px] md:text-[12px] lg:text-[14px]
            `}
          >
            Selected Works
          </span>
          <h2 className="font-serif text-mori-900 text-[30px] md:text-[48px] lg:text-[60px]">
            見證空間的蛻變
          </h2>
          <div className="w-16 md:w-24 h-[1px] bg-mori-400 mt-2 md:mt-4"></div>
        </div>

        {/* Staggered Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 lg:gap-x-12 gap-y-6 md:gap-y-12">
          {projects.map((project, index) => (
            <div 
              key={project.id} 
              className={`
                group cursor-pointer transition-all duration-1000 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'} 
                ${index % 2 !== 0 ? 'md:mt-20' : ''} 
                flex flex-col sm:flex-row md:flex-col sm:gap-6 md:gap-0
              `}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              {/* Image Container */}
              <div 
                className={`
                  relative overflow-hidden mb-3 w-full sm:w-1/2 md:w-full 
                  bg-mori-100 shadow-sm sm:mb-0 md:mb-6
                `}
              >
                 {/* Image */}
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  className={`
                    w-full block transform transition-transform duration-[1500ms] ease-out 
                    group-hover:scale-105 h-auto sm:absolute sm:inset-0 sm:h-full sm:object-cover md:h-auto md:static
                  `}
                />
                
                {/* Minimal Overlay - only shows text on hover */}
                <div 
                  className={`
                    absolute inset-0 bg-white/0 group-hover:bg-black/10 
                    transition-colors duration-500
                  `}
                ></div>
                
                {/* Custom Cursor / Pointer Hint */}
                <div 
                  className={`
                    absolute bottom-4 right-4 md:bottom-6 md:right-6 
                    w-10 h-10 md:w-12 md:h-12 rounded-full 
                    bg-white text-mori-900 flex items-center justify-center 
                    opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 
                    transition-all duration-500 shadow-lg z-10
                  `}
                >
                   <i 
                    className={`
                      fa-solid fa-arrow-right -rotate-45 group-hover:rotate-0 
                      transition-transform duration-500 text-[14px] md:text-[16px]
                    `}
                   ></i>
                </div>
              </div>

              {/* Text Info */}
              <div className="pr-2 md:pr-4 w-full sm:w-1/2 md:w-full sm:flex sm:flex-col sm:justify-center md:block">
                {/* Location & Size */}
                <div 
                  className={`
                    flex items-center text-mori-700 tracking-widest font-medium uppercase 
                    mb-2 md:mb-3 text-[18px] md:text-[16px] lg:text-[18px]
                  `}
                >
                  <span>{project.location.split('．')[0]}</span>
                  <span className="mx-2 text-mori-400">•</span>
                  <span>{project.size}</span>
                </div>

                {/* Title/Description */}
                <h3 
                  className={`
                    font-serif text-mori-900 group-hover:text-mori-600 
                    transition-colors duration-300 mb-0 md:mb-4 font-medium 
                    text-[14px] md:text-[14px] lg:text-[25px] leading-loose
                  `}
                >
                  {project.title.split('【')[1]?.replace('】', '') || project.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div 
          className={`
            text-center mt-8 md:mt-16 transition-all duration-1000 delay-500 transform 
            ${isVisible ? 'opacity-100' : 'opacity-0'}
          `}
        >
          <a 
            href="#contact" 
            className={`
              inline-block border border-mori-400 text-mori-800 tracking-widest uppercase 
              hover:bg-mori-900 hover:text-white hover:border-mori-900 
              transition-all duration-300 font-bold 
              px-8 py-3 md:px-10 md:py-4 text-[10px] md:text-[12px] lg:text-[14px]
            `}
          >
            View All Projects
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
