import EncurtadorForm from "@/components/encurtador-form";
import Link from "@/components/link";
import MeusLinks from "@/components/meus-links";
import { Link2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      <header className="flex flex-col items-center justify-center gap-3 mb-8 mt-8">
        <div className="flex items-center gap-3">
          <Link2 className="text-blue-600" strokeWidth={2.5} size={32} />
          <h1 className="font-bold text-3xl">Encurtador de Links</h1>
        </div>
        <p className="text-zinc-600 font-medium">
          Transforme links longos em URLs curtas e fáceis de compartilhar
        </p>
      </header>

      <EncurtadorForm />

      <MeusLinks />
    </main>
  );
}
