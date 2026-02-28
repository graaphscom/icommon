import React, {
  AllHTMLAttributes,
  CSSProperties,
  type ReactNode,
  type FC,
} from "react";
import { IcommonNode, IcommonProps } from "./types";

export const Icommon = ({
  node,
  modifiers,
  className,
}: IcommonProps): ReactNode => {
  const modifiedNode = modifiers
    ? modifiers?.reduce<IcommonNode>((prev, curr) => curr(prev), node)
    : node;

  const Component = modifiedNode[0] as unknown as FC<
    AllHTMLAttributes<unknown>
  >;
  const { style, ...noStyleProps } = modifiedNode[1];
  const styleObj =
    typeof style == "string" ? cssStringToProperties(style) : undefined;

  return (
    <Component
      {...{
        ...noStyleProps,
        style: styleObj,
        className,
      }}
    >
      {modifiedNode[2].map((v, idx) => (
        <Icommon node={v} key={idx} modifiers={modifiers} />
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
