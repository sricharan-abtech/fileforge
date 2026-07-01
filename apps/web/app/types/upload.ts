export type UploadStatus =
  | "waiting"
  | "uploading"
  | "processing"
  | "completed"
  | "failed";

export interface UploadFile {
  id: string;
  file: File;
  progress: number;
  status: UploadStatus;
  error?: string;
}