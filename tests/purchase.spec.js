// tests/purchase.spec.js
const { test, expect } = require("@playwright/test");
const { LoginPage } = require("../pages/LoginPage");
const { ProductPage } = require("../pages/ProductPage");
const { CartPage } = require("../pages/CartPage");

test.describe("Purchase Tests", () => {
  test("Complete purchase process", async ({ page }) => {
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
    await productPage.addToCart();

    // Open cart and proceed to checkout
    await cartPage.openCart();
    await cartPage.proceedToCheckout();

    // Fill out checkout information
    await cartPage.fillCheckoutForm("Halil", "Halili", "71000");

    // Complete checkout
    await cartPage.completePurchase();

    // Verify purchase success
    await cartPage.verifyPurchaseSuccess();
  });
});
