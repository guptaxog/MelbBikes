import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { WhyMelbBikes } from './components/WhyMelbBikes';
import { HowItWorks } from './components/HowItWorks';
import { GradingSystem } from './components/GradingSystem';
import { CtaFooter } from './components/CtaFooter';

function App() {
  return (
    <div className="min-h-screen bg-base-950">
      <Header />
      <main>
        <Hero />
        <WhyMelbBikes />
        <HowItWorks />
        <GradingSystem />
      </main>
      <CtaFooter />
    </div>
  );
}

export default App;
