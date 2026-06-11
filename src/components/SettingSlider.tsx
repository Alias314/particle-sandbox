import { Label } from "./ui/label";
import { Slider } from "./ui/slider";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export default function SettingSlider({
  label,
  defaultValue,
  min,
  max,
  step,
  setValueLabel,
  onUpdate,
  tooltip,
}) {
  return (
    <div className="gap-4">
      <div className="mb-2 flex justify-between">
        <Tooltip>
          <TooltipTrigger>
            <Label className="text-xl text-gray-100">{label}</Label>
          </TooltipTrigger>
          <TooltipContent className="text-justify" side="left">
            <p className="text-lg">{tooltip}</p>
          </TooltipContent>
        </Tooltip>

        <Label className="text-xl text-gray-100">
          {Array.isArray(defaultValue)
            ? defaultValue.join(" - ")
            : defaultValue}
        </Label>
      </div>

      <Slider
        defaultValue={Array.isArray(defaultValue) ? defaultValue : [defaultValue]}
        min={min}
        max={max}
        step={step}
        onValueChange={(value) => {
          setValueLabel(value);
          onUpdate(value);
        }}
      />
    </div>
  );
}
