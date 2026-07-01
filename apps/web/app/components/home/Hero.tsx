import Button from "../ui/Button";
import Container from "../ui/Container";

export default function Hero() {
  return (
    <section className="py-28">
      <Container className="text-center">
        <h1 className="text-6xl font-bold text-white">
          Convert. Edit. Organize.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-slate-300">
          A modern document platform for converting, editing and
          organizing PDFs, images and office documents.
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <Button>Upload File</Button>

          <Button className="bg-white text-slate-900 hover:bg-slate-200">
            Explore Tools
          </Button>
        </div>
      </Container>
    </section>
  );
}