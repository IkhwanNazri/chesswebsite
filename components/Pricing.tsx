"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function PricingSection() {
  const fees = [
    { label: "REGISTRATION FEE", price: "RM30" },
    { label: "MEMBERSHIP FEE", price: "RM30" },
    { label: "BOOK", price: "RM10" },
    { label: "MONTHLY FEES", price: "RM70" },
  ];

  return (
    <section className="relative w-full min-h-150 md:min-h-175x flex-col items-center justify-center overflow-hidden mx-auto bg-slate-900">
      
      {/* 1. BACKGROUND IMAGE (Full-bleed, No Padding) */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/class10.webp" 
          alt="Chess Academy Background"
          fill
          className="object-cover opacity-40" // Overlay gelap supaya teks nampak
          priority
        />
      </div>

      {/* 2. CONTENT AREA */}
      <div className="relative z-10 w-full max-w-10xl px-6 flex flex-col items-start p-15">
        
        {/* HEADER */}
        <div className="mb-12 md:mb-16">
          <h2 className="text-7xl md:text-[120px] font-black text-white leading-none tracking-tighter items-start">
            PRICING
          </h2>
          <p className="text-white text-lg md:text-2xl font-bold italic tracking-[0.2em] mt-2 uppercase">
            CFK Academy Fee Structure
          </p>
        </div>

        {/* PRICE LIST (Kemas & Lebar) */}
        <div className="w-full max-w-4xl space-y-2 mb-24 text-left mx-auto">
          {fees.map((fee, i) => (
            <div key={i} className="flex justify-between items-end border-b border-white/20 pb-2">
              <span className="text-white font-bold text-xl md:text-3xl tracking-tight">
                {fee.label}
              </span>
              <span className="text-white font-black text-xl md:text-3xl">
                {fee.price}
              </span>
            </div>
          ))}
        </div>

        {/* 3. FLOATING WHITE BOX (Melekat kat bawah sikit) */}
        <motion.div 
                initial={{ y: 80, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ 
                type: "spring", 
                stiffness: 100, 
                damping: 15 
            }}
            /* PENTING: Guna bg-white solid kalau blur tak jadi, 
                tapi mainkan shadow gila-gila punya */
            className="relative z-50  bg-gray-900/70 backdrop-blur-sm rounded-[3rem] p-10 w-[92%] max-w-4xl  mt-5 mx-auto"
            >
            {/* Accent line kat atas card (vibe iPhone) */}
            

            <div className="mt-4 text-center md:text-left">
                <h4 className="text-white font-black text-2xl md:text-3xl mb-4 tracking-tight flex flex-col md:flex-row items-center gap-3">
                <span className="bg-yellow-300 text-black px-4 py-1 rounded-full text-xs uppercase tracking-widest">
                    Special Policy
                </span>
                One–Price Access to All Branches
                </h4>
                
                <p className="text-white text-lg md:text-xl font-medium leading-relaxed">
                At CFK Academy, we offer a <span className="text-white font-bold underline decoration-blue-200 underline-offset-4">One-Price Policy</span>. 
                Students can attend classes at any branch 
                <span className="text-white font-bold"> (Klebang, Buntong, Sri Iskandar) </span> 
                with just one monthly fee.
                </p>
            </div>
            </motion.div>
      </div>

    </section>
  );
}