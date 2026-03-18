import { Hero } from '@/components/Hero';
import { BentoGrid } from '@/components/BentoGrid';
import { AboutMe } from '@/components/AboutMe';
import { Skills } from '@/components/Skills';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <BentoGrid />
      <AboutMe />
      <Skills />
    </main>
  );
}
