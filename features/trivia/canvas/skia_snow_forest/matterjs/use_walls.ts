import { Bodies, type Body, Composite, type Engine } from "matter-js";
import { useEffect } from "react";

const WALL_THICKNESS = 50.5;
const OFFSET = 10;

function createWall(
  x: number,
  y: number,
  width: number,
  height: number,
  id?: number,
): Body {
  return Bodies.rectangle(x, y, width, height, {
    isStatic: true,
    ...(id ? { id } : {}),
    label: "wall",
  });
}

type CreateWallOptions = {
  screenWidth: number;
  screenHeight: number;
};

export const createWalls = ({
  screenWidth,
  screenHeight,
}: CreateWallOptions): Body[] => {
  const totalWidth = screenWidth + 2 * OFFSET;
  const totalHeight = screenHeight + 2 * OFFSET;

  const topWall = createWall(
    screenWidth / 2,
    -OFFSET,
    totalWidth,
    WALL_THICKNESS,
  );
  const bottomWall = createWall(
    screenWidth / 2,
    screenHeight + OFFSET,
    totalWidth,
    WALL_THICKNESS,
  );
  const leftWall = createWall(
    -OFFSET,
    screenHeight / 2,
    WALL_THICKNESS,
    totalHeight,
  );
  const rightWall = createWall(
    screenWidth + OFFSET,
    screenHeight / 2,
    WALL_THICKNESS,
    totalHeight,
  );

  return [topWall, leftWall, rightWall, bottomWall];
};

export function useWalls(
  engine: Engine,
  { screenWidth, screenHeight }: CreateWallOptions,
) {
  // biome-ignore lint/correctness/useExhaustiveDependencies: engine is a react ref
  useEffect(() => {
    console.log("adding walls");
    const previousWalls = engine.world.bodies.filter(
      (body) => body.label === "wall",
    );
    for (const wall of previousWalls) {
      Composite.remove(engine.world, wall);
    }
    Composite.add(
      engine.world,
      createWalls({
        screenHeight,
        screenWidth,
      }),
    );
  }, [screenWidth, screenHeight]);
}
