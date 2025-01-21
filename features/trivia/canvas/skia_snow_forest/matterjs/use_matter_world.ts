import { Engine, type IEngineDefinition } from "matter-js";
import { useRef } from "react";

export const useMatterWorld = (engineDefinition: IEngineDefinition) => {
  const engine = useRef(Engine.create(engineDefinition)).current;
  return engine;
};
