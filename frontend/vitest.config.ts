import { defineConfig, mergeConfig } from "vitest/config";

import viteConfig from "./vite.config";

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      setupFiles: ["./vitest.setup.ts"],
      environment: "jsdom",
      include: ["src/**/*.test.{ts,tsx}"],
      css: {
        include: /.+/,
        modules: {
          classNameStrategy: "scoped",
        },
      },
    },
  }),
);