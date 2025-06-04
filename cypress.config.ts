import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://app.qa.nesto.ca",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
