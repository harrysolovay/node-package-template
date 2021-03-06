import {Config} from "@jest/types";
import path from "path";

export default ((): Config.InitialOptions => ({
  cache: false,
  globals: {
    "ts-jest": {
      diagnostics: false,
      tsconfig: path.resolve(__dirname, "tsconfig.json"),
    },
  },
  preset: "ts-jest",
  roots: ["<rootDir>/src"],
  testEnvironment: "node",
  testMatch: ["**/*.test.ts"],
  testPathIgnorePatterns: ["node_modules"],
  verbose: false,
}))();
