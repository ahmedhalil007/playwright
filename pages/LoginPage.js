import { expect } from "@playwright/test";

export class LoginPage {
  constructor(page) {
    this.page = page;
    this.usernameField = page.locator("#user-name");
    this.passwordField = page.locator("#password");
    this.loginButton = page.locator("#login-button");
  }

  async goTo() {
    await this.page.goto("/");
  }

  async login(username, password) {
    await this.usernameField.fill(username);
    await this.passwordField.fill(password);
    await this.loginButton.click();
  }

  async checkLoginSuccess() {
    await expect(this.page).toHaveURL(/inventory/);
  }
}
