"use client";

import { Search } from "lucide-react";
import Input from "./input";

export default function SearchInput({ query, setQuery }) {
  async function handleSearch(e) {
    const legenda = e.target.value;
    setQuery(legenda);
  }

  return (
    <div className="relative">
      <Input
        placeholder="Pesquisar link por legenda..."
        onChange={handleSearch}
        value={query}
      />
      <Search
        size={16}
        className="absolute right-4 top-1/2 -translate-y-1/2 mt-1 pointer-events-none text-zinc-900"
      />
    </div>
  );
}
