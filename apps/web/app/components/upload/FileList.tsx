"use client";

import FileCard from "./FileCard";

type FileListProps = {
  files: File[];
  onRemove: (fileName: string) => void;
};

export default function FileList({
  files,
  onRemove,
}: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <h2 className="mb-4 text-2xl font-bold text-white">
        Selected Files
      </h2>

      <div className="space-y-4">
        {files.map((file) => (
          <FileCard
            key={file.name}
            file={file}
            onRemove={onRemove}
          />
        ))}
      </div>
    </div>
  );
}