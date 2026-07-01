"use client";

import { useState } from "react";
import DropZone from "./DropZone";
import FileList from "./FileList";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(selectedFiles: File[]) {
    setFiles(selectedFiles);
  }

  return (
    <section className="py-20">
      <DropZone onFilesSelected={handleFiles} />

      <FileList files={files} />
    </section>
  );
}