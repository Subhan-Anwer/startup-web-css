import Hero from "./components/hero";
import PartnersSection from "./components/Partnersection";
import ContentSection1 from "./components/ContentSection1";
import ContentSection2 from "./components/ContentSection2";
import TeamSection from "./components/TeamSection";

export default function Home() {
  return (
    <>
      <Hero />
      <PartnersSection />
      <ContentSection1 />
      <ContentSection2 />
      <TeamSection />
    </>
  );
}
