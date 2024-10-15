module.exports = {
    transform: {
      "^.+\\.(js|jsx|ts|tsx)$": "babel-jest",
    },
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx'],
    testEnvironment: "jsdom", 
    transformIgnorePatterns: ["/node_modules/"],
    collectCoverage: true,  // Collects coverage
    coverageDirectory: 'coverage',  // Directory to store coverage results
    coverageReporters: ['text', 'lcov'],  // Types of reports to generate
  };
  