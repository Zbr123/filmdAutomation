// // Load environment variables from .env file
// require('dotenv').config();
// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
// const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
// const { WebClient } = require("@slack/web-api");

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.feature", // Look for all feature files
//     async setupNodeEvents(on, config) {
//       // Add the Cucumber Preprocessor plugin
//       await addCucumberPreprocessorPlugin(on, config);

//       // Add ESBuild preprocessor to handle .feature files
//       on("file:preprocessor", createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));

//       // Initialize Slack WebClient from .env variables
//       const slackToken = process.env.SLACK_BOT_TOKEN;  // Securely load from .env
//       const slackUserId = process.env.SLACK_USER_ID;  // Securely load from .env
//       const slackClient = new WebClient(slackToken);

//       // After run event to send Slack DM on test failure
//       on("after:run", async (results) => {
//         if (results.totalFailed > 0) {
//           const message = {
//             channel: slackUserId, // Automationtesting's Slack user ID for DM
//             text: `:x: *Cypress Test Failure Alert* :x:\n` +
//                   `Environment: ${config.env.baseUrl}\n` +
//                   `Total Tests: ${results.totalTests}\n` +
//                   `Passed: ${results.totalPassed}\n` +
//                   `Failed: ${results.totalFailed}\n` +
//                   `Run Time: ${new Date(results.endedAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' })}\n` +
//                   `Check test results for details.`,
//           };

//           try {
//             await slackClient.chat.postMessage(message);
//             console.log("Slack DM sent successfully to Automationtesting.");
//           } catch (error) {
//             console.error("Failed to send Slack DM:", error);
//           }
//         }
//       });

//       return config;
//     },
//     env: {
//       baseUrl: process.env.CYPRESS_baseUrl || "https://dev-app.filmd.co.uk/",
//       validEmail: process.env.CYPRESS_validEmail || "zubair.a@yetiinc.com",
//       validPassword: process.env.CYPRESS_validPassword || "Vista123+",
//       slackBotToken: process.env.SLACK_BOT_TOKEN,  // Using the env variable for Slack token
//       slackUserId: process.env.SLACK_USER_ID,    // Using the env variable for Slack User ID
//     },
//   },
// });

// Load environment variables from .env file
require('dotenv').config();
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { WebClient } = require("@slack/web-api");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      const slackToken = process.env.SLACK_BOT_TOKEN;
      const slackUserId = process.env.SLACK_USER_ID;
      if (slackToken && slackUserId) {
        const slackClient = new WebClient(slackToken);
        on("after:run", async (results) => {
          if (results.totalFailed > 0) {
            const message = {
              channel: slackUserId,
              text: `:x: *Cypress Test Failure Alert* :x:\n` +
                    `Environment: ${config.env.baseUrl}\n` +
                    `Total Tests: ${results.totalTests}\n` +
                    `Passed: ${results.totalPassed}\n` +
                    `Failed: ${results.totalFailed}\n` +
                    `Run Time: ${new Date(results.endedAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' })}\n` +
                    `Check test results for details.`,
            };
            try {
              await slackClient.chat.postMessage(message);
              console.log("Slack DM sent successfully to Automationtesting.");
            } catch (error) {
              console.error("Failed to send Slack DM:", error);
            }
          } else {
            console.log("No test failures, skipping Slack notification.");
          }
        });
      } else {
        console.log("Skipping Slack notification: SLACK_BOT_TOKEN or SLACK_USER_ID missing.");
      }

      return config;
    },
    env: {
      baseUrl: process.env.CYPRESS_baseUrl || "https://dev-app.filmd.co.uk/",
      validEmail: process.env.CYPRESS_validEmail || "zubair.a@yetiinc.com",
      validPassword: process.env.CYPRESS_validPassword || "Vista123+",
      slackBotToken: process.env.SLACK_BOT_TOKEN,
      slackUserId: process.env.SLACK_USER_ID,
    },
  },
});