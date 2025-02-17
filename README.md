# Playwright Automation Project

# Project Overview

This project is an automated end-to-end testing suite using Playwright and JavaScript. It is designed to test various functionalities of a web application, ensuring that both successful and unsuccessful attempts are handled correctly.

The framework follows best practices such as:

- **Page Object Model (POM)** for better maintainability.
- **Parameterized tests** to test different scenarios.
- **Assertions** to verify correct behavior after attempts.
- **Reports** for test execution results.

# Tech Stack

- **Playwright** for automation testing.

- **JavaScript (Node.js)** as the programming language.

- **VS Code** for development.

# Setup & Installation

- **Clone the Repository**

`git clone https://github.com/your-username/playwright-automation.git`<br>
`cd playwright-automation`

- **Install Dependencies**

Make sure you have Node.js (>=16.x) installed.

`npm install`

- **Install Playwright Browsers**

Playwright requires browser binaries to run tests:

`npx playwright install`

- **Running Tests**

Run all tests:

`npx playwright test`

Run a specific test file:

`npx playwright test tests/login.spec.js`

Run tests in headed mode (visible browser):

`npx playwright test --headed`

Generate HTML Report:

`npx playwright show-report`

# Customizing Configuration

Modify playwright.config.js to:

- Change the base URL of the web app under test.

- Adjust test timeout and retry settings.

- Enable/disable video recording.

# Troubleshooting

- Error: No package.json found → Run `npm init -y` to initialize a Node.js project.

- Playwright tests not running? → Ensure you have installed dependencies: `npm install` and `npx playwright install`.

- Element not found error? → Double-check locators.
