import { Box } from "@/components/gluestack-ui/box";
import { Text } from "@/components/gluestack-ui/text";
import { useLocalSearchParams } from "expo-router";

const Canvas = () => {
  const { lang = "en" } = useLocalSearchParams<{ lang?: string }>();

  console.log("lang", lang);

  return (
    <Box className="flex-1" tabIndex={0}>
      <Text>Hello</Text>
    </Box>
  );
};

export default Canvas;
