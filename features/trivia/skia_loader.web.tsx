import { CenteredLoader } from "@/components/loader";
import { WithSkiaWeb } from "@shopify/react-native-skia/lib/module/web";
export const SkiaCanvasLoader = () => (
  <WithSkiaWeb
    getComponent={() => import("./canvas")}
    fallback={<CenteredLoader />}
  />
);
