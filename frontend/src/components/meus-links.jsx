import Link from "./link";

export default async function MeusLinks() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_URL + "/api/links", {
    next: {
      tags: ["links"],
    },
  });

  if (res.ok === false) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
        <h1 className="font-bold text-2xl">Meus Links</h1>
        <p>Erro ao carregar links: {res.statusText}</p>
      </div>
    );
  }

  const data = await res.json();

  const links = data.data.sort(
    (a, b) => new Date(b.data_criacao) - new Date(a.data_criacao)
  );

  if (links.length === 0) {
    return (
      <div className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4 mt-8">
        <h1 className="font-bold text-2xl">Meus Links</h1>
        <p className="text-zinc-600">Você ainda não criou nenhum link.</p>
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
      <div className="flex flex-col gap-2 overflow-auto ">
        {links.map((link) => (
          <Link key={link.id} link={link} />
        ))}
      </div>
    </div>
  );
}
