import Navbar from "./components/layout/Navbar";
import Hero from "./components/home/Hero";
import FileUploader from "./components/upload/FileUploader";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-white">
      <Navbar />
      <Hero />
      <FileUploader />
    </main>
  );
}