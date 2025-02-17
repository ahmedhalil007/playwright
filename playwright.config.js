import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  use: {
    headless: false, // false to see action in browser
    viewport: { width: 1280, height: 720 },
    actionTimeout: 10 * 1000, // action timeout
    baseURL: "https://www.saucedemo.com/",
    video: "off",
  },
  reporter: [["html", { open: "never" }]],
});
