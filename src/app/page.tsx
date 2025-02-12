import { AdForm } from "@/forms";
import { MoveLeft } from "lucide-react";
import { Toaster } from "sonner";

export default function Home() {
  return (
    <div className="max-w-[1200px] mx-auto my-10 px-4 md:px-6">
      <Toaster />

      <div className="text-secondary text-[11px] mb-3">Главная — Шины, диски и колёса</div>

      <div className="flex items-center mb-8">
        <button className="flex justify-center items-center bg-white rounded-full p-1 shadow-md w-10 h-10 mr-4">
          <MoveLeft className="w-4 h-4 text-black" />
        </button>
        <h1 className="font-semibold text-2xl md:text-3xl">Добавить объявление</h1>
      </div>

      <div className="bg-white rounded-lg text-primary">
        <AdForm />
      </div>
    </div>
  );
}
