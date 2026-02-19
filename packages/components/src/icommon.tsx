import React, {
  AllHTMLAttributes,
  CSSProperties,
  type ReactNode,
  type FC,
} from "react";
import { IcommonProps } from "./types";

export const Icommon = ({
  node,
  width,
  height,
  size,
  fallbackSize = "24",
  omitFill = false,
  viewBox,
}: IcommonProps): ReactNode => {
  const Component = node[0] as unknown as FC<AllHTMLAttributes<unknown>>;
  const { style, fill, ...noStyleProps } = node[1];
  const styleObj =
    typeof style == "string" ? cssStringToProperties(style) : undefined;

  return (
    <Component
      {...{
        ...noStyleProps,
        ...(node[0] == "svg" &&
          !noStyleProps["width"] &&
          !noStyleProps["height"] && {
            width: fallbackSize,
            height: fallbackSize,
          }),
        ...(viewBox && { viewBox }),
        ...(width && { width }),
        ...(height && { height }),
        ...(!width && !height && size && { width: size, height: size }),
        ...(!omitFill && { fill }),
        style: styleObj,
      }}
    >
      {/* eslint-disable-next-line react/no-array-index-key -- idx used because node doesn't have any better candidate */}
      {node[2]?.map((v, idx) => (
        <Icommon node={v} key={idx} omitFill={omitFill} />
      ))}
    </Component>
  );
};

const cssStringToProperties = (css: string): CSSProperties =>
  css.split(";").reduce((prev, curr) => {
    const [cssProp, cssVal] = curr.split(":");
    return {
      ...prev,
      [cssProp.replace(/-./g, (x) => x[1].toUpperCase())]: cssVal,
    };
  }, {});
