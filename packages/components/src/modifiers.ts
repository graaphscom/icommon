import { IcommonModifier } from "./types";

export const setViewBox =
  (viewBox: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], viewBox }, initial[2]];
  };

export const omitFill: IcommonModifier = (initial) => {
  if (!initial[1].fill) {
    return initial;
  }

  const modified = { ...initial[1] };
  delete modified.fill;

  return [initial[0], modified, initial[2]];
};

export const setStroke =
  (strokeWidth: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], strokeWidth }, initial[2]];
  };

export const setSizeIfAbsent =
  (size: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg" || initial[1].width || initial[1].height) {
      return initial;
    }

    return [
      initial[0],
      { ...initial[1], width: size, height: size },
      initial[2],
    ];
  };

export const setSize =
  (size: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [
      initial[0],
      { ...initial[1], width: size, height: size },
      initial[2],
    ];
  };
