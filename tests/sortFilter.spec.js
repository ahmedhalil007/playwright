import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";

test.describe("Sort and Filter Products", () => {
  test("Sort products by price low to high", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);

    const userName = "standard_user";
    const password = "secret_sauce";

    // Login
    await loginPage.goTo();
    await loginPage.login(userName, password);
    await loginPage.checkLoginSuccess();

    // Sort low to high
    await productPage.sortProducts("lohi");

    // Check success
    await productPage.verifySortedByPrice();
  });
});
