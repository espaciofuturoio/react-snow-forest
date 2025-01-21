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
    justifyContent: "center",
    alignItems: "center",
  },
  loadingText: {
    color: "#333",
    fontSize: 20,
    fontWeight: "bold",
  },
});
