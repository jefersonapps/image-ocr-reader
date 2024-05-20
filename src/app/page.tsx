import { Header } from "./_components/header";
import { ImageOCRScan } from "./_components/image-ocr-scan";

export default function Home() {
  return (
    <div className="flex justify-center">
      <main className="max-w-6xl w-full px-4">
        <Header />
        <ImageOCRScan />
      </main>
    </div>
  );
}
