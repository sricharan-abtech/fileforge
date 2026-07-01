type FileListProps = {
  files: File[];
};

export default function FileList({
  files,
}: FileListProps) {
  if (files.length === 0) return null;

  return (
    <div className="mt-8 max-w-2xl mx-auto">
      <h2 className="mb-4 text-xl font-semibold text-white">
        Selected Files
      </h2>

      <div className="space-y-3">
        {files.map((file) => (
          <div
            key={file.name}
            className="rounded-xl border border-slate-700 bg-slate-900 p-4 flex items-center justify-between"
          >
            <div>
              <p className="font-medium text-white">
                {file.name}
              </p>

              <p className="text-sm text-slate-400">
                {(file.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}