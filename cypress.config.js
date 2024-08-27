const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
   
    defaultCommandTimeout: 10000, // 10 seconds
    requestTimeout: 15000,
    pageLoadTimeout: 120000, 
    reporter: 'mochawesome',
    reporterOptions:{
      "chart":true,
      "overwrite":false,
      "html":false,
      "json":true,
      "reportDir":"cypress/report"

    },
    },
    setupNodeEvents(on, config) {
      screenshotOnRunFailure=true;
      require('cypress-mochawesome-reporter/plugin')(on);
 
    },
},
);
