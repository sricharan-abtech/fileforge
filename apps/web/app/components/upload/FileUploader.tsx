"use client";

import { useState } from "react";

import DropZone from "./DropZone";
import FileList from "./FileList";

import { validateFiles } from "../../lib/fileValidation";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);
  const [errors, setErrors] = useState<string[]>([]);

  function handleFiles(selectedFiles: File[]) {
  const result = validateFiles(
    selectedFiles,
    files
  );

  setFiles((previous) => [
    ...previous,
    ...result.validFiles,
  ]);

  setErrors(result.errors);
}

  function removeFile(fileName: string) {
  setFiles((previousFiles) =>
    previousFiles.filter(
      (file) => file.name !== fileName
    )
  );
}

  return (
    <section id="upload" className="py-20">
      <DropZone onFilesSelected={handleFiles} />

      {errors.length > 0 && (
        <div className="mx-auto mt-6 max-w-4xl rounded-xl border border-red-500 bg-red-500/10 p-4">
          <h3 className="font-semibold text-red-400">
            Upload Errors
          </h3>

          <ul className="mt-2 list-disc pl-5 text-sm text-red-300">
            {errors.map((error, index) => (
              <li key={index}>{error}</li>
            ))}
          </ul>
        </div>
      )}

      <FileList
  files={files}
  onRemove={removeFile}
/>
    </section>
  );
}