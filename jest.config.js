// module.exports = {
//   rootDir: "/",
//   testEnvironment: 'node',
//   preset: 'ts-jest',
//   transform: {
//     "^.+\\.(ts|tsx|js|jsx)$": "ts-jest",
//     "^.+\\.tsx?$": "ts-jest",
//    "^.+\\.(j|t)sx?$": "babel-jest",
//   "^.+\\.(js|jsx)$": "babel-jest",
//    "^.+\\.[t|j]sx?$": "babel-jest"
//   },
//  moduleNameMapper: {
//   "\\.(css|scss)$": "identity-obj-proxy"
// },
// collectCoverage: true,
// coverageDirectory: "<rootDir>/coverage/",
// collectCoverageFrom: [ "<rootDir>/**/*.tsx" ],
// coverageThreshold: {
//   "./app": {
//     "lines": 90,
//   }
// },
// coveragePathIgnorePatterns:[
//   "setup-tests.js",
//   "./coverage/*",
//   "pages/index.tsx",
//   "/node_modules/(?!axios/.*)",
// ],
// resolver: undefined,
// setupFilesAfterEnv: ['<rootDir>/setup-tests.js'],
// coverageReporters: ["lcov","text"],
// transformIgnorePatterns: [
//   "node_modules/(?!(axios)/)"
// ]
// };

module.exports = {
  rootDir: "app",
  testEnvironment: "jsdom",
  preset: "ts-jest",
  transform: {
    "^.+\\.(ts|tsx)$": "ts-jest",
  },
  transformIgnorePatterns: ["node_modules/(?!react-markdown/)"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
  },
  collectCoverage: true,
  coverageDirectory: "<rootDir>/coverage/",
  collectCoverageFrom: ["<rootDir>/**/*.tsx"],
  coverageThreshold: {
    "./app": {
      lines: 90,
    },
  },
  coveragePathIgnorePatterns: [
    "app/setup-tests.js",
    "./coverage/*",
    "pages/index.tsx",
    "/node_modules/(?!axios/)",
  ],
  setupFilesAfterEnv: ["<rootDir>/setup-tests.ts"],
  coverageReporters: ["lcov", "text"],
  globals: {
    "ts-jest": {
      tsconfig: "./tsconfig.test.json",
    },
  },
};
