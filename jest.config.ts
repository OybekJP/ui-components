// module.exports = {
//   testEnvironment: 'jsdom',
//   setupFilesAfterEnv: ['/jest.setup.js'],
//   moduleNameMapper: {
//     // Handle CSS imports (if you're using CSS in your components)
//     '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
//     // Handle @emotion/styled
//     '^@emotion/styled$': require.resolve('@emotion/styled'),
//   },
//   transform: {
//     '^.+\\.(ts|tsx)$': 'ts-jest',
//   },
// }

import { Config } from '@jest/types'

const config: Config.InitialOptions = {
  preset: 'ts-jest',
  testEnvironment: 'jsdom', // Ensures tests run in a browser-like environment
  transform: {
    '^.+\\.(ts|tsx)$': 'ts-jest', // Transform TypeScript files
    '^.+\\.(js|jsx)$': 'babel-jest', // Transform JavaScript files
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  // setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Jest setup file
  testMatch: ['<rootDir>/src/**/*.test.{ts,tsx}'], // Test files pattern
  moduleNameMapper: {
    '\\.(css|less|scss)$': 'identity-obj-proxy', // Handle CSS imports
  },
}

export default config
