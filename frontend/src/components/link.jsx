import {
  Calendar,
  ChartColumn,
  Copy,
  Edit,
  ExternalLink,
  Trash2,
} from "lucide-react";
import NextLink from "next/link";
import Button from "./button";

export default function Link() {
  return (
    <div className="flex flex-col gap-2 p-4 border border-zinc-200 rounded-md bg-white">
      <div className="flex justify-between items-center gap-2">
        <p className="font-medium text-lg">Exame Seleção Técnico 2026</p>
        <p className="flex items-center gap-1 text-zinc-600 text-sm">
          <ChartColumn size={16} />
          <span className="font-medium">123</span>
        </p>
      </div>
      <NextLink
        href={"https://short.ly"}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-medium text-sm text-blue-600"
      >
        https://short.ly
        <ExternalLink size={14} />
      </NextLink>
      <p className="text-xs text-zinc-700">link longo</p>

      <p className="flex items-center gap-2 text-zinc-600 text-xs">
        <Calendar size={14} />
        Criado em
      </p>
      <hr className="text-stone-300" />
      <div className="flex items-center gap-2 mt-2">
        <Button
          className={
            "flex items-center justify-center gap-2 bg-stone-200 hover:bg-stone-300 w-full h-10 px-3 cursor-pointer"
          }
        >
          <Copy size={16} />
          Copiar
        </Button>
        <Button
          className={
            "flex items-center gap-2 bg-stone-200 hover:bg-stone-300  h-10 px-3 cursor-pointer"
          }
        >
          <Edit size={16} />
        </Button>
        <Button
          className={
            "flex items-center gap-2 bg-stone-200 hover:bg-stone-300  h-10 px-3 cursor-pointer"
          }
        >
          <Trash2 size={16} />
        </Button>
      </div>
    </div>
  );
}
