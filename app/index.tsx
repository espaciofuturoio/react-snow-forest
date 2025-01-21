import { SkiaCanvasLoader } from "@/features/trivia/skia_loader";
import { SafeAreaView } from "react-native";

export default function Index() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
      }}
    >
      <SkiaCanvasLoader />
    </SafeAreaView>
  );
}
