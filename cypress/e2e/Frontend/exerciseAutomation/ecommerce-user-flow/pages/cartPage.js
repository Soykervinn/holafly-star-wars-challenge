const url = 'https://automationexercise.com/view_cart'

class cartPage {
    constructor(){
        this.proceedButton = '.col-sm-6 > .btn';
        this.checkoutResult = '.modal-header';
        this.registerLoginButton = '.modal-body > :nth-child(2) > a > u';
    }

    get proceedToCheckout(){
        return cy
        .get(this.proceedButton).click();
    }
    get registerLoginAction(){
        return cy
        .get(this.registerLoginButton).click();
    }

}
export default new cartPage();