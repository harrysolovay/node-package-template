import {Config} from "@jest/types";

export default ((): Config.InitialOptions => ({
    cache: false,
    roots: ["<rootDir>/src"],
    testEnvironment: "node",
    testMatch: ["**/*.test.ts"],
    testPathIgnorePatterns: ["node_modules"],
    transform: {
        "^.+\\.(t|j)sx?$": "@swc/jest",
    },
    verbose: false,
}))();
