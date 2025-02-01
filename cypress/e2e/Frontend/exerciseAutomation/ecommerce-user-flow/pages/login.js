const url = 'https://automationexercise.com/login'

class loginView {
    constructor(){
        this.headerPage = '.header-middle > .container > .row';
        this.newUserSignupText = '.signup-form > h2';
        this.nameBox = '[data-qa="signup-name"]';
        this.signupEmailBox = '[data-qa="signup-email"]';
        this.signupButton = '[data-qa="signup-button"]';
        this.loginEmailBox = '[data-qa="login-email"]';
        this.passwordBox = '[data-qa="login-password"]';
        this.loginButton = '[data-qa="login-button"]';
    }
    get visitLoginView(){
        return cy.visit(url);
    }

    get headerComponent(){
        return cy
        .get(this.headerPage).should('exist');
    }

    get signupTittle(){
        return cy
        .get(this.newUserSignupText).should('exist');
    }

    get nameInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.nameBox).type(userData.userInfo.name);
    });
    }
    get signupEmailInput(){
        cy.randomEmailGenerator('cypress/e2e/Frontend/exerciseAutomation/ecommerce-user-flow/utils/userCredentials.json').then((randomEmail) => {
            cy.get(this.signupEmailBox).type(randomEmail);
        });
    }

    get signUp(){
        return cy
        .get(this.signupButton).click();
    }

    get loginEmailInput(){
        cy.readFile('cypress/e2e/Frontend/exerciseAutomation/ecommerce-user-flow/utils/userCredentials.json').then((data) => {
            cy.get(this.loginEmailBox).type(data.email);
        });
    }
    get passworInput(){
        cy.readFile('cypress/e2e/Frontend/exerciseAutomation/ecommerce-user-flow/utils/userCredentials.json').then((data) => {
            cy.get(this.passwordBox).type(data.password);
        });
    }

    get login(){
        return cy
        .get(this.loginButton).click();
    }

    get urlValidation(){
        return cy
        .url().should('eq', url);
    }

}
export default new loginView();