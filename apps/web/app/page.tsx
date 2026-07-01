import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import UploadCard from "./components/home/UploadCard";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <UploadCard />
    </main>
  );
}