"use client";
import { motion } from "framer-motion";
import { MapPinIcon, ClockIcon, PhoneIcon } from '@heroicons/react/24/outline';

export default function Locations() {
  const branches = [
    {
      name: "CFK Klebang",
      address: "5B, Laluan Klebang 21, Klebang Perdana, 31200 Chemor, Perak",
      contact: "019-572 7276",
      schedule: "Saturday & Sunday: 9:00 AM - 12:00 PM",
      mapUrl: "https://maps.app.goo.gl/kyhybzQyepfV4bjg7",
      color: "border-blue-500"
    },
    {
      name: "CFK Buntong",
      address: "171, Persiaran Raja Mazwin Selatan, 30100 Ipoh",
      contact: "-",
      schedule: "Sat & Wed: 8:00 PM - 9:30 PM",
      mapUrl: "https://maps.app.goo.gl/zxzhqin2XbJVacnr8",
      color: "border-amber-500"
    },
    {
      name: "YOSH Seri Iskandar",
      address: "244, Persiaran SIBC 8, Bandar Seri Iskandar, 32600 Bota, Perak",
      contact: "-",
      schedule: "Thursday: 8:15 PM - 10:15 PM",
      mapUrl: "https://maps.app.goo.gl/9bDd3FFDjwx5QhB39",
      color: "border-purple-500"
    }
  ];

  return (
    <section className="py-24 bg-white px-6">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-black text-center mb-16 text-slate-900">Our Branches & Schedule</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {branches.map((loc, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className={`p-8 rounded-3xl border-t-8 ${loc.color} bg-slate-50 shadow-sm`}>
              <h3 className="text-2xl font-black mb-4 text-slate-800">{loc.name}</h3>
              <div className="space-y-4 text-slate-600 text-sm font-medium">
                <p className="flex gap-3"><MapPinIcon className="w-5 h-5 shrink-0 text-slate-400" /> {loc.address}</p>
                <p className="flex gap-3"><ClockIcon className="w-5 h-5 shrink-0 text-slate-400" /> {loc.schedule}</p>
                {loc.contact !== "-" && <p className="flex gap-3"><PhoneIcon className="w-5 h-5 shrink-0 text-slate-400" /> {loc.contact}</p>}
              </div>
              <a href={loc.mapUrl} target="_blank" className="mt-8 block text-center bg-white border border-slate-200 py-3 rounded-xl font-bold hover:bg-slate-100 transition-colors">Open Google Maps</a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}