import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfFilmsSchema = require('../schemas/films/listOfFilms.json');
const filmByUidSchema = require('../schemas/films/filmByUid.json');

//* 5. List of films.

Given(/^That I want to know the all Star Wars films.$/, () => {
	return true;
});

When(/^I send a GET request to the films endpoint.$/, () => {
	cy.getFilms(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.schemaValidator(response.body, listOfFilmsSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of films.$/, () => {
	return true;
});

//* 5.1 GET Film by uid.

Given(/^That I want to know the details of a specific film.$/, () => {
	return true;
});

When(/^I send a GET request to the films endpoint with the uid.$/, () => {
	const uid = 1;

	cy.getFilmByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.schemaValidator(response.body, filmByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the film.$/, () => {
	return true;
});
