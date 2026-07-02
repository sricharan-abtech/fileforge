type ProgressBarProps = {
  progress: number;
};

export default function ProgressBar({
  progress,
}: ProgressBarProps) {
  return (
    <div className="mt-3 h-2 w-full rounded-full bg-slate-700">
      <div
        className="h-2 rounded-full bg-blue-500 transition-all duration-300"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}