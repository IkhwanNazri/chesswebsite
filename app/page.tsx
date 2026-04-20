import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import Benefits from '@/components/Benefits';
import Problem from '@/components/Problem';
import Pricing from '@/components/Pricing';
import Navbar from '@/components/Navbar';

export default function Home() {
  return (
    <main className="min-h-screen bg-white text-slate-900 font-sans selection:bg-blue-100 overflow-x-hidden">
      <Navbar/>
      <Hero />
      <Problem/>
      <Benefits /> 
      <Pricing/>
      <Footer/>
    </main>
  );
}