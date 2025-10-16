"use client";

import { revalidateLinks } from "@/utils/revalidate-links";
import Button from "../button";

export default function PostButton({ legenda, url_original }) {
  async function postLink(legenda, url_original) {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/links`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ legenda, url_original }),
        }
      );
      const data = await response.json();

      if (data.message) {
        alert(data.message);
        return;
      }

      if (!response.ok) alert("Erro ao postar o link. Tente novamente.");
      else revalidateLinks();
    } catch (error) {
      console.error(error);
      alert("Erro ao postar o link. Tente novamente.");
    }
  }

  return (
    <Button
      className={"px-8 cursor-pointer text-white"}
      onClick={() => postLink(legenda, url_original)}
    >
      Encurtar
    </Button>
  );
}
