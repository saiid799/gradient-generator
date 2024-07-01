import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

interface GradientControlsProps {
  gradientType: string;
  gradientDirection: string;
  onTypeChange: (type: string) => void;
  onDirectionChange: (direction: string) => void;
}

export default function GradientControls({
  gradientType,
  gradientDirection,
  onTypeChange,
  onDirectionChange,
}: GradientControlsProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">Gradient Type</label>
        <Select value={gradientType} onValueChange={onTypeChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Gradient Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="linear">Linear</SelectItem>
            <SelectItem value="radial">Radial</SelectItem>
            <SelectItem value="conic">Conic</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">Gradient Direction</label>
        <Select value={gradientDirection} onValueChange={onDirectionChange}>
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Gradient Direction" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="to right">To Right</SelectItem>
            <SelectItem value="to left">To Left</SelectItem>
            <SelectItem value="to top">To Top</SelectItem>
            <SelectItem value="to bottom">To Bottom</SelectItem>
            <SelectItem value="45deg">45 Degrees</SelectItem>
            <SelectItem value="-45deg">-45 Degrees</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
