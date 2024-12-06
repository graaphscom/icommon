import React, {
  AllHTMLAttributes,
  CSSProperties,
  type FC,
  type ReactElement,
} from 'react';
import { type IcommonNode } from './types';

export function Icommon({
  node,
  width,
  height,
  size,
  fallbackSize = '24',
}: IcommonProps): ReactElement {
  const Component = node[0] as unknown as FC<AllHTMLAttributes<unknown>>;
  const { style, ...noStyleProps } = node[1];
  const styleObj =
    typeof style == 'string' ? cssStringToProperties(style) : undefined;

  return (
    <Component
      {...{
        ...noStyleProps,
        ...(node[0] == 'svg' &&
          !noStyleProps['width'] &&
          !noStyleProps['height'] && {
            width: fallbackSize,
            height: fallbackSize,
          }),
        ...(width && { width }),
        ...(height && { height }),
        ...(!width && !height && size && { width: size, height: size }),
        style: styleObj,
      }}
    >
      {/* eslint-disable-next-line react/no-array-index-key -- idx used because node doesn't have any better candidate */}
      {node[2]?.map((v, idx) => <Icommon node={v} key={idx} />)}
    </Component>
  );
}

const cssStringToProperties = (css: string): CSSProperties =>
  css.split(';').reduce((prev, curr) => {
    const [cssProp, cssVal] = curr.split(':');
    return {
      ...prev,
      [cssProp.replace(/-./g, (x) => x[1].toUpperCase())]: cssVal,
    };
  }, {});

interface IcommonProps {
  node: IcommonNode;
  width?: string;
  height?: string;
  size?: string;
  fallbackSize?: string;
}
