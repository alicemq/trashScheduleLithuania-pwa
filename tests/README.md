# Testing Documentation

This directory contains all test files for the Trash Schedule App.

## Directory Structure

```
tests/
├── unit/           # Unit tests for individual components and functions
├── integration/    # Integration tests for component interactions
├── e2e/           # End-to-end tests for complete user flows
└── fixtures/      # Test data and mock objects
```

## Test Categories

### Unit Tests
- Component tests
- Utility function tests
- Service tests
- Store tests

### Integration Tests
- Component interaction tests
- API integration tests
- State management tests

### End-to-End Tests
- User flow tests
- Critical path tests
- Cross-browser tests

## Running Tests

```bash
# Run all tests
npm run test

# Run unit tests only
npm run test:unit

# Run integration tests only
npm run test:integration

# Run e2e tests only
npm run test:e2e

# Run tests with coverage
npm run test:coverage
```

## Test Guidelines

1. **Naming Convention**
   - Test files should be named `*.test.js` or `*.spec.js`
   - Test files should be placed next to the files they test
   - Use descriptive test names that explain the behavior being tested

2. **Test Structure**
   - Use the Arrange-Act-Assert pattern
   - Keep tests focused and atomic
   - Mock external dependencies
   - Use meaningful test data

3. **Coverage Requirements**
   - Minimum 80% code coverage
   - 100% coverage for critical paths
   - Include both positive and negative test cases

4. **Best Practices**
   - Write tests before implementing features (TDD)
   - Keep tests independent
   - Clean up after tests
   - Use meaningful assertions
   - Document complex test scenarios 