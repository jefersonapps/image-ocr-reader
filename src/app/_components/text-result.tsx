import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useState } from "react";

export const TextResult = ({
  text,
  setText,
}: {
  text: string;
  setText: Dispatch<SetStateAction<string>>;
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopyText = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div>
      <h2 className="font-bold text-xl">Texto extraído:</h2>
      {/* <ScrollArea className="h-60 w-full rounded-md border p-4 mt-4"> */}
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="resize-none h-60 mt-4 bg-blue-100 dark:bg-zinc-900 ring-2 ring-violet-800 focus:outline-none focus:ring-violet-600"
      />
      {/* </ScrollArea> */}
      <div className="flex justify-end">
        <button
          onClick={handleCopyText}
          data-copied={copied}
          className="bg-violet-500 dark:bg-violet-800 hover:bg-violet-600 dark:hover:bg-violet-700 w-40 data-[copied=true]:bg-emerald-600 dark:data-[copied=true]:bg-emerald-500 transition-colors px-2 py-1 mt-2 rounded-md font-semibold"
        >
          {copied ? "Copiado!" : "Copiar texto"}
        </button>
      </div>
    </div>
  );
};
