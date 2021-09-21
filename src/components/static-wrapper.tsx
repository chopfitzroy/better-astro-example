import { JSX } from 'preact';
import { OptionalChildren } from "../types/components";

const StaticWrapper = ({ children = null }: OptionalChildren = {}): JSX.Element => {
  return <div class="bg-blue-300 p-4 mb-8">{children}</div>;
};

export default StaticWrapper;
