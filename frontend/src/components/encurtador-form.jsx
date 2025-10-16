"use client";

import { useState } from "react";
import PostButton from "./action-buttons/post-button";
import Input from "./input";

export default function EncurtadorForm() {

  const [legenda, setLegenda] = useState("");
  const [url_original, setUrlOriginal] = useState("");

  return (
    <form className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4">
      <Input
        name="legenda"
        type="text"
        placeholder="Ex: Meu portfólio, Site da empresa..."
        label="Legenda do link *"
        onChange={(e) => setLegenda(e.target.value)}
        required
      />
      <div className="flex gap-3 items-end">
        <Input
          name="url_original"
          type="url"
          placeholder="https://exemplo.com/sua-url-muito-longa..."
          label="URL para encurtar *"
          onChange={(e) => setUrlOriginal(e.target.value)}
          required
        />
        <PostButton legenda={legenda} url_original={url_original}/>
      </div>
    </form>
  );
}
