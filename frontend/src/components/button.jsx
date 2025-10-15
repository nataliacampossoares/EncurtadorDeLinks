import { cn } from "@/utils/cn";

export default function Button({ className, children, ...props }) {
  return (
    <button
      className={cn(
        "bg-blue-600 rounded-lg px-4 py-2 h-12 hover:bg-blue-700 text-sm font-medium cursor-pointer transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
