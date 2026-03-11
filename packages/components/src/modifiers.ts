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

export const setStrokeWidth =
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

export const set2xSize =
  (fallback: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    const oldWidth = Number(initial[1].width);
    const width = isNaN(oldWidth) ? fallback : oldWidth * 2;

    const oldHeight = Number(initial[1].height);
    const height = isNaN(oldHeight) ? fallback : oldHeight * 2;

    return [initial[0], { ...initial[1], width, height }, initial[2]];
  };

export const setWidthAutoHeight =
  (width: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], width, height: "auto" }, initial[2]];
  };

export const setHeightAutoWidth =
  (height: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], width: "auto", height }, initial[2]];
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

export const setRootFill =
  (fill: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], fill }, initial[2]];
  };

export const setRootColor =
  (color: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], color }, initial[2]];
  };

export const setDeepFill =
  (fill: string, fillToReplace: string): IcommonModifier =>
  (initial) => {
    if (initial[0] === "svg" || initial[1].fill !== fillToReplace) {
      return initial;
    }

    return [initial[0], { ...initial[1], fill }, initial[2]];
  };

export const setRootStroke =
  (stroke: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], stroke }, initial[2]];
  };

export const setUniconsFill =
  (
    primary: string,
    secondary: string,
    tertiary: string,
    quaternary: string,
  ): IcommonModifier =>
  (initial) => {
    const applicableClasses = new Set([
      "uim-primary",
      "uim-secondary",
      "uim-tertiary",
      "uim-quaternary",
    ]);
    const classAttr = initial[1].className;
    if (
      initial[0] === "svg" ||
      typeof classAttr !== "string" ||
      !applicableClasses.has(classAttr)
    ) {
      return initial;
    }

    const classToFill: Record<string, string> = {
      "uim-primary": primary,
      "uim-secondary": secondary,
      "uim-tertiary": tertiary,
      "uim-quaternary": quaternary,
    };

    return [
      initial[0],
      { ...initial[1], fill: classToFill[classAttr] },
      initial[2],
    ];
  };
