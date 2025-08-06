// require('dotenv').config();
// const { defineConfig } = require("cypress");
// const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
// const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
// const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
// const { WebClient } = require("@slack/web-api");
// const { execSync } = require("child_process"); // Add this to run the commands programmatically

// module.exports = defineConfig({
//   e2e: {
//     specPattern: "cypress/e2e/**/*.feature",
//     reporter: 'mocha-allure-reporter',  // Use mocha-allure-reporter
//     reporterOptions: {
//       allureResultsPath: 'allure-results', // Ensure the results path
//     },
//     async setupNodeEvents(on, config) {
//       // Cucumber Preprocessor
//       await addCucumberPreprocessorPlugin(on, config);
//       on("file:preprocessor", createBundler({
//         plugins: [createEsbuildPlugin(config)],
//       }));

//       // Debug logging for Allure
//       on("task", {
//         logAllure(message) {
//           console.log("Allure Task Log:", message);
//           return null;
//         },
//       });

//       // Slack Notification Logic (same as before)
//       const slackToken = process.env.SLACK_BOT_TOKEN;
//       const slackUserId = process.env.SLACK_USER_ID;
//       if (slackToken && slackUserId) {
//         const slackClient = new WebClient(slackToken);
//         on("after:run", async (results) => {
//           console.log("Test Run Completed. Writing Allure Results...");
//           if (results.totalFailed > 0) {
//             console.log(`Tests failed: ${results.totalFailed}`);
//           } else {
//             console.log("No test failures, generating Allure report...");
//           }

//           // Slack notification logic
//           if (results.totalFailed > 0) {
//             const message = {
//               channel: slackUserId,
//               text: `:x: *Cypress Test Failure Alert* :x:\n` +
//                     `Environment: ${config.env.baseUrl}\n` +
//                     `Total Tests: ${results.totalTests}\n` +
//                     `Passed: ${results.totalPassed}\n` +
//                     `Failed: ${results.totalFailed}\n` +
//                     `Run Time: ${new Date(results.endedAt).toLocaleString('en-US', { timeZone: 'Asia/Karachi' })}\n` +
//                     `Check test results for details.`,
//             };
//             try {
//               await slackClient.chat.postMessage(message);
//               console.log("Slack DM sent successfully to Automationtesting.");
//             } catch (error) {
//               console.error("Failed to send Slack DM:", error);
//             }
//           } else {
//             console.log("No test failures, skipping Slack notification.");
//           }

//           // Automatically generate and open the Allure report after tests complete
//           try {
//             console.log("Running allure:generate...");
//             execSync('npm run allure:generate', { stdio: 'inherit' });

//             console.log("Running allure:open...");
//             execSync('npm run allure:open', { stdio: 'inherit' });
//           } catch (error) {
//             console.error("Error generating or opening Allure report:", error);
//           }
//         });
//       } else {
//         console.log("Skipping Slack notification: SLACK_BOT_TOKEN or SLACK_USER_ID missing.");
//       }

//       return config;
//     },
//     env: {
//       baseUrl: process.env.CYPRESS_baseUrl || "https://dev-app.filmd.co.uk/",
//       validEmail: process.env.CYPRESS_validEmail || "zubair.a@yetiinc.com",
//       validPassword: process.env.CYPRESS_validPassword || "Vista123+",
//       slackBotToken: process.env.SLACK_BOT_TOKEN,
//       slackUserId: process.env.SLACK_USER_ID,
//       allureResultsPath: "allure-results", // Ensure the correct path
//       allure: true,
//     },
//   },
// });
// new
require('dotenv').config();
const { defineConfig } = require("cypress");
const createBundler = require("@bahmutov/cypress-esbuild-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { createEsbuildPlugin } = require("@badeball/cypress-cucumber-preprocessor/esbuild");
const { WebClient } = require("@slack/web-api");
const { execSync } = require("child_process");

module.exports = defineConfig({
  e2e: {
    specPattern: "cypress/e2e/**/*.feature",
    reporter: 'mocha-allure-reporter',
    reporterOptions: {
      allureResultsPath: 'allure-results',
    },
    async setupNodeEvents(on, config) {
      await addCucumberPreprocessorPlugin(on, config);
      on("file:preprocessor", createBundler({
        plugins: [createEsbuildPlugin(config)],
      }));

      on("task", {
        logAllure(message) {
          console.log("Allure Task Log:", message);
          return null;
        },
      });

      const slackToken = process.env.SLACK_BOT_TOKEN;
      const slackUserId = process.env.SLACK_USER_ID;
      if (slackToken && slackUserId) {
        const slackClient = new WebClient(slackToken);
        on("after:run", async (results) => {
          console.log("Test Run Completed. Writing Allure Results...");
          if (results.totalFailed > 0) {
            console.log(`Tests failed: ${results.totalFailed}`);
          } else {
            console.log("No test failures, generating Allure report...");
          }

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

          // Generate Allure report
          try {
            console.log("Running allure:generate...");
            execSync('npm run allure:generate', { stdio: 'inherit' });

            // Only run allure:open if not in CI environment
            if (!process.env.CI) {
              console.log("Running allure:open...");
              execSync('npm run allure:open', { stdio: 'inherit' });
            } else {
              console.log("Skipping allure:open in CI environment.");
            }
          } catch (error) {
            console.error("Error generating or opening Allure report:", error);
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
      allureResultsPath: "allure-results",
      allure: true,
    },
  },
});









