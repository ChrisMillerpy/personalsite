import Header from "@/components/Header";
import BackgroundSpotlights from "@/components/Spotlight";

export default function Home() {
  const xlPadding: string = "px-56";
  return (
    <main
      className={`flex flex-col min-h-screen bg-darkred-background ${xlPadding} overflow-x-hidden`}
    >
      <Header padding={xlPadding} />
      <BackgroundSpotlights />
    </main>
  );
}
