"use client";

import { motion, Variants } from "framer-motion";
import Image from "next/image";

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function Hero() {
  return (
    
      <section className="relative px-6 py-16 md:py-28 max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold mb-6">
              <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              Calling All Parents !!
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight mb-8">
              Open Registeration <br />
              <span className="text-blue-600"> For Chess Classes.</span>
              <br />
              <span className="text-rose-500 font-black">2026</span>
            </motion.h1>
            {/* <motion.p variants={fadeInUp} className="text-slate-500 text-lg md:text-xl max-w-lg mb-10 leading-relaxed">
              Premium cleaning services tailored to your lifestyle. We handle the dirty work so you can focus on what matters.
            </motion.p> */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4">
              <button className="bg-yellow-500 text-black px-8 py-4 rounded-xl font-bold text-lg hover:bg-yellow-600 transition-all shadow-xl shadow-slate-200">
                1-Month Free Trial
              </button>
              {/* <button className="bg-white text-slate-600 border border-slate-200 px-8 py-4 rounded-xl font-bold text-lg hover:bg-slate-50 transition-all">
                Our Services
              </button> */}
            </motion.div>
          </motion.div>
        </div>

        <div className="w-full md:w-1/2 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="aspect-square relative rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/images/hero.webp" 
              alt="Clean Living Room" 
              fill 
              priority
              className="object-cover priority"
            />
          </motion.div>
          {/* Floating Card */}
          <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -bottom-6 -left-6 md:-left-12 z-10 bg-white p-6 rounded-2xl shadow-xl border border-slate-50 flex items-center gap-4 max-w-xs"
        >
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center text-blue-600">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-sm font-bold">100% Satisfaction</p>
              <p className="text-xs text-slate-400">Guaranteed quality results</p>
            </div>
          </motion.div>
        </div>
      </section>

      

    
      

   
  );
}
