import Blog from "@/components/Blog";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import BackgroundSpotlights from "@/components/Spotlight";

export default function Home() {
  return (
    <>
      <BackgroundSpotlights />
      <div className="z-10">
        <Hero />
        <Projects />
        <Blog />
      </div>
    </>
  );
}
