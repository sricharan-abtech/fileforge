import { cn } from "../../lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export default function Button({
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        "rounded-xl bg-blue-600 px-6 py-3 text-white font-medium transition hover:bg-blue-700",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}