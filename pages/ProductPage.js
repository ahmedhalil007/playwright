import { expect } from "@playwright/test";

export class ProductPage {
  constructor(page) {
    this.page = page;
    this.firstProduct = page.locator('[data-test="item-4-title-link"]');
    this.addToCartButton = page.locator('[data-test="add-to-cart"]');
    this.sortDropdown = page.locator('[data-test="product-sort-container"]');
    this.productPrices = page.locator(".inventory_item_price");
  }

  async selectProduct(productName) {
    await this.page
      .locator(".inventory_item_name", { hasText: productName })
      .click();
  }

  async addToCart() {
    await this.addToCartButton.click();
  }

  async sortProducts(optionValue) {
    await this.sortDropdown.selectOption({ value: optionValue });
  }

  async verifySortedByPrice() {
    const prices = await this.productPrices.allTextContents();
    const sortedPrices = [...prices].sort(
      (a, b) => parseFloat(a.replace("$", "")) - parseFloat(b.replace("$", ""))
    );

    expect(prices).toEqual(sortedPrices);
  }
}
