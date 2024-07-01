interface GradientDisplayProps {
  gradientCss: string;
}

export default function GradientDisplay({ gradientCss }: GradientDisplayProps) {
  return (
    <div className="relative w-full h-48 rounded-lg overflow-hidden">
      <div className="absolute inset-0" style={{ background: gradientCss }} />
      <div className="absolute inset-0 flex items-center justify-center">
        <p className="text-white text-lg font-semibold">Preview</p>
      </div>
    </div>
  );
}
