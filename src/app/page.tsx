import Blog from "@/components/Blog";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import Projects from "@/components/Projects";
import BackgroundSpotlights from "@/components/Spotlight";

export default function Home() {
  const xlPadding: string = "px-56";
  return (
    <main
      className={`flex flex-col min-h-screen bg-darkred-background ${xlPadding}`}
    >
      <Header padding={xlPadding} />
      <BackgroundSpotlights />
      <div className="z-10">
        <Hero />
        <Projects />
        <Blog />
        <Placeholder />
      </div>
    </main>
  );
}
