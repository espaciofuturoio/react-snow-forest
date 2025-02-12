import { ActivityIndicator, Animated, StyleSheet } from "react-native";

export const CenteredLoader = () => {
  return (
    <Animated.View style={[styles.loadingContainer]}>
      <LoadingIndicator />
    </Animated.View>
  );
};

export const LoadingIndicator = () => (
  <ActivityIndicator size="large" color="#0000ff" />
);

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
});
