
import React, { useState, useEffect, useRef } from 'react';

const steps = [
  { 
    num: "01", 
    title: "初步諮詢", 
    desc: "了解需求與預算，確認設計風格與方向。" 
  },
  { 
    num: "02", 
    title: "現場丈量", 
    desc: "精準掌握空間現況，紀錄梁柱與管線位置。" 
  },
  { 
    num: "03", 
    title: "平面提案", 
    desc: "規劃最佳動線與格局，討論並定案配置。" 
  },
  { 
    num: "04", 
    title: "工程施作", 
    desc: "專業團隊進場，嚴格監工並定期回報進度。" 
  },
  { 
    num: "05", 
    title: "完工驗收", 
    desc: "細節檢核與驗收，提供完善的售後保固。" 
  }
];

const Process: React.FC = () => {
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
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="process" 
      ref={sectionRef} 
      className="py-8 md:py-12 lg:py-16 bg-mori-50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Header Section: Centered */}
        <div 
          className={`
            flex flex-col items-center text-center mb-10 md:mb-12 lg:mb-16
          `}
        >
            <div 
              className={`
                transition-all duration-1000 transform 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
                <span 
                  className={`
                    text-mori-700 tracking-[0.3em] uppercase block mb-3 md:mb-4 
                    font-bold text-[10px] md:text-[12px] lg:text-[14px]
                  `}
                >
                    Workflow
                </span>
                <h2 
                  className={`
                    font-serif text-mori-900 
                    text-[30px] md:text-[32px] lg:text-[48px]
                  `}
                >
                    簡單 5 步驟 打造夢想家
                </h2>
            </div>
            
            <p 
              className={`
                text-mori-800 max-w-2xl mt-6 font-normal leading-relaxed mx-auto text-center
                transition-all duration-1000 delay-200 transform 
                text-[14px] md:text-[16px] lg:text-[18px] 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
              `}
            >
                標準化的服務流程，透明的報價體系。<br />
                讓繁雜的裝修過程，變成一場期待未來的旅程。
            </p>
        </div>

        <div className="relative mt-8 md:mt-12">
          {/* Base Line - Centered on Mobile, Top on Desktop */}
          <div 
            className={`
              absolute top-0 
              left-1/2 -translate-x-1/2 w-[1px] h-full
              md:left-0 md:translate-x-0 md:top-[15px] md:w-full md:h-[1px] 
              bg-mori-300 -z-10
            `}
          ></div>
          
          {/* Progress Line - Centered on Mobile, Top on Desktop */}
          <div 
             className={`
               absolute top-0 
               left-1/2 -translate-x-1/2 w-[1px]
               md:left-0 md:translate-x-0 md:top-[15px] md:h-[1px] 
               bg-mori-800 -z-10 
               transition-all duration-[2500ms] ease-in-out 
               ${isVisible ? 'h-full md:w-full' : 'h-0 md:w-0'}
             `}
          ></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-12 md:gap-4 lg:gap-8">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className={`
                  relative pt-12 md:pt-16 px-2
                  flex flex-col items-center text-center
                  transition-all duration-700 transform 
                  ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
                `}
                style={{ transitionDelay: `${index * 200 + 500}ms` }}
              >
                {/* Dot - Centered */}
                <div 
                  className={`
                    absolute top-0 left-1/2 -translate-x-1/2
                    md:top-[15px] md:-translate-y-1/2
                    w-[31px] h-[31px] md:w-[41px] md:h-[41px] 
                    bg-mori-50 flex items-center justify-center 
                    border border-mori-200 rounded-full md:border-none
                    z-10
                  `}
                >
                    <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-mori-900"></div>
                </div>

                <div className="group">
                    {/* Number */}
                    <span 
                      className={`
                        block text-mori-500 font-serif font-bold mb-1 md:mb-2 
                        group-hover:text-mori-700 transition-colors duration-300 
                        text-[48px] md:text-[60px] lg:text-[72px]
                      `}
                    >
                        {step.num}
                    </span>
                    <h3 
                      className={`
                        font-serif text-mori-900 mb-2 font-medium 
                        text-[18px] md:text-[20px] lg:text-[24px]
                      `}
                    >
                        {step.title}
                    </h3>
                    <p 
                      className={`
                        text-mori-700 font-normal leading-relaxed 
                        text-[14px] md:text-[16px] lg:text-[18px]
                      `}
                    >
                        {step.desc}
                    </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
