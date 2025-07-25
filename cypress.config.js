/new code
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
      // Initialize Slack WebClient
      const slackToken = process.env.SLACK_BOT_TOKEN || config.env.slackBotToken;
      const slackUserId = process.env.SLACK_USER_ID || config.env.slackUserId;
      const slackClient = new WebClient(slackToken);
      // After run event to send Slack DM on test failure
      on("after:run", async (results) => {
        if (results.totalFailed > 0) {
          const message = {
            channel: slackUserId, // Autiomationtesting's Slack user ID for DM
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
            console.log("Slack DM sent successfully to Autiomationtesting.");
          } catch (error) {
            console.error("Failed to send Slack DM:", error);
          }
        }
      });
      return config;
    },
    env: {
      baseUrl: process.env.CYPRESS_baseUrl || "https://filmd-apps-dev-uks-app-app-01.azurewebsites.net",
      validEmail: process.env.CYPRESS_validEmail || "zubair.a@yetiinc.com",
      validPassword: process.env.CYPRESS_validPassword || "Vista123+",
      slackBotToken: process.env.SLACK_BOT_TOKEN,  // Using the env variable for Slack token
      slackUserId: process.env.SLACK_USER_ID,    // Using the env variable for Slack User ID
    },
  },
});