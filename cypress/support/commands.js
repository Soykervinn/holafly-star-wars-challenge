Cypress.Commands.add("randomEmailGenerator", (filePath) => {
    // Lee el correo electrónico de la ejecución anterior desde el archivo JSON
    cy.readFile(filePath).then((data) => {
        let previousEmail = data.email;
        let randomEmail;

        // Genera correos electrónicos aleatorios hasta que obtengas uno que no sea igual al correo electrónico anterior
        do {
            randomEmail = `test${Math.floor(Math.random() * 10000)}@test.com`;
        } while (randomEmail === previousEmail);
        // Actualiza solo la propiedad de correo electrónico del objeto

        data.email = randomEmail;

        // Guarda el nuevo correo electrónico en el archivo JSON
        cy.writeFile(filePath, data);

        return cy.wrap(randomEmail);
    });
});

Cypress.Commands.add("randomPasswordGenerator", (filePath) => {
    // Lee la contraseña de la ejecución anterior desde el archivo JSON
    cy.readFile(filePath).then((data) => {
        let previousPassword = data.password;
        let randomPassword;

        // Genera contraseñas aleatorias hasta que obtengas una que no sea igual a la contraseña anterior
        do {
            randomPassword = Math.random().toString(36).substr(2, 8);
        } while (randomPassword === previousPassword);

        // Actualiza solo la propiedad de contraseña del objeto
        data.password = randomPassword;

        // Guarda el objeto completo de nuevo en el archivo JSON
        cy.writeFile(filePath, data);

        return cy.wrap(randomPassword);
    });
});