import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

test.describe("Login Tests", () => {
  test("Successful login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login("standard_user", "secret_sauce");
    await loginPage.checkLoginSuccess();
  });

  test("Invalid login", async ({ page }) => {
    const loginPage = new LoginPage(page);
    await loginPage.goTo();
    await loginPage.login("wrong_user", "wrong_pass");
    await expect(page.locator(".error-button")).toBeVisible();
  });
});
