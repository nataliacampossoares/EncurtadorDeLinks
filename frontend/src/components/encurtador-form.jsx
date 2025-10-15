import Button from "./button";
import Input from "./input";

export default function EncurtadorForm() {
  return (
    <form className="flex flex-col gap-4 w-full max-w-3xl mx-auto px-4">
      <Input
        name="legenda"
        type="text"
        placeholder="Ex: Meu portfólio, Site da empresa..."
        label="Legenda do link *"
        required
      />
      <div className="flex gap-3 items-end">
        <Input
          name="url_original"
          type="url"
          placeholder="https://exemplo.com/sua-url-muito-longa..."
          label="URL para encurtar *"
          required
        />
        <Button className="px-8 cursor-pointer text-white">Encurtar</Button>
      </div>
    </form>
  );
}
