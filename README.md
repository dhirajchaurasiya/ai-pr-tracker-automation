# AI PR Tracker

A Playwright-based test automation project for the AI PR Tracker application.

## Project Overview

This project contains automated tests for testing the GitHub AI PR Tracker application. It uses Playwright, a modern testing framework that supports multiple browsers and provides a comprehensive API for web automation and testing.

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

## Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd ai_pr_tracker
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in headed mode (with browser UI visible)
```bash
npx playwright test --headed
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run a specific test file
```bash
npx playwright test tests/formfillup.spec.ts
```

### Run tests with UI mode (interactive)
```bash
npx playwright test --ui
```

### Run tests with a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

## Test Files

- **example.spec.ts** - Sample tests for Playwright documentation website
- **formfillup.spec.ts** - Tests for counting merged PRs in the AI PR Tracker application

## Viewing Test Results

After running tests, view the HTML report:
```bash
npx playwright show-report
```

## Project Structure

```
ai_pr_tracker/
├── tests/
│   ├── example.spec.ts
│   └── formfillup.spec.ts
├── playwright.config.ts
├── package.json
└── README.md
```

## Configuration

The `playwright.config.ts` file contains the Playwright configuration for test execution, including:
- Browser settings
- Test timeout configurations
- Reporters setup
- Test directory paths

### Browser Configuration

By default, the project is configured to run tests on **Brave** browser. However, other browsers are available but commented out. To change your preferred browser, uncomment the desired browser configuration in `playwright.config.ts`:

**Available Browsers:**
- **Chromium** - Chromium-based browser
- **Firefox** - Mozilla Firefox
- **WebKit** - Safari-based browser
- **Brave** - Default configuration (currently active)
- **Google Chrome** - Channel-based Chrome
- **Microsoft Edge** - Channel-based Edge
- **Mobile Chrome** - Chrome on mobile (Pixel 5)
- **Mobile Safari** - Safari on mobile (iPhone 12)

**Steps to Change Browser:**

1. Open `playwright.config.ts` at the line with the `projects` section
2. Find the browser you want to use (search for its name)
3. Uncomment the entire object for that browser (remove `//` from the beginning of each line)
4. Comment out the browser you no longer want to use
5. Save the file and run tests normally

**Example:** To use Firefox instead of Brave, uncomment this block:
```typescript
{
  name: 'firefox',
  use: { ...devices['Desktop Firefox'] },
},
```

You can also run multiple browsers in parallel by uncommenting multiple browser configurations - Playwright will execute tests for each browser simultaneously.

## Dependencies

- **@playwright/test** - Testing framework for web automation
- **@types/node** - TypeScript definitions for Node.js

## License

ISC
