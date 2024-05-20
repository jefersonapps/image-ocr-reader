import Tesseract from "tesseract.js";

export const recognize = async (imageData: string) => {
  const {
    data: { text },
  } = await Tesseract.recognize(imageData);

  return { text };
};
