import { expect } from "@playwright/test";

export class CartPage {
  constructor(page) {
    this.page = page;
    this.cartIcon = page.locator('[data-test="shopping-cart-link"]');
    this.removeItemButton = page.locator(
      '[data-test="remove-sauce-labs-backpack"]'
    );
  }

  async openCart() {
    await this.cartIcon.click();
  }

  async removeItem(productName) {
    const removeButton = this.page.locator(
      `[data-test="remove-${productName.toLowerCase().replace(/ /g, "-")}"]`
    );
    await removeButton.waitFor({ state: "visible" });
    await removeButton.click();
  }

  async verifyCartIsEmpty() {
    await expect(this.removeItemButton).not.toBeVisible();
  }

  async proceedToCheckout() {
    await this.page.locator('[data-test="checkout"]').click();
  }

  async fillCheckoutForm(firstName, lastName, postalCode) {
    await this.page.locator('[data-test="firstName"]').fill(firstName);
    await this.page.locator('[data-test="lastName"]').fill(lastName);
    await this.page.locator('[data-test="postalCode"]').fill(postalCode);
  }

  async completePurchase() {
    await this.page.locator('[data-test="continue"]').click();
    await this.page.locator('[data-test="finish"]').click();
  }

  async verifyPurchaseSuccess() {
    const currentUrl = this.page.url();
    await expect(currentUrl).toContain("checkout-complete.html");
  }
}
