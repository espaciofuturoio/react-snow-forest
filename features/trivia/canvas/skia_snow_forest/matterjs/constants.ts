import { Platform } from "react-native";

export enum BodyTypes {
  Snowflake = "snowflake",
  Wall = "wall",
  Balloon = "balloon",
}

export const REFERENCE_WIDTH = 600;
export const UPDATE_RATE = Platform.OS === "web" ? 1000 / 60 : 1000 / 24;
