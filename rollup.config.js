import babel from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"
import commonjs from "@rollup/plugin-commonjs"
import replace from "@rollup/plugin-replace"
import typescript from "@rollup/plugin-typescript"
import terser from "@rollup/plugin-terser"

import { defineConfig } from "rollup"
import { visualizer } from "rollup-plugin-visualizer"

import pkg from "./package.json" assert { type: "json" }

export default defineConfig({
  input: "src/index.ts",
  output: { file: pkg.main, format: "es", sourcemap: true },
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
})
