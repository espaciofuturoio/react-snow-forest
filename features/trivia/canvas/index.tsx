import { Box } from "@/components/gluestack-ui/box";
import { Icon, RepeatIcon } from "@/components/gluestack-ui/icon";
import { useState } from "react";
import { TouchableOpacity } from "react-native";
import { SkiaSnowForest } from "./skia_snow_forest/canvas";

const Canvas = () => {
  const [key, setKey] = useState(0);
  return (
    <Box className="flex-1" tabIndex={0}>
      <SkiaSnowForest key={key}>
        <TouchableOpacity className="p-4" onPress={() => setKey(key + 1)}>
          <Icon as={RepeatIcon} size="xl" color="white" />
        </TouchableOpacity>
      </SkiaSnowForest>
    </Box>
  );
};

export default Canvas;
