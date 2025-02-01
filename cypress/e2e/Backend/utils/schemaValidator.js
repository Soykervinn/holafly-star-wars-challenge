const Ajv = require('ajv');
const addFormats = require('ajv-formats');
const ajv = new Ajv();
addFormats(ajv); 
/**
 * Cypress command to validate response schema using AJV.
 * @param {Object} responseBody - The body of the API response to validate.
 * @param {Object} schema - The JSON schema to validate the response against.
 */

Cypress.Commands.add('schemaValidator', (responseBody, schema) => {
  const validate = ajv.compile(schema);
  const valid = validate(responseBody);

  cy.wrap(valid).then((isValid) => {
    if (!isValid) {
      cy.log("Schema validation failed:", JSON.stringify(validate.errors, null, 2));
    } else {
      cy.log("Schema validation success!");
    }
    expect(
      isValid,
      `Expected success schema validation true, but got: ${JSON.stringify(validate.errors, null, 2)}`
  ).to.be.true;
  });
});