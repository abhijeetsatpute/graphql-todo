module.exports = {
  transform: {
    "^.+\\.ts?$": "ts-jest",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.ts?$",
  moduleFileExtensions: ["ts"],
  collectCoverage: true,
  clearMocks: true,
  coverageDirectory: "coverage",
};
