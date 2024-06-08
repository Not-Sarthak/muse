import Hero from "./_components/_hero/Hero";
import Analytics from "./_components/_sections/Analytics";
import Features from "./_components/_sections/Features";
import Clothes from "./_components/_sections/Clothes";
import End from "./_components/_sections/End";
import Footer from "./_components/_footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Analytics />
      <Features />
      <Clothes />
      <End />
      <Footer />
    </main>
  );
}
