export type IcommonNode = [
  string,
  Record<string, string | number>,
  IcommonNode[],
];

export interface IcommonProps {
  node: IcommonNode;
  className?: string;
  modifiers?: IcommonModifier[];
}

export type IcommonModifier = (initial: IcommonNode) => IcommonNode;
