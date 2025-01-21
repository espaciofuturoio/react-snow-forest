import React from "react";
import { Circle, G } from "react-native-svg";

type Props = {
  pallette: string[];
  width: number;
  height: number;
};

export const Sun = ({ pallette, width, height }: Props) => {
  const sunRadius = 120.863;
  const sunScale = Math.min(width, height) / (8 * sunRadius);
  const offsetX = width - sunRadius * sunScale;
  const offsetY = sunRadius * sunScale;

  return (
    <G transform={`translate(${offsetX}, ${offsetY}) scale(${sunScale})`}>
      <Circle cx="0" cy="0" r={sunRadius} fill={pallette[6]} />
      <Circle cx="0" cy="0" r={0.8 * sunRadius} fill={pallette[7]} />
      <Circle cx="0" cy="0" r={0.6 * sunRadius} fill={pallette[8]} />
      <Circle cx="0" cy="0" r={0.4 * sunRadius} fill={pallette[9]} />
    </G>
  );
};
