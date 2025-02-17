import { test, expect } from "@playwright/test";
import { LoginPage } from "../pages/LoginPage";
import { ProductPage } from "../pages/ProductPage";
import { CartPage } from "../pages/CartPage";

test.describe("Cart Tests", () => {
  test("Add and remove item from cart", async ({ page }) => {
    const loginPage = new LoginPage(page);
    const productPage = new ProductPage(page);
    const cartPage = new CartPage(page);

    const productName = "Sauce Labs Backpack";
    const userName = "standard_user";
    const password = "secret_sauce";

    // Login first
    await loginPage.goTo();
    await loginPage.login(userName, password);
    await loginPage.checkLoginSuccess();

    // Select product and add to cart
    await productPage.selectProduct(productName);
    await productPage.addToCart(productName);

    // Open cart and remove item
    await cartPage.openCart();
    await cartPage.removeItem(productName);

    // Verify cart is empty
    await cartPage.verifyCartIsEmpty();
  });
});
