"use client";

import { revalidateLinks } from "@/utils/revalidate-links";
import { Trash2 } from "lucide-react";
import Button from "../button";

export default function DeleteButton({ linkId }) {
  async function deleteLink(id) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/links/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) alert("Erro ao excluir o link. Tente novamente.");
      else revalidateLinks();
    } catch (error) {
      console.error(error);
      alert("Erro ao excluir o link. Tente novamente.");
    }
  }

  return (
    <Button
      className={
        "flex items-center gap-2 text-red-500 bg-stone-200 hover:bg-stone-300  h-10 px-3 cursor-pointer"
      }
      onClick={() => {
        if (confirm("Tem certeza que deseja excluir este link?")) {
          deleteLink(linkId);
        }
      }}
    >
      <Trash2 size={16} />
    </Button>
  );
}
