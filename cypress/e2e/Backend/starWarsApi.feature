Feature: holafly-star-wars-api-testing.

#//? Endpoints.

#//* 1. List of Endpoints available in the SWAPI.  

Scenario: Get all endpoints of SWAPI.
    Given That I want to know the endpoints of the SWAPI
    When I send a GET request to the SWAPI.
    Then The API respond with status 200 and the endpoints are displayed.

#//? Ships Endpoint.

#//* 2. List of ships. 

Scenario: List of Starships.
    Given That I want to know the all Star Wars ships.
    When I send a GET request to the ships endpoint.
    Then The API respond with status 200 and the List of ships.

#//* 2.1 GET Ship by uid. 

Scenario: Get Starship by uid | Millennium Falcon.
    Given That I want to know the details of a specific ship.
    When I send a GET request to the ships endpoint with the uid.
    Then The API respond with status 200 and the details of the ship.


#//? People endpoint.

#//* 3. List of people.

Scenario: List of characters.
    Given That I want to know the all Star Wars characters.
    When I send a GET request to the characters endpoint.
    Then The API respond with status 200 and the List of characters.

#//* 3.1 GET People by uid.

Scenario: Get character by uid | Luke Skywalker.
    Given That I want to know the details of a specific character.
    When I send a GET request to the characters endpoint with the uid.
    Then The API respond with status 200 and the details of the character.

#//* 3.2 Maximum of characters.

Scenario: Maximum of characters.
    Given That I want to know the maximum number of characters.
    When I send a GET request to the list characters endpoint.
    Then The API respond with status 200 and the maximum number of characters available.

#//* 3.3 GET People by uid | Character not found status 404.

Scenario: Get character by uid 99 | Character not found.
    Given That I want to validate the response when the character is not found.
    When I send a GET request to the characters endpoint with the uid that doesn't exist.
    Then The API respond with status code 404 and the related message.

#//? Planets endpoint.

#//* 4. List of planets.

Scenario: List of planets.
    Given That I want to know the all Star Wars planets.
    When I send a GET request to the planets endpoint.
    Then The API respond with status 200 and the List of planets.

#//* 4.1 GET Planet by uid.

Scenario: Get planet by uid | Tatooine.
    Given That I want to know the details of a specific planet.
    When I send a GET request to the planets endpoint with the uid.
    Then The API respond with status 200 and the details of the planet.

#//* 4.2 GET Properties of planet 27. 

Scenario: Get properties of planet 27.
    Given That I want to know the properties of the planet 27.
    When I send a GET request to the planets endpoint with the uid 27.
    Then The API respond with status 200 and the properties of the planet 27.

#//? Films endpoint.

#//* 5. List of films.

Scenario: List of films.
    Given That I want to know the all Star Wars films.
    When I send a GET request to the films endpoint.
    Then The API respond with status 200 and the List of films.

#//* 5.1 GET Film by uid.

Scenario: Get film by uid | The Empire Strikes Back.
    Given That I want to know the details of a specific film.
    When I send a GET request to the films endpoint with the uid.
    Then The API respond with status 200 and the details of the film.