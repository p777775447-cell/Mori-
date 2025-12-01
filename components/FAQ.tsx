
import React, { useState } from 'react';

const questions = [
  {
    q: "預算有限可以做設計嗎？",
    a: "我們提供彈性的方案，會依照您的預算建議最核心的施作項目。我們會協助您排列優先順序，例如優先處理基礎工程（水電、防水），再透過軟裝搭配來營造風格，讓您在預算內獲得最大的效益。"
  },
  {
    q: "設計加施工通常需要多久？",
    a: "視屋況而定，一般老屋翻新約 3-4 個月（包含拆除、基礎工程更新），新成屋約 1.5-2 個月。設計階段通常需要 2-4 週來回討論與確認圖面。"
  },
  {
    q: "監工包含在費用裡嗎？",
    a: "是的，若由我們統包工程，將會有專職的監工人員負責案場進度與品質控管，費用已包含在工程管理費中，讓您無須天天跑工地也能掌握狀況。"
  },
  {
    q: "有提供保固嗎？",
    a: "我們提供工程一年保固，防水工程則視合約內容提供更長年限的保固。完工後若有任何非人為損壞的問題，我們都會儘速為您處理。"
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-8 md:py-12 lg:py-16 bg-white">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-8 md:mb-10 lg:mb-12">
          <span 
            className={`
              text-mori-700 tracking-[0.3em] uppercase font-bold 
              text-[10px] md:text-[12px] lg:text-[14px]
            `}
          >
            Common Questions
          </span>
          <h2 
            className={`
              font-serif text-mori-900 mt-4 
              text-[30px] md:text-[36px] lg:text-[48px]
            `}
          >
            常見問題
          </h2>
        </div>

        <div className="border-t border-mori-300">
          {questions.map((item, index) => (
            <div key={index} className="border-b border-mori-300 group">
              <button
                className={`
                  w-full py-5 md:py-6 text-left flex justify-between items-center 
                  focus:outline-none
                `}
                onClick={() => toggleFAQ(index)}
              >
                <div className="flex items-center">
                    {/* Darkened Number */}
                    <span 
                      className={`
                        font-serif text-mori-600 mr-4 md:mr-8 
                        group-hover:text-mori-900 transition-colors font-medium 
                        text-[18px] md:text-[20px] lg:text-[24px]
                      `}
                    >
                      0{index + 1}
                    </span>
                    <span 
                      className={`
                        font-serif text-mori-900 tracking-wide font-medium 
                        text-[16px] md:text-[18px] lg:text-[20px]
                      `}
                    >
                    {item.q}
                    </span>
                </div>
                
                {/* Minimal Animated Icon */}
                <div className="relative w-3 h-3 md:w-4 md:h-4 shrink-0 ml-4">
                    <div className="absolute top-1/2 left-0 w-full h-[1px] bg-mori-900"></div>
                    <div 
                      className={`
                        absolute top-0 left-1/2 h-full w-[1px] bg-mori-900 
                        transition-transform duration-300 
                        ${openIndex === index ? 'rotate-90 scale-0' : 'rotate-0 scale-100'}
                      `}
                    ></div>
                </div>
              </button>
              <div
                className={`
                  overflow-hidden transition-all duration-500 ease-in-out 
                  ${openIndex === index ? 'max-h-48 opacity-100 pb-6 md:pb-8' : 'max-h-0 opacity-0 pb-0'}
                `}
              >
                 <div 
                  className={`
                    pl-10 md:pl-16 text-mori-800 font-normal leading-loose max-w-2xl 
                    text-[14px] md:text-[16px] lg:text-[18px]
                  `}
                 >
                    {item.a}
                 </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
