import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfFilmsSchema = require('../schemas/films/listOfFilms.json');
const filmByUidSchema = require('../schemas/films/filmByUid.json');
const filmByTitleSchema = require('../schemas/films/filmByTitle.json');

//* 5. List of films.

Given(/^That I want to know the all Star Wars films.$/, () => {
    return true;
});

When(/^I send a GET request to the films endpoint.$/, () => {
    cy.getFilms(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

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

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, filmByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the film.$/, () => {
    return true;
});

//* 5.2 GET Film by tittle and identify the uid.

Given(/^That I want to know the uid of a specific film.$/, () => {
    return true;
});

When(/^I send a GET request to the films endpoint with the tittle as a queryparam.$/, () => {
    let qs = {
        tittle: 'The Phantom Menace'
    };

    cy.getFilms(requestConfig.SWAPI(), qs.tittle).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        expect(response.body).to.have.property('message', 'ok');
        expect(response.body).to.have.property('result').and.to.be.an('array');

        const film = response.body.result[0];
        expect(film).to.have.property('properties').and.to.be.an('object');
        expect(film.properties).to.have.property('title', 'The Phantom Menace');

        const uid = film.uid;
        expect(uid).to.be.a('string');
        Cypress.env('phantomMenaceUid', uid); // Save to Cypress environment variable

        // Log the UID
        cy.log(`This is the UID of The Phantom Menace film: ${Cypress.env('phantomMenaceUid')}`);


        cy.schemaValidator(response.body, filmByTitleSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the film and the uid was identified.$/, () => {
    return true;
});