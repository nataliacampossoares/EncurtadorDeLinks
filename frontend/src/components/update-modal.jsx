"use client";

import { useState } from "react";
import Button from "./button";
import Input from "./input";

export default function UpdateModal({ link, open, setOpen }) {
  const [loading, setLoading] = useState(false);

  async function handleUpdate(e) {
    e.preventDefault();

    setLoading(true);

    const formData = new FormData(e.target);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/links/${link.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ ...link, ...payload }),
        }
      );
      const data = await response.json();

      if (data.message) {
        alert(data.message);
        return;
      }

      if (data) {
        window.location.reload();
        setOpen(false);
      } else {
        alert("Erro ao atualizar o link. Tente novamente.");
      }
    } catch (error) {
      alert("Erro ao atualizar o link. Tente novamente.");
      console.error("Error updating link:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <dialog open={open} className="fixed inset-0 m-auto">
      <div
        onClick={() => setOpen(false)}
        className="absolute left-1/2 top-1/2 -translate-1/2 w-screen h-dvh bg-black/30 z-10"
      />
      <form
        onSubmit={handleUpdate}
        className="absolute left-1/2 top-1/2 -translate-1/2 p-6 min-w-128 flex flex-col gap-3 z-30 bg-white"
      >
        <h3 className="font-bold text-lg">Atualizar Link</h3>
        <div className="flex flex-col gap-3">
          <Input
            label="Legenda"
            name="legenda"
            type="text"
            placeholder="Minha Página"
            defaultValue={link.legenda}
            required
          />
          <Input
            label="URL Original"
            name="url_original"
            type="url"
            placeholder="https://meusite.com/minha-pagina"
            defaultValue={link.url_original}
            required
          />
        </div>
        <div className="grid grid-cols-2 gap-2 mt-4">
          <Button
            type="button"
            onClick={() => setOpen(false)}
            className="bg-stone-200 hover:bg-stone-300 h-10"
          >
            Cancelar
          </Button>
          <Button type="submit" className="text-white h-10">
            {loading ? "Salvando..." : "Salvar"}
          </Button>
        </div>
      </form>
    </dialog>
  );
}
