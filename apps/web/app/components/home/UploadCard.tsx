import Button from "../ui/Button";
import Container from "../ui/Container";

export default function UploadCard() {
  return (
    <section className="pb-24">
      <Container>
        <div className="mx-auto max-w-3xl rounded-3xl border-2 border-dashed border-slate-600 bg-slate-900/70 p-10 text-center shadow-2xl backdrop-blur-md">
          <div className="mb-6 text-6xl">📁</div>

          <h2 className="text-3xl font-bold text-white">
            Drag & Drop your files
          </h2>

          <p className="mt-3 text-slate-400">
            Upload PDFs, Word documents, Excel sheets, images,
            PowerPoint files and more.
          </p>

          <div className="mt-8">
            <Button>Browse Files</Button>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm text-slate-400">
            <span className="rounded-full bg-slate-800 px-3 py-1">PDF</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">DOCX</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">JPG</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">PNG</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">XLSX</span>
            <span className="rounded-full bg-slate-800 px-3 py-1">PPTX</span>
          </div>

          <p className="mt-6 text-xs text-slate-500">
            Maximum file size: 100 MB
          </p>
        </div>
      </Container>
    </section>
  );
}