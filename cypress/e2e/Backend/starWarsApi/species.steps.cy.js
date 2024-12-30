import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfSpeciesrsSchema = require('../schemas/species/listOfSpecies.json');
const specieByUidSchema = require('../schemas/species/specieByUid.json');

//* 6. List of species.

Given(/^That I want to know the all Star Wars species.$/, () => {
	return true;
});

When(/^I send a GET request to the species endpoint.$/, () => {
	cy.getSpecies(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, listOfSpeciesrsSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of species.$/, () => {
	return true;
});

//* 6.1 GET Species by uid.

Given(/^That I want to know the details of a specific species.$/, () => {
	return true;
});

When(/^I send a GET request to the species endpoint with the uid.$/, () => {
	const uid = 3;

    cy.getSpecieByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, specieByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the specie.$/, () => {
	return true;
});
