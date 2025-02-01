import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfStarshipsSchema = require('../schemas/ships/listOfStarships.json');
const starshipByUidSchema = require('../schemas/ships/shipByUid.json');

//* 2. List of ships. 

Given(/^That I want to know the all Star Wars ships.$/, () => {
    return true;
});

When(/^I send a GET request to the ships endpoint.$/, () => {
    cy.getStarships(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, listOfStarshipsSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of ships.$/, () => {
    return true;
});

//* 2.1 GET Ship by uid.

Given(/^That I want to know the details of a specific ship.$/, () => {
    return true;
});

When(/^I send a GET request to the ships endpoint with the uid.$/, () => {
    const uid = 10;

    cy.starshipsByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, starshipByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the ship.$/, () => {
    return true;
});