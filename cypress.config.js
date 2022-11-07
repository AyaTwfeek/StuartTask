const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://dashboard.sandbox.stuart.com'
  },
});
