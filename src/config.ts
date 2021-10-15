import { Easing } from "remotion";

type InterpolateOptions = {
  easing?: (input: number) => number;
  extrapolateLeft?: "extend" | "identity" | "clamp";
  extrapolateRight?: "extend" | "identity" | "clamp";
};

export const INTERPOLATE_OPTS: InterpolateOptions = {
  easing: Easing.bezier(0.25, 0.1, 0.25, 1),
  extrapolateLeft: "clamp",
  extrapolateRight: "clamp",
};
