import { IcommonModifier } from "./types";

export const setViewBox =
  (viewBox: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], viewBox }, initial[2]];
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

export const setSize =
  (width: number | "auto", height: number | "auto" = "auto"): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    const newAttributes = { ...initial[1] };

    let style =
      typeof initial[1].style === "string" ? initial[1].style.trim() : "";
    if (width === "auto") {
      style = stylePropSeparator(style) + "width: auto";
      delete newAttributes.width;
    }
    if (height === "auto") {
      style = stylePropSeparator(style) + "height: auto";
      delete newAttributes.height;
    }

    if (style) {
      newAttributes.style = style;
    }
    if (width !== "auto") {
      newAttributes.width = width;
    }
    if (height !== "auto") {
      newAttributes.height = height;
    }

    return [initial[0], newAttributes, initial[2]];
  };

const stylePropSeparator = (style: string) =>
  style.at(-1) === ";" || style === "" ? "" : ";";

export const setRootStrokeWidth =
  (strokeWidth: number): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], strokeWidth }, initial[2]];
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

export const setRootStroke =
  (stroke: string): IcommonModifier =>
  (initial) => {
    if (initial[0] !== "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], stroke }, initial[2]];
  };

export const setDeepFill =
  (fill: string, fillToReplace: string): IcommonModifier =>
  (initial) => {
    if (initial[0] === "svg" || initial[1].fill !== fillToReplace) {
      return initial;
    }

    return [initial[0], { ...initial[1], fill }, initial[2]];
  };

export const removeDeepFill =
  (fillToRemove: string): IcommonModifier =>
  (initial) => {
    if (initial[0] === "svg" || initial[1].fill !== fillToRemove) {
      return initial;
    }

    const newAttributes = { ...initial[1] };
    delete newAttributes.fill;

    return [initial[0], newAttributes, initial[2]];
  };

export const setDeepClassName =
  (className: string): IcommonModifier =>
  (initial) => {
    if (initial[0] === "svg") {
      return initial;
    }

    return [initial[0], { ...initial[1], className }, initial[2]];
  };

export const setClosedPathsFill =
  (fill: string): IcommonModifier =>
  (initial) => {
    if (
      typeof initial[1].d !== "string" ||
      !isPathExplicitlyClosed(initial[1].d)
    ) {
      return initial;
    }

    return [initial[0], { ...initial[1], fill }, initial[2]];
  };

const isPathExplicitlyClosed = (pathData: string): boolean =>
  "z" === pathData.trim().at(-1)?.toLowerCase();

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
