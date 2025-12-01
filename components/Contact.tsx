
import React, { useState, useEffect, useRef } from 'react';

const Contact: React.FC = () => {
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
    <footer 
      id="contact" 
      ref={sectionRef} 
      className="bg-mori-900 text-white py-8 md:py-12 lg:py-16 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
          
          {/* Contact Info */}
          <div 
            className={`
              lg:w-1/3 transition-all duration-1000 transform 
              ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}
            `}
          >
            <span 
              className={`
                text-mori-300 tracking-[0.3em] uppercase block mb-6 md:mb-8 font-bold
                text-[10px] md:text-[12px] lg:text-[14px]
              `}
            >
                Contact Us
            </span>
            <h2 
              className={`
                font-serif leading-tight mb-6 md:mb-8 text-[30px] md:text-[36px] 
                lg:text-[48px]
              `}
            >
              準備好開始您的<br/>改造計畫了嗎？
            </h2>
            <p 
              className={`
                text-mori-200 font-normal leading-relaxed mb-8 md:mb-12 
                text-[16px] md:text-[18px] lg:text-[20px]
              `}
            >
              請填寫右側表單，或透過以下方式聯繫我們。<br/>
              我們將在 24 小時內與您聯繫。
            </p>
            
            <div 
              className={`
                space-y-4 md:space-y-6 text-mori-200 font-light tracking-wide 
                text-[14px] md:text-[16px] lg:text-[18px]
              `}
            >
              <div className="flex items-center space-x-4 md:space-x-6">
                <span className="w-8 md:w-12 h-[1px] bg-mori-600"></span>
                <span>02-2345-6789</span>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                <span className="w-8 md:w-12 h-[1px] bg-mori-600"></span>
                <span>alex@mori-design.tw</span>
              </div>
              <div className="flex items-center space-x-4 md:space-x-6">
                <span className="w-8 md:w-12 h-[1px] bg-mori-600"></span>
                <span>Line: @MORIDESIGN</span>
              </div>
            </div>
          </div>

          {/* Minimalist Form with Floating Labels */}
          <div 
            className={`
              lg:w-2/3 transition-all duration-1000 delay-300 transform 
              ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}
            `}
          >
             <form className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 pt-4">
                
                {/* Name */}
                <div className="relative col-span-1 group">
                  <input 
                    type="text" 
                    id="name" 
                    className={`
                      floating-input block py-2.5 px-0 w-full 
                      text-white bg-transparent border-0 border-b border-mori-600 
                      appearance-none focus:outline-none focus:ring-0 focus:border-white peer 
                      text-[16px] md:text-[18px] lg:text-[20px]
                    `}
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="name" 
                    className={`
                      floating-label absolute text-mori-400 duration-300 
                      transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                      peer-focus:left-0 peer-focus:text-white 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75 peer-focus:-translate-y-6 
                      text-[14px] md:text-[16px] lg:text-[18px]
                    `}
                  >
                    姓名 / Name
                  </label>
                </div>

                {/* Phone */}
                <div className="relative col-span-1 group">
                  <input 
                    type="tel" 
                    id="phone" 
                    className={`
                      floating-input block py-2.5 px-0 w-full 
                      text-white bg-transparent border-0 border-b border-mori-600 
                      appearance-none focus:outline-none focus:ring-0 focus:border-white peer 
                      text-[16px] md:text-[18px] lg:text-[20px]
                    `} 
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="phone" 
                    className={`
                      floating-label absolute text-mori-400 duration-300 
                      transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                      peer-focus:left-0 peer-focus:text-white 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75 peer-focus:-translate-y-6 
                      text-[14px] md:text-[16px] lg:text-[18px]
                    `}
                  >
                    電話 / Phone
                  </label>
                </div>

                {/* Location */}
                <div className="relative col-span-1 group">
                  <input 
                    type="text" 
                    id="location" 
                    className={`
                      floating-input block py-2.5 px-0 w-full 
                      text-white bg-transparent border-0 border-b border-mori-600 
                      appearance-none focus:outline-none focus:ring-0 focus:border-white peer 
                      text-[16px] md:text-[18px] lg:text-[20px]
                    `} 
                    placeholder=" " 
                  />
                  <label 
                    htmlFor="location" 
                    className={`
                      floating-label absolute text-mori-400 duration-300 
                      transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                      peer-focus:left-0 peer-focus:text-white 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75 peer-focus:-translate-y-6 
                      text-[14px] md:text-[16px] lg:text-[18px]
                    `}
                  >
                    房屋所在地 / Location
                  </label>
                </div>

                {/* Budget - Styled Select */}
                <div className="relative col-span-1 group">
                   <select 
                     className={`
                       block py-2.5 px-0 w-full 
                       text-white bg-transparent border-0 border-b border-mori-600 
                       appearance-none focus:outline-none focus:ring-0 focus:border-white 
                       text-[16px] md:text-[18px] lg:text-[20px]
                     `}
                   >
                    <option className="text-black" value="" disabled selected>預算範圍 / Budget</option>
                    <option className="text-black">50 - 100 萬</option>
                    <option className="text-black">100 - 200 萬</option>
                    <option className="text-black">200 - 300 萬</option>
                    <option className="text-black">300 萬以上</option>
                  </select>
                </div>

                {/* Message */}
                <div className="relative col-span-1 md:col-span-2 group">
                  <textarea 
                    id="message" 
                    rows={2} 
                    className={`
                      floating-input block py-2.5 px-0 w-full 
                      text-white bg-transparent border-0 border-b border-mori-600 
                      appearance-none focus:outline-none focus:ring-0 focus:border-white peer 
                      resize-none text-[16px] md:text-[18px] lg:text-[20px]
                    `}
                    placeholder=" "
                  ></textarea>
                  <label 
                    htmlFor="message" 
                    className={`
                      floating-label absolute text-mori-400 duration-300 
                      transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] 
                      peer-focus:left-0 peer-focus:text-white 
                      peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 
                      peer-focus:scale-75 peer-focus:-translate-y-6 
                      text-[14px] md:text-[16px] lg:text-[18px]
                    `}
                  >
                    備註需求 / Message
                  </label>
                </div>

                {/* Button */}
                <div className="col-span-1 md:col-span-2 mt-4 md:mt-8">
                  <button 
                    type="button" 
                    className={`
                      w-full md:w-auto px-10 py-3 md:px-12 md:py-4 
                      border border-white/30 text-white uppercase tracking-widest 
                      hover:bg-white hover:text-mori-900 transition-all duration-500 
                      font-bold text-[12px] md:text-[14px] lg:text-[16px]
                    `}
                  >
                    送出諮詢
                  </button>
                </div>
             </form>
          </div>
        </div>

        <div 
          className={`
            border-t border-mori-700 mt-8 md:mt-12 pt-6 md:pt-8 
            flex flex-col md:flex-row justify-between items-center 
            text-mori-400 tracking-widest uppercase 
            text-[10px] md:text-[12px] lg:text-[14px]
          `}
        >
          <p>&copy; {new Date().getFullYear()} MORI DESIGN.</p>
          <p className="mt-2 md:mt-0">Design with Silence & Light.</p>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
