import { Text } from "@/components/gluestack-ui/text";
import { BaseSkiaCanvas } from "@/features/skia/base_skia_canvas";
import { SkiaOverlay } from "@/features/skia/skia_overlay";
import { useWindowDimensions } from "@/hooks/use-window-dimensions";
import useEffectOnce from "react-use/lib/useEffectOnce";
import { useSnowForest } from "./matterjs";
import { BodyTypes } from "./matterjs/constants";
import { SvgSnowForestRender } from "./svg_snow_forest_render";
import { SnowFlake } from "./svg_snow_forest_render/snowflake";

const SkiaSnowForestCanvas = ({ children }: { children?: React.ReactNode }) => {
  const { panHandlers, updateEngine, engine, addSnowflake } = useSnowForest();
  const { width: SCREEN_WIDTH } = useWindowDimensions();

  useEffectOnce(() => {
    const interval = setInterval(() => {
      addSnowflake(Math.random() * SCREEN_WIDTH, 0);
    }, 1000);
    return () => clearInterval(interval);
  });

  const renderBodies = () => (
    <>
      {engine.world.bodies
        .filter((body) => body.label === BodyTypes.Snowflake)
        .map((body) => {
          return (
            <SnowFlake
              key={body.id}
              cx={body.position.x}
              cy={body.position.y}
              r={body.circleRadius ?? 0}
            />
          );
        })}
    </>
  );

  return (
    <BaseSkiaCanvas
      updateEngine={updateEngine}
      panHandlers={panHandlers}
      renderBodies={renderBodies}
      engine={engine}
    >
      {children}
    </BaseSkiaCanvas>
  );
};

export const SkiaSnowForest = ({
  children,
}: { children?: React.ReactNode }) => {
  return (
    <>
      <SvgSnowForestRender />
      <SkiaSnowForestCanvas>
        <SkiaOverlay>{children}</SkiaOverlay>
      </SkiaSnowForestCanvas>
    </>
  );
};
