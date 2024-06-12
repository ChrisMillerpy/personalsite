import Header from "@/components/Header";

export default function Home() {
  const xlPadding: string = "px-36";
  return (
    <main className={`min-h-screen bg-darkred-background ${xlPadding}`}>
      <Header padding={xlPadding} />
    </main>
  );
}
