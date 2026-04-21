"use client";
import { motion } from "framer-motion";
import {  ArrowRightIcon } from '@heroicons/react/24/outline';
import Image from "next/image";

export default function Registration() {
  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-5xl mx-auto">
        {/* CONTAINER UTAMA - Main dengan border tebal (bukan shadow lembut AI) */}
        <div className="relative border-4 border-slate-900 rounded-4xl p-8 md:p-16 bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] overflow-hidden">
          
          {/* Accent Decorative Element - Nampak macam tab folder */}
          {/* <div className="absolute top-10 left-12 -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg font-black text-sm uppercase tracking-[0.2em]">
            Join the Academy
          </div> */}

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* KIRI: Text & Urgency */}
            <div className="space-y-6">
              <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-none tracking-tight">
                READY TO <br />
                <span className="text-blue-600">START?</span>
              </h2>
              <p className="text-slate-600 text-lg font-bold leading-relaxed max-w-sm">
                Trial sessions will close once we reach full capacity. Dont let your child miss the move.
              </p>
              
              {/* Badge Amaran / Urgency */}
              <div className="inline-flex items-center gap-2 bg-amber-100 border-2 border-amber-400 p-3 rounded-xl">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-amber-500"></span>
                </span>
                <span className="text-amber-900 text-xs font-black uppercase tracking-wider">
                  Limited Slots: 5 per session
                </span>
              </div>
            </div>

            {/* KANAN: Payment & CTA (The "Card within Card" look) */}
            <div className="space-y-6">
              <div className="bg-slate-50 border-2 border-slate-900 rounded-2xl p-6 shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]">
                <p className="text-[10px] font-black text-slate-400 uppercase tracking-[0.3em] mb-4">
                  Official Bank Account
                </p>
                
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative w-12 h-12 bg-yellow-400 rounded-lg border-2 border-slate-900 flex items-center justify-center font-black text-xl">
                     <Image 
                                  src="/images/maybank.png" 
                                  alt="Clean Living Room" 
                                  fill 
                                  priority
                                  className="object-contain"
                                />
                  </div>
                  <div>
                    <p className="text-sm font-black text-slate-900">MAYBANK BERHAD</p>
                    <p className="text-2xl font-mono font-black tracking-tighter text-slate-900">1580 1510 8369</p>
                  </div>
                </div>
                
                <p className="text-xs font-bold text-slate-500 italic">
                  Acc Holder: KHATIB BIN MD YAN
                </p>
              </div>

              {/* Link Registration Button */}
              <motion.a 
                href="https://forms.gle/cySXhSezJeB1M3JH9"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-between w-full bg-blue-600 border-2 border-slate-900 p-6 rounded-2xl shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:shadow-none hover:translate-x-0.75 hover:translate-y-0.75 transition-all"
              >
                <span className="text-white text-2xl font-black uppercase tracking-tight">
                  Register Now
                </span>
                <ArrowRightIcon className="w-8 h-8 text-white group-hover:translate-x-2 transition-transform" />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Footer simple */}
        <div className="mt-12 text-center">
          <p className="text-slate-400 text-sm font-bold tracking-widest uppercase">
            Chess For Kids • 2026 Edition
          </p>
        </div>
      </div>
    </section>
  );
}