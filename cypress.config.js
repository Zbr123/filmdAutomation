// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const addCucumberPreprocessorPlugin = require("@badeball/cypress-cucumber-preprocessor").addCucumberPreprocessorPlugin;
// const createEsbuildPlugin = require("@badeball/cypress-cucumber-preprocessor/esbuild").createEsbuildPlugin;

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.feature",
//     async setupNodeEvents(on, config) {
//       await addCucumberPreprocessorPlugin(on, config);
//       on("file:preprocessor", createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));


//       return config;
//     },
//   },
// });
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      // Add Cucumber preprocessor plugin
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));
      // Properly initialize cypress-file-upload
      on('task', require('cypress-file-upload/lib/register')); // Use task to register the plugin
      return config;
    },
    env: {
      baseUrl: process.env.CYPRESS_baseUrl || "https://filmd-apps-dev-uks-app-app-01.azurewebsites.net",
      validEmail: process.env.CYPRESS_validEmail || "zubair.a@yetiinc.com", // Match your secret
      validPassword: process.env.CYPRESS_validPassword || "Vista123+" // Match your secret
    },
  },
});
