import Hero from './components/Hero';
import CodeShowcase from './components/CodeShowcase';
import Features from './components/Features';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-100 selection:bg-cyan-400/30 selection:text-cyan-200">
      <Hero />
      <CodeShowcase />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
