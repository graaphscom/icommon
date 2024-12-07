export type IcommonNode = [
  string,
  Record<string, string | number>,
  IcommonNode[]?,
];

export interface IcommonProps {
  node: IcommonNode;
  width?: string;
  height?: string;
  size?: string;
  fallbackSize?: string;
  omitFill?: boolean;
}
