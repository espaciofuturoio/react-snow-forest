import { Group, Path } from "@shopify/react-native-skia";
import { Dimensions } from "react-native";
import { REFERENCE_WIDTH } from "../matterjs/constants";
import { SNOW_FLAKE_PATHS } from "./paths";
const { width: canvasWidth, height: canvasHeight } = Dimensions.get("window");

export const SnowFlake = ({
  cx = canvasWidth / 2,
  cy = canvasHeight / 2,
  r,
}: { cx: number; cy: number; r: number }) => {
  const viewportSize = 128;
  let scale = (r * 2) / viewportSize;

  if (canvasWidth < REFERENCE_WIDTH) {
    scale *= canvasWidth / REFERENCE_WIDTH;
  }

  return (
    <Group transform={[{ translateX: cx }, { translateY: cy }]}>
      <Group transform={[{ scale: scale }]}>
        {SNOW_FLAKE_PATHS.map((path) => (
          <Path key={path.id} path={path.path} color={path.color} />
        ))}
      </Group>
    </Group>
  );
};
