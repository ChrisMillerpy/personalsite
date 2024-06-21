import Header from "@/components/Header";
import BackgroundSpotlights from "@/components/Spotlight";

export default function Home() {
  const xlPadding: string = "px-56";
  return (
    <main className={`min-h-screen bg-darkred-background ${xlPadding}`}>
      <Header padding={xlPadding} />
      <BackgroundSpotlights />
    </main>
  );
}
