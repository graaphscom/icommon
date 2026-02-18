import { config } from "@icommon/eslint-config/base";

/** @type {import("eslint").Linter.Config} */
export default [...config, { files: ["dist/**/*.js", "dist/**/*.d.ts"] }];
