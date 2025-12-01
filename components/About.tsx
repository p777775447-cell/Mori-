
import React, { useState, useEffect, useRef } from 'react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="about" 
      ref={sectionRef} 
      className="py-6 md:py-12 lg:py-16 bg-mori-50 relative overflow-hidden"
    >
      
      {/* Background Watermark - Magazine Style */}
      <div className="absolute -top-6 md:-top-10 -left-12 md:-left-20 select-none pointer-events-none z-0">
        <h1 
          className={`
            font-serif leading-none text-mori-200/60 
            opacity-0 transition-opacity duration-[2000ms] 
            text-[18vw] md:text-[15vw] lg:text-[12vw] 
            ${isVisible ? 'opacity-100' : ''}
          `}
        >
          PHILOSOPHY
        </h1>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-stretch gap-6 md:gap-12 lg:gap-16">
          
          {/* Image Section - Desktop Only (Hidden on Mobile/Tablet) */}
          <div 
            className={`
              hidden lg:block lg:w-1/2 relative 
              ${isVisible ? 'is-visible' : ''}
            `}
          >
             <div className="reveal-container h-full w-full">
                <img 
                  src="https://i.postimg.cc/Bb2x0xFK/d8b9fa13-5821-4a3c-84ea-5e631f329c6d.jpg" 
                  alt="Alex - 空間敘事者" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover reveal-image"
                />
                <div className="reveal-curtain"></div>
             </div>
             {/* Decorative Box */}
             <div 
               className={`
                 absolute -bottom-4 -right-4 md:-bottom-6 md:-right-6 
                 border-r border-b border-mori-300 
                 transition-all duration-1000 delay-1000 
                 w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 
                 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}
               `}
             ></div>
          </div>

          {/* Text Section */}
          <div 
            className={`
              w-full lg:w-1/2 flex flex-col justify-center 
              transition-all duration-1000 ease-out delay-500 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
          >
            <div className="lg:pl-12">
              
              {/* Header Section - Mobile: Text Left, Image Right */}
              {/* Desktop: Standard Vertical Flow (Image hidden) */}
              <div className="flex flex-row justify-between items-stretch gap-5 lg:block mb-6 lg:mb-4">
                
                {/* Text Side */}
                <div className="flex-1 flex flex-col justify-center">
                  <span 
                    className={`
                      block text-mori-400 tracking-[0.3em] uppercase font-bold 
                      mb-2 md:mb-3 text-[10px] md:text-[12px] lg:text-[14px]
                    `}
                  >
                    About Designer
                  </span>
                  <h2 
                    className={`
                      font-serif text-mori-600 leading-relaxed 
                      text-[22px] md:text-[32px] lg:text-[48px]
                    `}
                  >
                    我是 Alex，<br />
                    <span className="italic text-mori-400 font-light block mt-2 md:mt-4">
                      您的空間敘事者
                    </span>
                  </h2>
                </div>

                {/* Image Side - Mobile/Tablet Only - Right Side */}
                <div className="w-[35%] md:w-[30%] lg:hidden relative flex-shrink-0">
                    <img 
                      src="https://i.postimg.cc/Bb2x0xFK/d8b9fa13-5821-4a3c-84ea-5e631f329c6d.jpg" 
                      alt="Alex" 
                      className="absolute inset-0 w-full h-full object-cover rounded-sm"
                    />
                </div>

              </div>
              
              {/* Paragraphs - Full Width */}
              <div className="space-y-3 md:space-y-4">
                <p 
                  className={`
                    text-mori-500 leading-relaxed font-normal text-justify 
                    text-[13px] md:text-[15px] lg:text-[18px] lg:leading-loose
                  `}
                >
                  我相信，家是居住者靈魂的延伸。擁有 8 年老屋翻新與預售屋客變經驗，我不只看重風格，更在乎您住進去 10 年後的實用性。
                </p>

                <p 
                  className={`
                    text-mori-500 leading-relaxed font-normal text-justify 
                    text-[13px] md:text-[15px] lg:text-[18px] lg:leading-loose
                  `}
                >
                  設計不單是視覺的堆砌，更是對生活細節的深刻洞察。我擅長運用「減法美學」，去除多餘的裝飾，引進自然光影與溫潤材質，讓空間回歸純粹。
                </p>
              </div>

              {/* Features */}
              <div 
                className={`
                  grid grid-cols-2 lg:grid-cols-2 gap-4 
                  pt-4 md:pt-6 lg:border-t lg:border-mori-200 mt-2 md:mt-4
                `}
              >
                <div>
                    <h4 className="font-serif mb-1 md:mb-2 text-mori-600 text-[15px] md:text-[18px] lg:text-[24px]">深度聆聽</h4>
                    <p className="text-mori-400 font-medium text-[11px] md:text-[13px] lg:text-[16px]">不套用公版，量身訂製動線。</p>
                </div>
                <div>
                    <h4 className="font-serif mb-1 md:mb-2 text-mori-600 text-[15px] md:text-[18px] lg:text-[24px]">嚴謹品質</h4>
                    <p className="text-mori-400 font-medium text-[11px] md:text-[13px] lg:text-[16px]">親自監工，落實圖面細節。</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
