const cucumber = require('cypress-cucumber-preprocessor').default
const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "du2hbz",
  e2e: {
    setupNodeEvents(on, config) {
      on('file:preprocessor', cucumber())
      // implement node event listeners here
    },
    specPattern: "cypress/e2e/**/*.feature",
  },
});
