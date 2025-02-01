import '../api/star-wars-service';
import { requestConfig } from '../config/star-wars-api-config';
import '../utils/schemaValidator';

const listOfVehiclesSchema = require('../schemas/vehicles/listOfVehicles.json');
const vehicleByUidSchema = require('../schemas/vehicles/vehicleByUid.json');


//* 7. List of vehicles.

Given(/^That I want to know the all Star Wars vehicles.$/, () => {
	return true;
});

When(/^I send a GET request to the vehicles endpoint.$/, () => {
	cy.getAllVehicles(requestConfig.SWAPI()).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, listOfVehiclesSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the List of vehicles.$/, () => {
	return true;
});

//* 7.1 GET Vehicle by uid.

Given(/^That I want to know the details of a specific vehicle.$/, () => {
	return true;
});

When(/^I send a GET request to the vehicles endpoint with the uid.$/, () => {
	const uid = 4;

    cy.getVehicleByUid(requestConfig.SWAPI(), uid).then((response) => {
        expect(response.duration).to.be.lessThan(3000);

        expect(response.status, `The status code must be 200. Actual: ${response.status}`).to.eq(200);

        expect(
            response.body,
            `Expected response body to be an object, but got: ${typeof response.body} with value: ${JSON.stringify(response.body, null, 2)}`
        ).to.be.an("object");

        cy.schemaValidator(response.body, vehicleByUidSchema);

        cy.log(`The Response was: ${JSON.stringify(response.body, null, 2)}`);
    });
});

Then(/^The API respond with status 200 and the details of the vehicle.$/, () => {
	return true;
});
