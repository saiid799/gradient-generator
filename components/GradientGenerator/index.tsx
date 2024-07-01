"use client";
import { useState } from "react";
import GradientDisplay from "./GradientDisplay";
import GradientControls from "./GradientControls";
import ColorPicker from "./ColorPicker";
import PresetGradients from "./PresetGradients";
import SavedGradients from "./SavedGradients";
import CSSOutput from "./CSSOutput";
import { useGradient } from "@/hooks/useGradient";
import { Button } from "@/components/ui/button";
import { Shuffle } from "lucide-react";

export default function GradientGenerator() {
  const {
    gradientType,
    gradientDirection,
    colors,
    gradientCss,
    handleGradientTypeChange,
    handleGradientDirectionChange,
    handleColorChange,
    addColor,
    removeColor,
    loadGradient,
    generateRandomGradient,
  } = useGradient();

  const [savedGradients, setSavedGradients] = useState<
    Array<{
      name: string;
      type: string;
      direction: string;
      colors: string[];
    }>
  >([]);

  const handleSaveGradient = () => {
    const newGradient = {
      name: `Gradient ${savedGradients.length + 1}`,
      type: gradientType,
      direction: gradientDirection,
      colors: colors,
    };
    setSavedGradients([...savedGradients, newGradient]);
  };

  const handleDeleteSavedGradient = (index: number) => {
    const updatedSavedGradients = [...savedGradients];
    updatedSavedGradients.splice(index, 1);
    setSavedGradients(updatedSavedGradients);
  };

  const handleLoadGradient = (gradient: {
    type: string;
    direction: string;
    colors: string[];
  }) => {
    loadGradient(gradient);
  };

  return (
    <div className="w-full max-w-3xl mx-auto px-4 py-8 space-y-8">
      <h1 className="text-4xl font-bold text-center font-alegreya text-primary">
        CSS Gradient Generator
      </h1>
      <p className="text-xl text-center font-proza text-secondary">
        Create beautiful CSS gradients for your projects.
      </p>
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <GradientDisplay gradientCss={gradientCss} />
        <div className="p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h2 className="text-2xl font-semibold">Gradient Controls</h2>
            <Button
              onClick={generateRandomGradient}
              className="bg-accent hover:bg-accent/80 text-primary font-semibold py-2 px-4 rounded-md transition-colors duration-200 flex items-center"
            >
              <Shuffle className="mr-2 h-4 w-4" />
              Random Gradient
            </Button>
          </div>
          <GradientControls
            gradientType={gradientType}
            gradientDirection={gradientDirection}
            onTypeChange={handleGradientTypeChange}
            onDirectionChange={handleGradientDirectionChange}
          />
          <ColorPicker
            colors={colors}
            onColorChange={handleColorChange}
            onAddColor={addColor}
            onRemoveColor={removeColor}
          />
          <PresetGradients
            onSelectPreset={(preset) => {
              handleGradientTypeChange(preset.type);
              handleGradientDirectionChange(preset.direction);
              preset.colors.forEach((color, index) =>
                handleColorChange(index, color)
              );
            }}
          />
          <SavedGradients
            savedGradients={savedGradients}
            onSave={handleSaveGradient}
            onDelete={handleDeleteSavedGradient}
            onLoad={handleLoadGradient}
          />
          <CSSOutput css={gradientCss} />
        </div>
      </div>
    </div>
  );
}
