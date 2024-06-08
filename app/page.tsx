import Hero from "./_components/_hero/Hero";
import Analytics from "./_components/_sections/Analytics";
import Card from "./_components/_cards/Card";
import { cardData } from "../app/_utils/cardData";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* <Hero /> */}
      {/* <Analytics /> */}
      <div className="flex gap-8">
      {cardData.map((card) => (
        <Card
          key={card.id}
          firstWord={card.firstWord}
          secondWord={card.secondWord}
          description={card.description}
          color={card.color}
          bgColor={card.bgColor}
          image={card.image}
        />
      ))}
      </div>
    </main>
  );
}
