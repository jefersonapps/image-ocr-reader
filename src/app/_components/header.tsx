import { ModeToggle } from "@/components/mode-toggle";
import Image from "next/image";

export const Header = () => {
  return (
    <header className="flex justify-between py-3 border-b border-gray-600">
      <div className="flex gap-4 items-center">
        <Image
          src="/favicon.ico"
          width={50}
          height={50}
          alt="Logo da aplicação, se trata de uma pasta de arquivos violeta com um texto OCR e uma lupa acima"
        />
        <h1 className="font-bold text-xl">Image OCR Reader</h1>
      </div>

      <div className="flex gap-4">
        <ModeToggle />
        <a
          href="https://github.com/jefersonapps"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="https://github.com/jefersonapps.png"
            width={40}
            height={40}
            alt="Imagem do github do desenvolvedor do site - Jeferson Leite"
            className="rounded-full"
          />
        </a>
      </div>
    </header>
  );
};
