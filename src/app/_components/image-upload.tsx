import { useState } from "react";

interface ImageUploadProps {
  onImageUpload: (imageData: string) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageUpload }) => {
  const [isDraggingOver, setIsDraggingOver] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        onImageUpload(imageData);
      };

      reader.readAsDataURL(file);
    }
  };

  const handlePaste = async (e: React.ClipboardEvent<HTMLDivElement>) => {
    const items = e.clipboardData.items;
    console.log(items);
    for (let i = 0; i < items.length; i++) {
      if (items[i].type.indexOf("image") !== -1) {
        const file = items[i].getAsFile();
        if (file) {
          const reader = new FileReader();
          reader.onload = (e) => {
            const imageData = e.target?.result as string;
            onImageUpload(imageData);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(true);
  };

  const handleDragLeave = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDraggingOver(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const file = e.dataTransfer.files[0];
      const reader = new FileReader();

      reader.onload = (e) => {
        const imageData = e.target?.result as string;
        onImageUpload(imageData);
      };

      reader.readAsDataURL(file);
    }
  };

  return (
    <div
      onPaste={handlePaste}
      onDragOver={handleDragOver}
      onDragLeave={handleDragLeave}
      onDrop={handleDrop}
      className={`bg-blue-100 dark:bg-zinc-900 p-10 border-2 border-violet-600 border-dashed gap-4 flex flex-col items-center justify-center rounded-lg transition-colors duration-200 ${
        isDraggingOver ? "bg-blue-200 dark:bg-zinc-700" : ""
      }`}
    >
      <span className="font-medium">
        Arraste e solte ou cole uma imagem aqui pressionando{" "}
        <span className="bg-violet-500 dark:bg-violet-800 px-2 py-1 rounded-md">
          Ctrl
        </span>{" "}
        +{" "}
        <span className="bg-violet-500 dark:bg-violet-800 px-2 py-1 rounded-md">
          V
        </span>{" "}
      </span>
      <label
        htmlFor="image-upload"
        className="relative px-4 py-1 bg-violet-500 dark:bg-violet-800 hover:bg-violet-600 dark:hover:bg-violet-700 font-bold flex items-center justify-center cursor-pointer rounded-lg"
      >
        Importe uma imagem
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="absolute inset-0 sr-only cursor-pointer"
          id="image-upload"
        />
      </label>
    </div>
  );
};
