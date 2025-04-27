const config = {
  testEnvironment: "jsdom",
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1",
  },
  roots: ["<rootDir>/__tests__"],
  collectCoverage: true,
  coverageDirectory: "coverage",
  coverageReporters: ["text", "html"],
};

export default config;
