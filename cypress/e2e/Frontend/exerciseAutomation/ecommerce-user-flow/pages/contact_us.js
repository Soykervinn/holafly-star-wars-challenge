const url = 'https://automationexercise.com/contact_us'

class contactUs {
    constructor(){
        this.nameBox = '[data-qa="name"]';
        this.emailBox = '[data-qa="email"]';
        this.subjectBox = '[data-qa="subject"]';
        this.messageBox = '[data-qa="message"]';
        this.submitButton = '[data-qa="submit-button"]';
        this.statusMessage = '.status'; 
        this.homeButton =  'span';
    }

    get nameInput(){
        return cy
        .get(this.nameBox).type('Darth Vader');
    }
    get emailInput(){
        cy.readFile('cypress/e2e/Frontend/exerciseAutomation/ecommerce-user-flow/utils/userCredentials.json').then((data) => {
            cy.get(this.emailBox).type(data.email);
        });
    }
    get messageInput(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.messageBox).type(userData.message);
        });
    }

    get submit(){
        return cy
        .get(this.submitButton).click();
    }

    get statusMessageValidation(){
        return cy
        .get(this.statusMessage).should('be.visible')
    }
    
    get goToHome(){
        return cy
        .get(this.homeButton).click();
    }
}
export default new contactUs();