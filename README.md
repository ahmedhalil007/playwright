# Playwright Automation Project

# Project Overview

This project is an automated end-to-end testing suite using Playwright and JavaScript. It is designed to test the login functionality of a web application, ensuring both successful and unsuccessful login attempts are handled correctly.

The framework follows best practices such as:

- **Page Object Model (POM)** for better maintainability.
- **Parameterized tests** to test different login scenarios.
- **Assertions** to verify correct behavior after login attempts.
- **Reports** for test execution results.

# Tech Stack

- **Playwright** for automation testing.

- **JavaScript (Node.js)** as the programming language.

- **VS Code** for development.

# Project Structure

/playwright <br>
│── pages/ # Page Object Model classes<br>
│ ├── LoginPage.js # Login page actions and locators<br>
│<br>
│── tests/ # Test cases<br>
│ ├── login.spec.js # Login test scenarios<br>
│<br>
│── utils/ # Utility functions (if needed)<br>
│<br>
│── playwright-report/ # Test execution reports<br>
│── test-results/ # Test run results<br>
│── playwright.config.js # Playwright configuration file<br>
│── package.json # Project dependencies<br>
│── README.md # Documentation<br>

# Setup & Installation

- **Clone the Repository**

`git clone https://github.com/your-username/playwright-automation.git`
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
