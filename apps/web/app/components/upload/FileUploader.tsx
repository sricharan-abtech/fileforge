"use client";

import { useState } from "react";

import DropZone from "./DropZone";
import FileList from "./FileList";

import { generateJobId } from "../../lib/id";
import { queue } from "../../services/queue";
import {
  ConversionJob,
  ConversionType,
} from "../../services/converter";

export default function FileUploader() {
  const [files, setFiles] = useState<File[]>([]);

  function handleFiles(selectedFiles: File[]) {
    // Display files in UI
    setFiles(selectedFiles);

    // Create a conversion job for each file
    selectedFiles.forEach((file) => {
      const job: ConversionJob = {
        id: generateJobId(),
        file,
        type: "pdf-to-word" as ConversionType,
      };

      queue.add(job);

      console.log("Job Added:", job);
    });

    console.log("Current Queue:", queue.getJobs());
  }

  return (
    <section className="py-20">
      <DropZone onFilesSelected={handleFiles} />

      <FileList files={files} />
    </section>
  );
}