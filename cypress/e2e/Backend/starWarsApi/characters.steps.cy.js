import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfCharactersSchema = require('../schemas/characters/listOfCharacters.json');
const characterByUidSchema = require('../schemas/characters/characterByUid.json');
const notFoundSchema = require('../schemas/characters/notFound.json');

//* 3. List of people.

Given(/^That I want to know the all Star Wars characters.$/, () => {
	return true;
});

When(/^I send a GET request to the characters endpoint.$/, () => {
	cy.getCharacters(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

		cy.schemaValidator(response.body, listOfCharactersSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of characters.$/, () => {
	return true;
});

//* 3.1 GET People by uid.

Given(/^That I want to know the details of a specific character.$/, () => {
	return true;
});

When(/^I send a GET request to the characters endpoint with the uid.$/, () => {
	const uid = 1;

	cy.characterByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.schemaValidator(response.body, characterByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the character.$/, () => {
	return true;
});

//* 3.2 Maximum of characters.

Given(/^That I want to know the maximum number of characters.$/, () => {
	return true;
});

When(/^I send a GET request to the list characters endpoint.$/, () => {
	cy.getCharacters(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the maximum number of characters available.$/, () => {
	return true;
});

//* 3.3 GET People by uid | Character not found status 404.

Given(/^That I want to validate the response when the character is not found.$/, () => {
	return true;
});

When(/^I send a GET request to the characters endpoint with the uid that doesn't exist.$/, () => {
	const uid = 99;

	cy.characterByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(404);

        cy.schemaValidator(response.body, notFoundSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status code 404 and the related message.$/, () => {
	return true;
});
