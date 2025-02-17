import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";

//Login with correct input
test.describe("Login Tests", () => {
  test("Successful login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    const userName = "standard_user";
    const password = "secret_sauce";

    await loginPage.goTo();
    await loginPage.login(userName, password);
    await loginPage.checkLoginSuccess();
  });

  //Login with invalid input
  test("Invalid login", async ({ page }) => {
    const loginPage = new LoginPage(page);

    const userName = "wrong_user";
    const password = "wrong_pass";

    await loginPage.goTo();
    await loginPage.login(userName, password);
    await expect(page.locator(".error-button")).toBeVisible();
  });
});
