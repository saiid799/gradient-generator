import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { ClipboardIcon } from "lucide-react";
import { useState } from "react";

interface CSSOutputProps {
  css: string;
}

export default function CSSOutput({ css }: CSSOutputProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(css);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-2">
      <div className="flex justify-between items-center">
        <label className="text-sm font-medium">CSS</label>
        <Button variant="ghost" size="sm" onClick={handleCopy}>
          <ClipboardIcon className="w-4 h-4 mr-2" />
          {copied ? "Copied!" : "Copy"}
        </Button>
      </div>
      <Textarea
        value={css}
        readOnly
        className="bg-[#D9DAB0] rounded-md p-2 text-sm font-mono min-h-[100px]"
      />
    </div>
  );
}
