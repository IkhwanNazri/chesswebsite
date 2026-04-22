"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Benefits() {
  return (
    <section id="benefits" className="bg-white py-25 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-black tracking-widest mb-4 inline-block rounded-b-lg border-b-4 border-blue-500 p-2 text-slate-900">
            Benefits of Chess For Kids
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto italic mt-4">
            If so, bring them to Chess For Kids.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
          {[
            { 
              title: "Better focus and attention", 
              imgSrc: "/images/brainstorm.webp",
            
            },
            { 
              title: "Enhanced problem-solving skills", 
              imgSrc: "/images/problem-solving-skills.webp",
              
            },
            { 
              title: "Strategic Thinking", 
              imgSrc: "/images/idea-bulb.webp",
          
            },
            { 
              title: "Improved cognitive abilities", 
              imgSrc: "/images/cognitive.webp",
         
            },
            { 
              title: "Better decision-making skills", 
              imgSrc: "/images/problem-solving-skills.webp",
           
            },
            { 
              title: "Increased creativity", 
              imgSrc: "/images/brain.webp",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-500" 
            },
            { 
              title: "Improved planning and organization skills", 
              imgSrc: "/images/organizational.webp",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-500" 
            },
            { 
              title: "Boosted self-confidence and self-esteem", 
              imgSrc: "/images/self-confident.webp",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-500" 
            },
            { 
              title: "Enhanced patience and perseverance", 
              imgSrc: "/images/challenges.webp",
              bgColor: "bg-purple-50",
              borderColor: "border-purple-500" 
            }
          ].map((service, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -5 }}
 
              className={`relative  rounded-3xl overflow-hidden min-h-50 flex flex-col items-center justify-center  p-6`}
            >
              <div className="relative z-10 text-center flex flex-col items-center">
                <div className="relative mb-4 w-16 h-16 opacity-90 flex items-center justify-center">
                  <Image 
                    src={service.imgSrc} 
                    alt={service.title}
                    fill
                    className="object-contain"
                    priority={i === 0} 
                  />
                </div>
                <h3 className="text-lg md:text-xl font-bold text-slate-900 leading-tight">
                  {service.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}