"use client";

import { useRef, useState } from "react";
import { UploadCloud } from "lucide-react";

import Button from "../ui/Button";
import Badge from "../ui/Badge";

type DropZoneProps = {
  onFilesSelected: (files: File[]) => void;
};

export default function DropZone({
  onFilesSelected,
}: DropZoneProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isDragging, setIsDragging] = useState(false);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement>
  ) {
    if (!event.target.files) return;

    onFilesSelected(Array.from(event.target.files));
  }

  function handleDrop(
    event: React.DragEvent<HTMLDivElement>
  ) {
    event.preventDefault();

    setIsDragging(false);

    onFilesSelected(Array.from(event.dataTransfer.files));
  }

  function openFilePicker() {
    inputRef.current?.click();
  }

  return (
    <div
      onDragOver={(e) => {
        e.preventDefault();
        setIsDragging(true);
      }}
      onDragLeave={() => setIsDragging(false)}
      onDrop={handleDrop}
      className={`mx-auto max-w-4xl rounded-3xl border-2 border-dashed p-12 text-center transition-all duration-300 ${
        isDragging
          ? "border-blue-500 bg-slate-900 scale-[1.02]"
          : "border-slate-700 bg-slate-900/60"
      }`}
    >
      <input
        ref={inputRef}
        type="file"
        multiple
        onChange={handleChange}
        className="hidden"
      />

      <div className="flex justify-center">
        <UploadCloud
          size={72}
          className={`transition ${
            isDragging ? "text-blue-400" : "text-slate-400"
          }`}
        />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        {isDragging
          ? "Release to upload"
          : "Drag & Drop your files"}
      </h2>

      <p className="mt-4 text-slate-400">
        Upload PDFs, Word documents, Excel sheets,
        PowerPoint presentations and Images.
      </p>

      <div className="mt-8">
        <Button onClick={openFilePicker}>
          Browse Files
        </Button>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3">
        <Badge>PDF</Badge>
        <Badge>DOCX</Badge>
        <Badge>XLSX</Badge>
        <Badge>PPTX</Badge>
        <Badge>PNG</Badge>
        <Badge>JPG</Badge>
      </div>

      <p className="mt-6 text-sm text-slate-500">
        Maximum upload size: 100 MB
      </p>
    </div>
  );
}