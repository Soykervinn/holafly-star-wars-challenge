const url = 'https://automationexercise.com/payment_done/30000'

class paymentDone {
    constructor(){
        this.navigationBar = '.nav';
        this.paymentTittle = '[data-qa="order-placed"] > b';
        this.downloadButton = '.col-sm-9 > .btn-default';
        this.continueButton = '[data-qa="continue-button"]';

    }

    get finishPaymentFlow(){
        return cy
        .get(this.continueButton).click();
    }

}
export default new paymentDone();