import { interpolate, useCurrentFrame } from "remotion";
import { INTERPOLATE_OPTS } from "../config";
import { useAnimation } from "./AnimationProvider";
import Base, { BaseProps } from "./Base";

const ANIMATE_AFTER = ["o", "s"];

export type AnimatedProps = BaseProps & {
  scenes?: { [key: string]: Partial<BaseProps> };
  offset?: number;
};

const Animated = ({ scenes = {}, offset = 0, ...props }: AnimatedProps) => {
  const frame = useCurrentFrame();
  const animation = useAnimation();

  // Current scene
  const _scenes = Object.entries(animation.scenes)
    .filter(([, v]) => v[0] <= frame && frame < v[1] + 40)
    .map(([k]) => k);

  if (_scenes.length === 0) return null;
  if (_scenes.length === 1) return <Base {...props} {...scenes[_scenes[0]]} />;

  const [from, to] = _scenes;
  const fromFrame = animation.scenes[to][0];
  const toFrame = animation.scenes[from][1];
  const duration = toFrame - fromFrame;

  const fromProps = scenes[from] ?? {};
  const toProps = scenes[to] ?? {};

  const fromKeys = Object.keys(fromProps) as (keyof BaseProps)[];
  const toKeys = Object.keys(toProps) as (keyof BaseProps)[];

  const keyMapper = (key: keyof BaseProps) => {
    const fromValue = scenes[from]?.[key];
    const toValue = scenes[to]?.[key];

    if (fromValue === undefined && toValue === undefined) return undefined;
    if (fromValue === undefined) return toValue;
    if (toValue === undefined) return fromValue;

    if (typeof fromValue !== "number" || typeof toValue !== "number") {
      return frame >= fromFrame + duration / 2 ? toValue : fromValue;
    }

    let sectionOffset = ANIMATE_AFTER.includes(key) ? duration / 3 : 0;
    if (sectionOffset !== 0 && toValue < fromValue) sectionOffset = -sectionOffset;

    return interpolate(
      frame,
      [fromFrame + duration / 3 + offset + sectionOffset, toFrame - duration / 3 + offset + sectionOffset],
      [fromValue, toValue],
      INTERPOLATE_OPTS
    );
  };

  const mergedProps = {
    ...Object.fromEntries(fromKeys.map((x) => [x, keyMapper(x)])),
    ...Object.fromEntries(toKeys.map((x) => [x, keyMapper(x)])),
  };

  return <Base {...props} {...mergedProps} />;
};

export default Animated;
