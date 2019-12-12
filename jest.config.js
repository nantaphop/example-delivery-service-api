// https://jestjs.io/docs/en/configuration
module.exports = {
  testEnvironment: 'node',
  collectCoverage: true,
  coverageDirectory: './coverage',
  coverageReporters: ['json', 'lcov', 'text', 'clover'],
  collectCoverageFrom: ['src/**/*.js', '!src/controllers/**/register.js', '!src/test-utils/*.js']
}
