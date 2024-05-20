import { useState } from "react";
import { recognize } from "../services/recognize";

export const useOCR = () => {
  const [text, setText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [imageData, setImageData] = useState("");

  const processImage = async (imageData: string) => {
    setImageData(imageData);
    setText("");
    setIsLoading(true);
    setError(false);

    try {
      const { text } = await recognize(imageData);
      if (text) {
        setText(text);
      } else {
        setText("Nenhum texto foi encontrado na imagem...");
      }
    } catch (error) {
      setError(true);
    } finally {
      setIsLoading(false);
    }
  };

  return { text, setText, isLoading, error, processImage, imageData };
};
