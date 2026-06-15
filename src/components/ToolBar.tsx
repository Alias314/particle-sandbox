import { Grid2X2 } from "lucide-react";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { Toggle } from "./ui/toggle";

export default function ToolBar() {
  return (
    <ButtonGroup className="absolute bottom-4 left-1/2 -translate-x-1/2">
      <Toggle>
        <Grid2X2 className="size-8" />
      </Toggle>
      <Button className="text-white text-xl">
        Test
      </Button>
      <Button className="text-white">
        Test
      </Button>
      <Button className="text-white">
        Test
      </Button>
    </ButtonGroup>
  );
}