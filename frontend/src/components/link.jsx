"use client";

import { Calendar, ChartColumn, Edit, ExternalLink } from "lucide-react";
import NextLink from "next/link";
import CopyButton from "./action-buttons/copy-button";
import DeleteButton from "./action-buttons/delete-button";
import UpdateButton from "./action-buttons/update-button";

export default function Link({ link }) {
  const url_encurtada = process.env.NEXT_PUBLIC_API_URL + "/" + link.codigo;

  return (
    <div className="flex flex-col gap-2 p-4 border border-zinc-200 rounded-md bg-white">
      <div className="flex justify-between items-center gap-2">
        <p className="font-medium text-lg">{link.legenda}</p>
        <p className="flex items-center gap-1 text-zinc-600 text-sm">
          <ChartColumn size={16} />
          <span className="font-medium">{link.numero_cliques}</span>
        </p>
      </div>
      <NextLink
        href={url_encurtada}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1 font-medium text-sm text-blue-600"
      >
        {url_encurtada} <ExternalLink size={14} />
      </NextLink>
      <p className="text-xs text-zinc-700">{link.url_original}</p>

      <p className="flex items-center gap-2 text-zinc-600 text-xs">
        <Calendar size={14} />
        Criado em {new Date(link.data_criacao).toLocaleDateString("pt-BR")}
      </p>
      <hr className="text-stone-300" />
      <div className="flex items-center gap-2 mt-2">
        <CopyButton text={url_encurtada} />
        <UpdateButton link={link} />
        <DeleteButton linkId={link.id} />
      </div>
    </div>
  );
}
