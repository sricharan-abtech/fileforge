"use client";

type DropZoneProps = {
  onFilesSelected: (files: File[]) => void;
};

export default function DropZone({
  onFilesSelected,
}: DropZoneProps) {
  function handleChange(
  event: React.ChangeEvent<HTMLInputElement>
) {
  console.log("Input Changed!");

  if (!event.target.files) return;

  const files = Array.from(event.target.files);

  console.log(files);

  onFilesSelected(files);
}

  return (
    <div className="rounded-2xl border-2 border-dashed border-slate-600 p-12 text-center">

      <input
        type="file"
        multiple
        onChange={handleChange}
      />

      <p className="mt-4 text-slate-400">
        Drag & Drop files here
      </p>

    </div>
  );
}