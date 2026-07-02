"use client";

import { FileText, X, CheckCircle, LoaderCircle } from "lucide-react";

import ProgressBar from "../ui/ProgressBar";
import { UploadFile } from "../../types/upload";

type FileCardProps = {
  upload: UploadFile;
  onRemove: (id: string) => void;
};

export default function FileCard({
  upload,
  onRemove,
}: FileCardProps) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">

      <div className="flex items-start justify-between">

        <div className="flex gap-4">

          <FileText
            className="mt-1 text-blue-400"
            size={28}
          />

          <div>

            <h3 className="font-medium text-white">
              {upload.file.name}
            </h3>

            <p className="text-sm text-slate-400">
              {(upload.file.size / 1024 / 1024).toFixed(2)} MB
            </p>

          </div>

        </div>

        <button
          onClick={() => onRemove(upload.id)}
          className="rounded-lg p-2 hover:bg-red-500/20"
        >
          <X
            className="text-red-400"
            size={20}
          />
        </button>

      </div>

      <ProgressBar progress={upload.progress} />

      <div className="mt-3 flex items-center justify-between">

        <span className="text-sm text-slate-400 capitalize">
          {upload.status}
        </span>

        {upload.status === "completed" ? (
          <CheckCircle
            className="text-green-500"
            size={18}
          />
        ) : (
          <LoaderCircle
            className="animate-spin text-blue-400"
            size={18}
          />
        )}

      </div>

    </div>
  );
}