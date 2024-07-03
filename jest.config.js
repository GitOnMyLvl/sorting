module.exports = {
  transform: {
    '^.+\\.js$': 'babel-jest',
    '^.+\\.svg$': 'jest-transform-stub',
  },
  moduleNameMapper: {
    '\\.(css|less|scss|svg)$': 'jest-transform-stub',
  },
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageReporters: ['html', 'text', 'lcov'],
  testEnvironment: 'jsdom',
  moduleFileExtensions: ['js'],
  transformIgnorePatterns: ['/node_modules/'],
};
