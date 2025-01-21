import { Box } from "@/components/gluestack-ui/box";
import { useLocalSearchParams } from "expo-router";
import { SkiaSnowForest } from "./skia_snow_forest/canvas";

const Canvas = () => {
  const { lang = "en" } = useLocalSearchParams<{ lang?: string }>();

  console.log("lang", lang);

  return (
    <Box className="flex-1" tabIndex={0}>
      <SkiaSnowForest />
    </Box>
  );
};

export default Canvas;
