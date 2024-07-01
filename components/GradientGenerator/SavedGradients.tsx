import { Button } from "@/components/ui/button";
import { XIcon, SaveIcon } from "lucide-react";

interface SavedGradientsProps {
  savedGradients: {
    name: string;
    type: string;
    direction: string;
    colors: string[];
  }[];
  onSave: () => void;
  onDelete: (index: number) => void;
  onLoad: (gradient: {
    type: string;
    direction: string;
    colors: string[];
  }) => void;
}

export default function SavedGradients({
  savedGradients,
  onSave,
  onDelete,
  onLoad,
}: SavedGradientsProps) {
  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">Saved Gradients</label>
        <Button variant="outline" onClick={onSave} className="text-xs">
          <SaveIcon className="w-4 h-4 mr-2" />
          Save Current
        </Button>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
        {savedGradients.map((gradient, index) => (
          <div
            key={index}
            className="bg-[#D9DAB0] rounded-md p-2 flex flex-col items-center justify-between h-24 relative overflow-hidden"
            style={{
              background: `${gradient.type}-gradient(${
                gradient.direction
              }, ${gradient.colors.join(", ")})`,
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-1 right-1 bg-white bg-opacity-50 hover:bg-opacity-75"
              onClick={() => onDelete(index)}
            >
              <XIcon className="w-4 h-4" />
            </Button>
            <Button
              variant="ghost"
              className="w-full h-full text-white text-shadow"
              onClick={() => onLoad(gradient)}
            >
              {gradient.name}
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
