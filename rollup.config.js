import babel from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import replace from "@rollup/plugin-replace"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"

import { defineConfig } from "rollup"
import { visualizer } from "rollup-plugin-visualizer"
import dts from "rollup-plugin-dts"

import pkg from "./package.json" assert { type: "json" }

export default defineConfig([
  {
    input: "src/index.ts",
    output: [
      { file: pkg.main, format: "cjs", sourcemap: true },
      { file: pkg.module, format: "es", sourcemap: true },
    ],
    plugins: [
      commonjs(),
      babel({
        exclude: "node_modules/**",
        babelHelpers: "bundled",
      }),
      nodeResolve(),
      typescript(),
      terser(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("development"),
        preventAssignment: true,
      }),
      visualizer(),
    ],
    external: ["react"],
  },
  {
    input: "dist/types/index.d.ts",
    output: [{ file: "dist/index.d.ts", format: "es" }],
    plugins: [dts()],
  },
])
