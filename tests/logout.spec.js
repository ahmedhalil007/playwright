import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { HomePage } from "../pages/HomePage";

test("Logout functionality", async ({ page }) => {
  const loginPage = new LoginPage(page);
  const homePage = new HomePage(page);

  const username = "standard_user";
  const password = "secret_sauce";

  // Login
  await loginPage.goTo();
  await loginPage.login(username, password);

  // Logout
  await homePage.logout();

  // Check success
  await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
