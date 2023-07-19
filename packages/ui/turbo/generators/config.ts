import type { PlopTypes } from "@turbo/gen";
import { componentGenerator } from "./componentGenerator";

export default function generator(plop: PlopTypes.NodePlopAPI): void {
  // create a generator
  plop.setGenerator("component", componentGenerator(plop));
}