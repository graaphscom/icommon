import React, { type FC, type ReactElement, type ReactNode } from 'react';
import { type IcommonNode } from './types';

export function Icommon({
  node,
  width,
  height,
  size,
  fallbackSize = '24',
}: IcommonProps): ReactElement {
  const Component = node[0] as unknown as FC<Record<string, ReactNode>>;
  delete node[1]['style'];

  return (
    <Component
      {...{
        ...node[1],
        ...(node[0] == 'svg' &&
          !node[1]['width'] &&
          !node[1]['height'] && { width: fallbackSize, height: fallbackSize }),
        ...(width && { width }),
        ...(height && { height }),
        ...(!width && !height && size && { width: size, height: size }),
      }}
    >
      {/* eslint-disable-next-line react/no-array-index-key -- idx used because node doesn't have any better candidate */}
      {node[2]?.map((v, idx) => <Icommon node={v} key={idx} />)}
    </Component>
  );
}

interface IcommonProps {
  node: IcommonNode;
  width?: string;
  height?: string;
  size?: string;
  fallbackSize?: string;
}
