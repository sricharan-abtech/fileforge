import { UploadFile } from "../types/upload";

export class UploadService {
  async simulateUpload(
    upload: UploadFile,
    onProgress: (progress: number) => void
  ): Promise<void> {
    return new Promise((resolve) => {
      let progress = 0;

      const interval = setInterval(() => {
        progress += 5;

        onProgress(progress);

        if (progress >= 100) {
          clearInterval(interval);
          resolve();
        }
      }, 150);
    });
  }
}

export const uploadService = new UploadService();