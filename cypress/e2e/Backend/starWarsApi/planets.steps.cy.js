import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const planet27Schema = require('../schemas/planets/planetById.json');
const listPlanetsSchema = require('../schemas/planets/listOfPlanets.json'); 

//* 4. List of planets.

Given(/^That I want to know the all Star Wars planets.$/, () => {
	return true;
});

When(/^I send a GET request to the planets endpoint.$/, () => {
	cy.getPlanets(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

		cy.schemaValidator(response.body, listPlanetsSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of planets.$/, () => {
	return true;
});

//* 4.1 GET Planet by uid.

Given(/^That I want to know the details of a specific planet.$/, () => {
	return true;
});

When(/^I send a GET request to the planets endpoint with the uid.$/, () => {
	const uid = 1;

	cy.planetByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the planet.$/, () => {
	return true;
});

//* 4.2 GET Properties of planet 27.

Given(/^That I want to know the properties of the planet 27.$/, () => {
	return true;
});

When(/^I send a GET request to the planets endpoint with the uid 27.$/, () => {
	const uid = 27;

	cy.planetByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

		cy.schemaValidator(response.body, planet27Schema);

		cy.writeFile('cypress/e2e/Backend/data/planet27Properties.json', response.body);

		cy.log('The properties of the planet 27 were saved in the file: planet27Properties.json');

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the properties of the planet 27.$/, () => {
	return true;
});
