const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // Set the default timeout for most commands (in milliseconds)
    defaultCommandTimeout: 10000, // 10 seconds

    // Optionally, set the default timeout for HTTP requests (in milliseconds)
    requestTimeout: 15000, // 15 seconds
    setupNodeEvents(on, config) {
      pageLoadTimeout: 120000 // Increase to 2 minutes (120000 ms)
      // implement node event listeners here
    },
  },
});
