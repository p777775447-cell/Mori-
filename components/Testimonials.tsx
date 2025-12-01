
import React, { useState, useEffect, useRef } from 'react';

const reviews = [
  {
    id: 1,
    name: "林小姐",
    role: "科技業 PM",
    content: "Alex 對於收納的規劃真的非常細心！原本很擔心 20 坪的小宅放不下我的露營裝備，但他巧妙利用畸零空間，現在家裡看起來非常清爽。",
    location: "台北市中山區"
  },
  {
    id: 2,
    name: "張先生夫婦",
    role: "退休教師",
    content: "老屋翻新最怕遇到管線問題，還好 MORI DESIGN 的團隊非常專業，每週都有進度回報，讓我們很放心。完成後的日式風格讓我們每天都像在度假。",
    location: "新北市新店區"
  },
  {
    id: 3,
    name: "陳設計總監",
    role: "平面設計師",
    content: "身為同行，我對細節特別挑剔。但這次的合作非常愉快，不僅動線規劃合理，材質的選用也很有質感，完全符合我對工作室的想像。",
    location: "台中市西區"
  }
];

const Testimonials: React.FC = () => {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-8 md:py-12 bg-white relative overflow-hidden">
      {/* Decorative Quote Mark - Animated */}
      <div 
        className={`
          absolute top-6 right-6 md:top-10 md:right-10 
          text-mori-200 font-serif pointer-events-none 
          transition-all duration-[2000ms] ease-out 
          text-[80px] md:text-[140px] lg:text-[200px] 
          ${isVisible ? 'opacity-60 translate-y-0' : 'opacity-0 -translate-y-10'}
        `}
      >
        ”
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div 
          className={`
            text-center mb-8 md:mb-10 
            transition-all duration-1000 transform 
            ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          `}
        >
          <span 
            className={`
              text-mori-600 tracking-[0.2em] uppercase font-bold 
              text-[10px] md:text-[12px] lg:text-[14px]
            `}
          >
            Testimonials
          </span>
          <h2 
            className={`
              font-serif text-mori-900 mt-3 md:mt-4 
              text-[30px] md:text-[36px] lg:text-[48px]
            `}
          >
            聽聽屋主怎麼說
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className={`
                bg-mori-50 p-6 md:p-8 rounded-sm hover:shadow-xl 
                transition-all duration-500 flex flex-col sm:flex-row md:flex-col justify-between 
                transform hover:-translate-y-2 border border-mori-100 
                ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
              `}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              {/* Content Section (Review) */}
              <div className="sm:w-[65%] md:w-full sm:pl-6 md:pl-0 flex flex-col justify-center order-2 sm:order-2 md:order-1">
                <div className="flex text-yellow-600 mb-3 md:mb-4 text-[12px] md:text-[14px]">
                  {[...Array(5)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star"></i>
                  ))}
                </div>
                <p 
                  className={`
                    text-mori-700 italic leading-relaxed mb-0 sm:mb-0 md:mb-6 
                    text-[14px] md:text-[16px] lg:text-[18px]
                  `}
                >
                  "{review.content}"
                </p>
              </div>

              {/* Author Section (Identity) */}
              <div 
                className={`
                  border-b border-mori-200 pb-3 mb-4 sm:mb-0 sm:pb-0 
                  sm:border-b-0 sm:border-r sm:pr-6 sm:w-[35%] 
                  md:w-full md:border-t md:border-r-0 md:pr-0 md:pt-4 
                  flex flex-col justify-center order-1 sm:order-1 md:order-2
                `}
              >
                <h4 
                  className={`
                    font-serif text-mori-900 font-medium 
                    text-[18px] md:text-[20px] lg:text-[24px] mb-1 sm:mb-2 md:mb-0
                  `}
                >
                  {review.name}
                </h4>
                <div 
                  className={`
                    text-mori-600 flex justify-between sm:flex-col md:flex-row mt-1 
                    font-medium text-[12px] md:text-[14px] lg:text-[16px] sm:gap-1 md:gap-0
                  `}
                >
                  <span>{review.role}</span>
                  <span>{review.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
