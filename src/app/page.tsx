import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Placeholder from "@/components/Placeholder";
import Projects from "@/components/Projects";
import BackgroundSpotlights from "@/components/Spotlight";

export default function Home() {
  const padding: string = "xl:px-56 lg:px-32 px-10";
  return (
    <>
      <main
        className={`flex flex-col min-h-screen bg-darkred-background ${padding}`}
      >
        <Header padding={padding} />
        {/* <BackgroundSpotlights /> */}
        <div className="z-10">
          <Hero />
          <Projects />
          <Blog />
        </div>
      </main>
      <Contact />
    </>
  );
}
