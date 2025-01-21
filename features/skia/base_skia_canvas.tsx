import { Box } from "@/components/gluestack-ui/box";
import { Canvas, Group } from "@shopify/react-native-skia";
import type { Engine } from "matter-js";
import type React from "react";
import { useCallback, useState } from "react";
import { type GestureResponderHandlers, StyleSheet } from "react-native";
import { runOnJS, useFrameCallback } from "react-native-reanimated";

export const BaseSkiaCanvas = ({
  children,
  updateEngine,
  panHandlers,
  renderBodies,
  engine,
}: {
  children?: React.ReactNode;
  updateEngine: () => void;
  panHandlers: GestureResponderHandlers;
  renderBodies: (engine: Engine) => React.ReactNode;
  engine: Engine;
}) => {
  "use no memo";
  const [, setTick] = useState([]);

  const tick = useCallback(() => {
    updateEngine();
    setTick([]);
  }, [updateEngine]);

  useFrameCallback(() => {
    runOnJS(tick)();
  });

  return (
    <Box className="flex-1" {...panHandlers}>
      <Canvas style={styles.canvas} mode="continuous">
        <Group>{renderBodies(engine)}</Group>
      </Canvas>
      <Box style={styles.contentContainer} pointerEvents="box-none">
        {children}
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  canvas: {
    flex: 1,
    backgroundColor: "transparent",
  },
  contentContainer: {
    ...StyleSheet.absoluteFillObject,
  },
});
