import {
  MAX_FILE_SIZE_BYTES,
  SUPPORTED_TYPES,
} from "../config/upload";

export type ValidationResult = {
  validFiles: File[];
  errors: string[];
};

export function validateFiles(
  newFiles: File[],
  existingFiles: File[]
): ValidationResult {
  const validFiles: File[] = [];
  const errors: string[] = [];

  for (const file of newFiles) {
    if (file.size === 0) {
      errors.push(`${file.name} is empty.`);
      continue;
    }

    if (file.size > MAX_FILE_SIZE_BYTES) {
      errors.push(`${file.name} exceeds the 100 MB limit.`);
      continue;
    }

    if (!SUPPORTED_TYPES.includes(file.type)) {
      errors.push(`${file.name} is not supported.`);
      continue;
    }

    const alreadyExists = existingFiles.some(
      (existing) =>
        existing.name === file.name &&
        existing.size === file.size
    );

    if (alreadyExists) {
      errors.push(`${file.name} is already selected.`);
      continue;
    }

    validFiles.push(file);
  }

  return {
    validFiles,
    errors,
  };
}