import { Bodies, Composite, type Engine } from "matter-js";
import { useCallback } from "react";
import { Platform } from "react-native";
import { BodyTypes } from "./constants";

const MAX_BODIES_THRESHOLD = Platform.OS === "web" ? 400 : 20;

export const useSnowflakes = (engine: Engine) => {
  // biome-ignore lint/correctness/useExhaustiveDependencies: engine is a react ref
  const addSnowflake = useCallback((x: number, y: number) => {
    const radius = Math.random() * (7 - 6) + 6;
    const particle = Bodies.circle(x, y, radius, {
      density: 0.0005,
      frictionAir: 0.06,
      restitution: 0.3,
      friction: 0.01,
      label: BodyTypes.Snowflake,
    });
    Composite.add(engine.world, particle);
    if (engine.world.bodies.length > MAX_BODIES_THRESHOLD) {
      removeFirstSnowflake();
    }
  }, []);

  // biome-ignore lint/correctness/useExhaustiveDependencies: engine is a react re
  const removeFirstSnowflake = useCallback(() => {
    const bodies = engine.world.bodies.filter(
      (body) => body.label === BodyTypes.Snowflake,
    );
    if (bodies.length > 0) {
      Composite.remove(engine.world, bodies[0]);
    }
  }, []);

  return {
    addSnowflake,
    removeFirstSnowflake,
  };
};
