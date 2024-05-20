import React, { type FC, type ReactElement, type ReactNode } from 'react';
import { type IcommonNode } from './types';

export function Icommon({ node, width, height }: IcommonProps): ReactElement {
  const Component = node[0] as unknown as FC<Record<string, ReactNode>>;

  return (
    <Component {...{ ...node[1], width, height }}>
      {/* eslint-disable-next-line react/no-array-index-key -- idx used because node doesn't have any better candidate */}
      {node[2]?.map((v, idx) => <Icommon node={v} key={idx} />)}
    </Component>
  );
}

interface IcommonProps {
  node: IcommonNode;
  width?: string;
  height?: string;
}
