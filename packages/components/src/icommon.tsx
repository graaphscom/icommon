import clsx from "clsx";
import React, {
  AllHTMLAttributes,
  CSSProperties,
  type FC,
  type ReactNode,
} from "react";
import { IcommonNode, IcommonProps } from "./types";

export const Icommon = ({
  node,
  modifiers,
  className: componentClassName,
}: IcommonProps): ReactNode => {
  const modifiedNode = modifiers
    ? modifiers?.reduce<IcommonNode>((prev, curr) => curr(prev), node)
    : node;

  const Component = modifiedNode[0] as unknown as FC<
    AllHTMLAttributes<unknown>
  >;
  const { style, className: icommonNodeClassName, ...noStyleProps } = modifiedNode[1];
  const styleObj =
    typeof style == "string" ? cssStringToProperties(style) : undefined;

  return (
    <Component
      {...{
        style: styleObj,
        className: clsx(componentClassName, icommonNodeClassName),
        ...noStyleProps,
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
