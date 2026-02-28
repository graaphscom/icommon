import { defineConfig } from "tsup";

export default defineConfig((options) => ({
  entry: ["src/Icommon.tsx", "src/modifiers.ts", "src/types.ts"],
  format: ["cjs", "esm"],
  dts: true,
  external: ["react"],
  ...options,
}));
