"use client";

import { FileText, X } from "lucide-react";

type FileCardProps = {
  file: File;
  onRemove: (fileName: string) => void;
};

export default function FileCard({
  file,
  onRemove,
}: FileCardProps) {
  const sizeMB = (file.size / (1024 * 1024)).toFixed(2);

  return (
    <div className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900 p-4 transition hover:border-slate-500">
      <div className="flex items-center gap-4">
        <FileText className="text-blue-400" size={28} />

        <div>
          <h3 className="font-medium text-white">
            {file.name}
          </h3>

          <p className="text-sm text-slate-400">
            {sizeMB} MB
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(file.name)}
        className="rounded-lg p-2 transition hover:bg-red-500/20"
      >
        <X className="text-red-400" size={20} />
      </button>
    </div>
  );
}