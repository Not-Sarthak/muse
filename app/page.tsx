import Hero from "./_components/_hero/Hero";
import Analytics from "./_components/_sections/Analytics";
import Features from "./_components/_sections/Features";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Analytics />
      <Features />
    </main>
  );
}
