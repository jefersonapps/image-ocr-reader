"use client";

import React from "react";
import { useOCR } from "../hooks/useOCR";

import Image from "next/image";
import { ImageUpload } from "./image-upload";
import { TextResult } from "./text-result";

export const ImageOCRScan: React.FC = () => {
  const { text, setText, isLoading, error, processImage, imageData } = useOCR();

  return (
    <div className="space-y-3 py-3">
      <h1 className="text-3xl text-center font-bold">
        Extraia o texto da sua imagem
      </h1>

      <div className="flex justify-center">
        <ImageUpload onImageUpload={processImage} />
      </div>

      {isLoading && (
        <p className="flex flex-col items-center justify-center gap-2">
          <span className="font-bold text-lg animate-pulse">
            Processando imagem...
          </span>
          <div className="border-4 border-violet-600 rounded-xl animate-bounce mt-8">
            <Image
              src={imageData}
              alt="Animação de documento sendo escaneado"
              width={150}
              height={150}
              className="rounded-lg animate-pulse"
            />
          </div>
        </p>
      )}

      {text && <TextResult text={text} setText={setText} />}
      {error && <p>Erro ao processar a imagem, tente novamente.</p>}
    </div>
  );
};
