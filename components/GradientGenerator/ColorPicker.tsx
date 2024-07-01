import { Button } from "@/components/ui/button";
import { Input } from "../ui/input";
import { XIcon, PlusIcon } from "lucide-react";

interface ColorPickerProps {
  colors: string[];
  onColorChange: (index: number, color: string) => void;
  onAddColor: () => void;
  onRemoveColor: (index: number) => void;
}

export default function ColorPicker({
  colors,
  onColorChange,
  onAddColor,
  onRemoveColor,
}: ColorPickerProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Colors</label>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2">
        {colors.map((color, index) => (
          <div key={index} className="flex items-center gap-2">
            <Input
              type="color"
              value={color}
              onChange={(e) => onColorChange(index, e.target.value)}
              className="w-8 h-8 rounded-full cursor-pointer"
            />
            <Input
              type="text"
              value={color}
              onChange={(e) => onColorChange(index, e.target.value)}
              className="w-20 text-xs"
            />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => onRemoveColor(index)}
              className="hover:bg-red-100"
            >
              <XIcon className="w-4 h-4" />
            </Button>
          </div>
        ))}
        <Button
          variant="outline"
          onClick={onAddColor}
          className="col-span-full"
        >
          <PlusIcon className="w-4 h-4 mr-2" />
          Add Color
        </Button>
      </div>
    </div>
  );
}
