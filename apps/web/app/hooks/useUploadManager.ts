"use client";

import { useState } from "react";
import { UploadFile } from "../types/upload";
import { uploadService } from "../services/upload.service";

export function useUploadManager() {
  const [uploads, setUploads] = useState<UploadFile[]>([]);

  async function addFiles(files: UploadFile[]) {
    setUploads((previous) => [...previous, ...files]);

    for (const upload of files) {
      setUploads((previous) =>
        previous.map((item) =>
          item.id === upload.id
            ? { ...item, status: "uploading" }
            : item
        )
      );

      await uploadService.simulateUpload(
        upload,
        (progress) => {
          setUploads((previous) =>
            previous.map((item) =>
              item.id === upload.id
                ? { ...item, progress }
                : item
            )
          );
        }
      );

      setUploads((previous) =>
        previous.map((item) =>
          item.id === upload.id
            ? {
                ...item,
                status: "completed",
                progress: 100,
              }
            : item
        )
      );
    }
  }

  function removeFile(id: string) {
    setUploads((previous) =>
      previous.filter((file) => file.id !== id)
    );
  }

  return {
    uploads,
    addFiles,
    removeFile,
  };
}