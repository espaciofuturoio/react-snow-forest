import React from "react";
import { G } from "react-native-svg";
import { TreePathA, TreePathB, TreePathC } from "./paths";
import { randChoice } from "./utils";

const treePaths = [TreePathA, TreePathB, TreePathC];

type Props = {
  x?: number;
  y?: number;
  scale?: number;
  color?: string;
};

export const Tree = ({ x = 0, y = 0, scale = 1, color = "#7DA7D8" }: Props) => {
  const RandomTreePath = randChoice(treePaths);
  return (
    <G transform={`translate(${x}, ${y}) scale(${scale})`} fill={color}>
      <RandomTreePath />
    </G>
  );
};
