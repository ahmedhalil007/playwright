import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: false, // Postavi na false ako želiš vidjeti testove u browseru
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // Timeout za akcije
    baseURL: "https://www.saucedemo.com/", // Promijeni prema potrebi
  },
  reporter: [["html", { open: "never" }]], // HTML izvještaji o testovima
});
