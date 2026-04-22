"use client";
import { motion,  } from "framer-motion";
export default function Navbar()
{
    return(
        <nav className="sticky top-0 z-50 flex justify-between items-center px-6 md:px-12 mx-auto text-center py-5 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <motion.div 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }}
          className="text-2xl font-bold tracking-tight text-blue-600 mx-auto text-center"
        >
          Chess<span className="text-slate-900 mx-auto text-center md:item-start">ForKids</span>
        </motion.div>
        
        {/* <div className="hidden md:flex gap-8 text-sm font-medium text-slate-500 ">
          <a href="#" className="hover:text-blue-600 transition-colors">Services</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-blue-600 transition-colors">Reviews</a>
        </div> */}

        {/* <motion.button 
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="bg-blue-600 text-white px-5 py-2.5 rounded-lg text-sm font-semibold shadow-md shadow-blue-100"
        >
          Register Now
        </motion.button> */}
      </nav>
    );
}