"use client";
import { motion,  } from "framer-motion";

export default function Benefits()
{
    return(
  <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Is your child exhibiting any of these signs at home?</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">We provide a wide range of cleaning solutions to meet your specific needs.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Deep Cleaning", desc: "Thorough cleaning of every corner, including appliances and windows." },
              { title: "Recurring Service", desc: "Weekly or bi-weekly visits to keep your home consistently fresh." },
              { title: "Move In / Out", desc: "Setting the stage for new beginnings with a spotless transition." }
            ].map((service, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100"
              >
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                <a href="#" className="text-blue-600 font-bold text-sm inline-flex items-center gap-1 group">
                  Learn More
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-3 h-3 group-hover:translate-x-1 transition-transform">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    );
}