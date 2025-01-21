import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import { Engine } from "matter-js";
import { useCallback, useRef } from "react";
import { PanResponder } from "react-native";
import { UPDATE_RATE } from "./constants";
import { useMatterWorld } from "./use_matter_world";
import { useSnowflakes } from "./use_snowflakes";
import { useWalls } from "./use_walls";

export const useSnowForest = () => {
  const { width: SCREEN_WIDTH, height: SCREEN_HEIGHT } = useWindowDimensions();
  const engine = useMatterWorld({});

  const { addSnowflake } = useSnowflakes(engine);

  useWalls(engine, { screenWidth: SCREEN_WIDTH, screenHeight: SCREEN_HEIGHT });

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: (evt) => {
        const touchX = evt.nativeEvent.pageX;
        const touchY = evt.nativeEvent.pageY;
        addSnowflake(touchX, touchY);
      },
    }),
  ).current;

  const updateEngine = useCallback(() => {
    Engine.update(engine, UPDATE_RATE);
  }, [engine]);

  return {
    panHandlers: panResponder.panHandlers,
    updateEngine,
    engine,
    addSnowflake,
  };
};
