"use client";
import { motion } from "framer-motion";
import { 
  UsersIcon, 
  AcademicCapIcon, 
  BookOpenIcon, 
  LightBulbIcon, 
  CurrencyDollarIcon, 
  GiftIcon, 
  SparklesIcon 
} from '@heroicons/react/24/outline';

export default function Special() {
  const features = [
    {
      title: "Private Group Classes",
      desc: "Max 10 students per session for personalized attention.",
      icon: <UsersIcon className="w-8 h-8" />,
      color: "text-blue-600",
      bgColor: "bg-blue-50"
    },
    {
      title: "Experienced Coaches",
     
      icon: <AcademicCapIcon className="w-8 h-8" />,
      color: "text-amber-600",
      bgColor: "bg-amber-50"
    },
    {
      title: "Systematic Modules",
   
      icon: <BookOpenIcon className="w-8 h-8" />,
      color: "text-green-600",
      bgColor: "bg-green-50"
    },
    {
      title: "Theory & Application",
   
      icon: <LightBulbIcon className="w-8 h-8" />,
      color: "text-purple-600",
      bgColor: "bg-purple-50"
    },
    {
      title: "Affordable Fees",
      
      icon: <CurrencyDollarIcon className="w-8 h-8" />,
      color: "text-rose-600",
      bgColor: "bg-rose-50"
    },
    {
      title: "Free Chess Set",
    
      icon: <GiftIcon className="w-8 h-8" />,
      color: "text-cyan-600",
      bgColor: "bg-cyan-50"
    }
  ];

  return (
    <section id="special" className="py-24 bg-slate-50 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight mb-4">
              Whats Special About <br/> 
              <span className="text-blue-600 underline decoration-blue-200">Chess For Kids?</span>
            </h2>
            
          </div>
          
    
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="bg-amber-400 text-black px-6 py-4 rounded-2xl shadow-lg shadow-yellow-200 flex items-center gap-3"
          >
            <SparklesIcon className="w-6 h-6 text-black-300" />
            <div>
              <p className="text-xs font-bold uppercase tracking-wider opacity-80">Limited Offer</p>
              <p className="font-black text-lg">1 Month Free Trial!</p>
            </div>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group"
            >
              <div className={`${item.bgColor} ${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-slate-800 mb-3 leading-tight">
                {item.title}
              </h3>
             
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}