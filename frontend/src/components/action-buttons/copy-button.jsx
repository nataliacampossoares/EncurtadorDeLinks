"use client";

import { Copy } from "lucide-react";
import Button from "../button";

export default function CopyButton({ text }) {
  return (
    <Button
      className={
        "flex items-center justify-center gap-2 bg-stone-200 hover:bg-stone-300 w-full h-10 px-3 cursor-pointer"
      }
      onClick={() => {
        navigator.clipboard.writeText(text);
        alert("Link copiado para a área de transferência!");
      }}
    >
      <Copy size={16} />
      Copiar
    </Button>
  );
}
