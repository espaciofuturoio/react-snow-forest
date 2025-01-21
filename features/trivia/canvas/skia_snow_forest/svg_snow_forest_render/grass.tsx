import React from "react";
import { G } from "react-native-svg";
import { GrassPaths } from "./paths";

type Props = {
  color?: string;
  scale: number;
  y: number;
  count: number;
  grassWidth: number;
};

const defaultColors = [
  "red",
  "blue",
  "#228B22",
  "yellow",
  "#008000",
  "#98FB98",
];

export const Grass = ({ color, scale, y, count, grassWidth }: Props) => {
  return (
    <G clipPath="url(#clip0)">
      {Array.from({ length: count }, (_, i) => (
        <G
          key={`${i}-${y}-${scale}`}
          transform={`translate(${i * grassWidth * scale}, ${y}) scale(${scale})`}
          fill={color ?? defaultColors[i % defaultColors.length]}
        >
          <GrassPaths />
        </G>
      ))}
    </G>
  );
};
