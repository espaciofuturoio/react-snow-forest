import { Dimensions } from "react-native";
import { Tree } from "./tree";
import { random } from "./utils";
type Props = {
  color: string;
  scale: number;
  count: number;
  y: number;
  treeWidth: number;
};

const { width } = Dimensions.get("window");

export const TreeLine = ({ color, scale, count, y, treeWidth }: Props) => {
  const scaledTreeWidth = treeWidth * scale; // Use the original tree width and apply the scale factor
  const spacing = (width - scaledTreeWidth * count) / (count + 1); // Calculate the spacing between trees
  const maxOffset = scaledTreeWidth / 2; // Maximum offset to avoid cropping more than half the tree width

  return (
    <>
      {Array.from({ length: count }).map((_, i) => {
        const baseX = spacing + i * (scaledTreeWidth + spacing); // Base x position for each tree
        const offsetX = (random() - 0.5) * maxOffset * 2; // Random offset within the range [-maxOffset, maxOffset]
        const x = baseX + offsetX; // Apply the random offset to the base x position
        return (
          <Tree
            x={x}
            y={y}
            color={color}
            scale={scale}
            key={`${i}-${y}-${scale}`}
          />
        );
      })}
    </>
  );
};
