import { titleCase } from "@/utils/string";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { Label } from "./ui/label";

export default function Dropdown({
  placeholder,
  list,
  label,
  tooltip,
  onClick,
}) {
  return (
    <Select>
      <Tooltip>
        <TooltipTrigger>
          <Label className="text-xl text-gray-100">{label}</Label>
        </TooltipTrigger>
        <TooltipContent className="text-justify" side="left">
          <p className="text-lg">{tooltip}</p>
        </TooltipContent>
      </Tooltip>
      <SelectTrigger className="w-full text-gray-100 text-xl bg-slate-800 rounded-sm data-placeholder:text-gray-100 focus-visible:ring-0">
        <SelectValue placeholder={titleCase(placeholder)} />
      </SelectTrigger>
      <SelectContent
        className="text-xl text-gray-100 bg-slate-800 rounded-sm"
        position="popper"
        align="start"
      >
        <SelectGroup>
          {list.map((item, key) => (
            <SelectItem
              key={key}
              className="text-xl"
              value={item}
              onClick={() => onClick(item)}
            >
              {titleCase(item)}
            </SelectItem>
          ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}
