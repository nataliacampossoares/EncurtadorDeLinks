"use client";

import { useEffect, useState } from "react";
import Link from "./link";
import SearchInput from "./search-input";

export default function MeusLinks() {
  const [res, setRes] = useState(null);
  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [legenda, setLegenda] = useState("");

  useEffect(() => {
    async function fetchLinks() {
      setLoading(true);
      try {
        let params = legenda ? `?legenda=${legenda}` : "";
        const resposta = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/links${params}`,
          {
            next: {
              tags: ["links"],
            },
          }
        );
        setRes(resposta);

        if (resposta.ok) {
          const dados = await resposta.json();

          const linksResposta = dados.data.sort(
            (a, b) => new Date(b.data_criacao) - new Date(a.data_criacao)
          );
          setLinks(linksResposta);
        }
      } finally {
        setLoading(false);
      }
    }

    fetchLinks();
  }, [legenda]);

  if (res && res.ok === false) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
        <h1 className="font-bold text-2xl">Meus Links</h1>
        <p>Erro ao carregar links: {res.statusText}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
      <div className="flex justify-between items-center">
        <h1 className="font-bold text-2xl">Meus Links</h1>
        <span className="text-xs text-zinc-700">
          {links.length} link{links.length !== 1 ? "s" : ""}
        </span>
      </div>

      <SearchInput query={legenda} setQuery={setLegenda} />

      {loading ? (
        <p className="text-zinc-600">Carregando links...</p>
      ) : links.length === 0 ? (
        <p className="text-zinc-600">Nenhum link encontrado.</p>
      ) : (
        <div className="flex flex-col gap-2 overflow-auto ">
          {links.map((link) => (
            <Link key={link.id} link={link} />
          ))}
        </div>
      )}
    </div>
  );
}
