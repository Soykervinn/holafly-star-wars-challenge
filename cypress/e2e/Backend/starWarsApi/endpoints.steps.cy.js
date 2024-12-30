import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const swapiEndpointsSchema = require('../schemas/endpoints/swapiEndpoints.json');

Given(/^That I want to know the endpoints of the SWAPI$/, () => {
	return true;
});

When(/^I send a GET request to the SWAPI.$/, () => {

    cy.endpoints(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.schemaValidator(response.body, swapiEndpointsSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the endpoints are displayed.$/, () => {
	return true;
});
