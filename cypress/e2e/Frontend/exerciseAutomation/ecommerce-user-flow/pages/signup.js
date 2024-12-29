const url = 'https://automationexercise.com/signup'
import '../../../../../support/commands'

class userRegistration {
    constructor(){
        this.nameBox = '[data-qa="signup-name"]';
        this.signupEmailBox = '[data-qa="signup-email"]';
        this.signupButton = '[data-qa="signup-button"]';
        this.gender = '#id_gender1';
        this.passwordBox = '[data-qa="password"]';
        this.daysBox = '[data-qa="days"]';
        this.monthsBox = '[data-qa="months"]';
        this.yearsBox = '[data-qa="years"]';
        this.newsletterCheck = '#newsletter';
        this.offersCheck = '#optin';
        this.firstNameBox = '[data-qa="first_name"]';
        this.lastNameBox = '[data-qa="last_name"]';
        this.companyBox = '[data-qa="company"]';
        this.address1Box = '[data-qa="address"]';
        this.address2Box = '[data-qa="address2"]';
        this.countriesSelector = '[data-qa="country"]';
        this.stateBox = '[data-qa="state"]';
        this.cityBox = '[data-qa="city"]';
        this.zipCodeBox = '[data-qa="zipcode"]';
        this.mobileNumberBox = '[data-qa="mobile_number"]';
        this.createAccountButton = '[data-qa="create-account"]';
        this.continueButton = '[data-qa="continue-button"]';

    }
    get visitSignupView(){
        return cy.visit(url);
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

    get gederSelected(){
        return cy
        .get(this.gender).click();
    }

    get passwordInput(){
        cy.randomPasswordGenerator('cypress/e2e/Frontend/exerciseAutomation/ecommerce-user-flow/utils/userCredentials.json').then((randomPassword) => {
            cy.get(this.passwordBox).type(randomPassword);
        });
    }

    get dayOfBirth(){
        return cy
        .get('select#days').select('31');
    }

    get monthOfBirth(){
        return cy
        .get('select#months').select('10');
    }
    get yearOfBirth(){
        return cy
        .get('select#years').select('1989');
    }
    get newsLetterAgree(){
        return cy
        .get(this.newsletterCheck).click();
    }

    get offersAgree(){
        return cy
        .get(this.offersCheck).click();
    }

    get firstNameInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.firstNameBox).type(userData.userInfo.name);
    });
    }

    get lastNameInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.lastNameBox).type(userData.userInfo.lastName);
    });
    }

    get companyInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.companyBox).type(userData.userInfo.company);
    });
    }

    get address1Input(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.address1Box).type(userData.addressInformation.address_1);
    });
    }

    get address2Input(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.address2Box).type(userData.addressInformation.address_2);
    });
    }

    get country(){
        return cy
        .get('select#country').select('United States');
    }

    get stateInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.stateBox).type(userData.addressInformation.state);
    });
    }

    get cityInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.cityBox).type(userData.addressInformation.city);
    });
    }

    get postalCodeInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.zipCodeBox).type(userData.addressInformation.zipCode);
    });
    }

    get phoneNumberInput(){
        cy.fixture('userData.json').then((userData) => {
        return cy
        .get(this.mobileNumberBox).type(userData.addressInformation.mobileNumber);
    });
    }

    get createAccount(){
        return cy
        .get(this.createAccountButton).click();
    }

    get confirmRegistration(){
        return cy
        .get(this.continueButton).click();
    }

}
export default new userRegistration();