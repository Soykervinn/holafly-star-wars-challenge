# Holafly Star Wars Challenge

![NodeJS 18](https://img.shields.io/badge/node.js|18-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)  ![Cypress](https://img.shields.io/badge/Cypress-17202C?style=for-the-badge&logo=cypress&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black) ![Chai](https://img.shields.io/badge/Chai-A30701?style=for-the-badge&logo=chai&logoColor=white)

## Status

* * *

![IN PRODUCTION](https://img.shields.io/badge/IN_PRODUCTION-1983fc?style=for-the-badge)

* * *

## Developer

### Kervinn Aguilera

## Project Description

This project implements an automated test suite for the Star Wars API using [Cypress](https://www.cypress.io/). The project is integrated with Cypress Cloud for test monitoring and runs automated pipelines through GitHub Actions.

### Cypress Cloud Project

Project name in Cypress Cloud: **holafly-star-wars-api**

### Take a look at Cypress Dashboard

If you are interested in seeing the results of the tests, you can access the Cypress Dashboard by clicking on the following link: [Cypress Dashboard](https://cloud.cypress.io/projects/du2hbz/branches/main/runs)

## Steps to Execute the Tests

**Clone the Repository**:
Open a terminal and run the following command:

```bash
git clone https://github.com/Soykervinn/holafly-star-wars-challenge.git

```

**Install Dependencies: Inside the project folder, run:**:

```bash
npm install
```

**Run with Cypress UI:**

```bash
npm run cy:open
```

**Run with Cypress CLI:**

```bash
npm run cy:run
```

**Run pointing to Cypress Cloud:**

 ```bash
npm run cy:cloud
```

### Project Structure

```bash
.github/
    workflows/
        cypress.yaml
cypress/
    e2e/
        Backend/
            api/
            config/
            data/
            schemas/
            starWarsApi/
            utils/
            starWarsApi.feature
        Fronted/
            excerciseAutomation/
            excerciseAutomation.feature
    fixtures/
    support/
node_modules/
postman-api-testing/
    holafly-star-wars-challenge.postman_collection
.gitignore
cypress.config.js
README.md

```

### Pipeline

The pipeline is configured with GitHub Actions and enables automated test execution.

## Cron

Frequency: Every Monday at 3:00 PM (ARGT).

### Key Integrations

Cypress Cloud: Test monitoring and result recording.
GitHub Actions: Automated test execution in a CI/CD pipeline.

### Key Dependencies

Cypress: Main framework for test automation.
cypress-plugin-api: Plugin to facilitate API validation.
cypress-cucumber-preprocessor: To write tests in Gherkin format.
AJV: For JSON schema validation.
ajv-formats: Additional support for JSON formats (URI, date, etc.).
