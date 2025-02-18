import { baseUrl } from "../config/star-wars-api-config";
import 'cypress-plugin-api'


//! Endpoints.

Cypress.Commands.add("endpoints", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}` });
});

//! Starships.

Cypress.Commands.add("getStarships", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/starships/` });
});

Cypress.Commands.add("starshipsByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/starships/${uid}/` });
});

//! People.

Cypress.Commands.add("getCharacters", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/people/` });
});

Cypress.Commands.add("characterByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/people/${uid}/` });
});

//! Planets.

Cypress.Commands.add("getPlanets", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/planets/` });
});

Cypress.Commands.add("planetByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/planets/${uid}/` });
});

//! Films.

Cypress.Commands.add("getFilms", (config, title) => {
    const queryParams = {};

    if (title) {
        queryParams.title = title;
    }

    cy.api({
        ...config,
        method: "GET",
        url: `${baseUrl}/films/`,
        qs: queryParams,
    });
});

Cypress.Commands.add("getFilmByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/films/${uid}/` });
});

//! Species.

Cypress.Commands.add("getSpecies", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/species/` });
});

Cypress.Commands.add("getSpecieByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/species/${uid}/` });
});

//! Vehicles.

Cypress.Commands.add("getAllVehicles", (config) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/vehicles/` });
});

Cypress.Commands.add("getVehicleByUid", (config, uid) => {
    cy.api({ ...config, method: "GET", url: `${baseUrl}/vehicles/${uid}/` });
});