import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';
import Problem from '@/components/Problem';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/Navbar';
import Special from '@/components/Special';
import Location from '@/components/Location';
import Registration from '@/components/Registration';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Problem/>
      <Benefits /> 
      <Special/>
      <Pricing/>
      <Location/>
      <Registration/>
      <Footer/>
    </main>
  );
}