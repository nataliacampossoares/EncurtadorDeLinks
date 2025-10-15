import { cn } from "@/utils/cn";

export default function Input({ name, label, className, ...props }) {
  return (
    <div className="flex flex-col w-full gap-2">
      <label htmlFor={name} className="flex flex-col gap-1 font-medium text-sm">
        {label && <span>{label}</span>}
      </label>
      <input
        id={name}
        name={name}
        className={cn(
          "border border-zinc-300 rounded-lg text-sm h-12 px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500",
          className
        )}
        {...props}
      />
    </div>
  );
}
