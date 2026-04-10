export default function Home() {
  return (
    <main className="min-h-screen bg-background font-sans">
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-4">
          Scholarly Monograph
        </h1>
        <p className="text-xl text-muted-foreground max-w-md text-center">
          A high-end editorial experience inspired by leather-bound academic volumes.
        </p>

        {/* Primary Button টেস্ট */}
        <button className="mt-10 px-8 py-3 bg-primary text-primary-foreground rounded-md font-medium hover:bg-primary/90 transition-colors">
          Get Started
        </button>
      </div>
    </main>
  );
}