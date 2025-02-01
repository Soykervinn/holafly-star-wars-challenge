const url = 'https://automationexercise.com/payment'

class paymentFlow {
    constructor(){
        this.header = '.header-middle > .container > .row';
        this.paymentTittle = '.heading';
        this.nameCardBox = '[data-qa="name-on-card"]';
        this.numberCardBox = '[data-qa="card-number"]';
        this.cvvBox = '[data-qa="cvc"]';
        this.expMonthBox = '[data-qa="expiry-month"]';
        this.expYearBox = '[data-qa="expiry-year"]';
        this.payButton = '[data-qa="pay-button"]';
    }
    get componentsValidation(){
        return cy
        .get(this.header).should('exist')
        .get(this.paymentTittle).should('exist');
    }

    get creditCardName(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.nameCardBox).type(userData.creditCard.name);
        });
    }

    get creditCardNumber(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.numberCardBox).type(userData.creditCard.cardNumber);
        });
    }

    get creditCardCvv(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.cvvBox).type(userData.creditCard.cvv);
        });
    }

    get monthExpiration(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.expMonthBox).type(userData.creditCard.expirationDate.month);
        });
    }

    get yearExpiration(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.expYearBox).type(userData.creditCard.expirationDate.year);
        });
    }

    get paymentConfirmation(){
        return cy
        .get(this.payButton).click();
    }

}
export default new paymentFlow();