export type ConversionType =
  | "pdf-to-word"
  | "word-to-pdf"
  | "jpg-to-pdf"
  | "png-to-pdf"
  | "merge-pdf"
  | "split-pdf";

export interface ConversionJob {
  id: string;
  file: File;
  type: ConversionType;
}

export async function convertFile(job: ConversionJob) {
  console.log("Starting conversion...");

  console.log(job);

  // Backend logic will come later

  return {
    success: true,
    downloadUrl: "",
  };
}