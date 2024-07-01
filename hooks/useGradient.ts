"use client";
import { useState, useMemo, useCallback } from "react";

export function useGradient() {
  const [gradientType, setGradientType] = useState("linear");
  const [gradientDirection, setGradientDirection] = useState("to right");
  const [colors, setColors] = useState(["#4c4cff", "#ff4c4c"]);

  const handleGradientTypeChange = useCallback((type: string) => {
    setGradientType(type);
  }, []);

  const handleGradientDirectionChange = useCallback((direction: string) => {
    setGradientDirection(direction);
  }, []);

  const handleColorChange = useCallback((index: number, color: string) => {
    setColors((prevColors) => {
      const updatedColors = [...prevColors];
      updatedColors[index] = color;
      return updatedColors;
    });
  }, []);

  const addColor = useCallback(() => {
    setColors((prevColors) => [...prevColors, "#ffffff"]);
  }, []);

  const removeColor = useCallback((index: number) => {
    setColors((prevColors) => {
      if (prevColors.length <= 2) return prevColors;
      const updatedColors = [...prevColors];
      updatedColors.splice(index, 1);
      return updatedColors;
    });
  }, []);

  const gradientCss = useMemo(() => {
    let gradientString = "";
    switch (gradientType) {
      case "linear":
        gradientString = `linear-gradient(${gradientDirection}, ${colors.join(
          ", "
        )})`;
        break;
      case "radial":
        gradientString = `radial-gradient(circle, ${colors.join(", ")})`;
        break;
      case "conic":
        gradientString = `conic-gradient(from 0deg at 50% 50%, ${colors.join(
          ", "
        )})`;
        break;
      default:
        break;
    }
    return gradientString;
  }, [gradientType, gradientDirection, colors]);

  const loadGradient = useCallback(
    (gradient: { type: string; direction: string; colors: string[] }) => {
      setGradientType(gradient.type);
      setGradientDirection(gradient.direction);
      setColors(gradient.colors);
    },
    []
  );

  const generateRandomColor = () => {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  };

  const generateRandomGradient = useCallback(() => {
    const types = ["linear", "radial", "conic"];
    const directions = [
      "to right",
      "to left",
      "to top",
      "to bottom",
      "45deg",
      "-45deg",
    ];

    const newType = types[Math.floor(Math.random() * types.length)];
    const newDirection =
      newType === "linear"
        ? directions[Math.floor(Math.random() * directions.length)]
        : "circle";
    const colorCount = Math.floor(Math.random() * 3) + 2; // 2 to 4 colors
    const newColors = Array(colorCount)
      .fill(null)
      .map(() => generateRandomColor());

    setGradientType(newType);
    setGradientDirection(newDirection);
    setColors(newColors);
  }, []);

  return {
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
  };
}
