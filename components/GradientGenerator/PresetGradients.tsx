import { Button } from "@/components/ui/button";

const presetGradients = [
  {
    name: "Sunset",
    type: "linear",
    direction: "to right",
    colors: ["#ff6b6b", "#ffa500", "#ffff00"],
  },
  {
    name: "Ocean",
    type: "linear",
    direction: "to bottom",
    colors: ["#00b4d8", "#0077b6", "#023e8a"],
  },
  {
    name: "Forest",
    type: "linear",
    direction: "to bottom right",
    colors: ["#2d6a4f", "#40916c", "#52b788"],
  },
  {
    name: "Neon",
    type: "radial",
    direction: "circle",
    colors: ["#ff2e63", "#08d9d6", "#fef9ef"],
  },
];

interface PresetGradientsProps {
  onSelectPreset: (preset: {
    type: string;
    direction: string;
    colors: string[];
  }) => void;
}

export default function PresetGradients({
  onSelectPreset,
}: PresetGradientsProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Presets</label>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {presetGradients.map((preset, index) => (
          <Button
            key={index}
            variant="outline"
            className="h-20 w-full relative overflow-hidden"
            onClick={() => onSelectPreset(preset)}
          >
            <div
              className="absolute inset-0"
              style={{
                background: `${preset.type}-gradient(${
                  preset.direction
                }, ${preset.colors.join(", ")})`,
              }}
            />
            <span className="relative z-10 text-white font-semibold">
              {preset.name}
            </span>
          </Button>
        ))}
      </div>
    </div>
  );
}
