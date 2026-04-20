"use client";
import { motion } from "framer-motion";
import Image from "next/image"; 

export default function Problem() {
  const signs = [
    { 
      title: "Addicted to smartphones or games?", 
      
      bgColor: "bg-red-0",
    //   borderColor: "border-red-100",
      imageSrc: "/images/1.webp",
      alt: "Child using phone addicted"
    },
  
  ];

  return (
    <section id="problems" className="py-30 bg-slate-200 px-10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-4 text-slate-900 leading-tight">
            Is your child exhibiting any <br className="hidden md:block"/> of these signs at home?
          </h2>
          <p className="text-slate-500 font-medium italic">If so, chess might be the solution they need.</p>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {signs.map((sign, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.03, y: -5 }}
              className={` p-8  relative overflow-hidden flex flex-col items-start min-h-50 `}
            >
                <div className="flex-1 pr-20 z-10">
                <h3 className="text-lg md:text-xl font-black text-slate-800 leading-tight">
                  {sign.title}
                </h3>
              </div>
          
              
              <div className="absolute -top-8 -right-15 w-60 h-60 z-0 ">
                <Image 
                  src={sign.imageSrc} 
                  alt={sign.alt}
                  fill
                  className="object-contain "
                  priority={i === 0} 
                />
              </div>


             
              
           
              {/* <span className="absolute -bottom-4 -right-2 text-8xl font-black opacity-5 text-slate-900 pointer-events-none">
                0{i + 1}
              </span> */}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}