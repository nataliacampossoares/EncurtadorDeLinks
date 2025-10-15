import Link from "./link";

export default function MeusLinks() {
  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Meus Links</h1>
        <span className="text-xs text-zinc-700">1 link</span>
      </div>
      <Link />
    </div>
  );
}
