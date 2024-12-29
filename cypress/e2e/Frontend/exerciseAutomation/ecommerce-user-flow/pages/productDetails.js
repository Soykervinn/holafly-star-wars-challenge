const url = 'https://automationexercise.com/product_details/29'

class productDetails {
    constructor(){
        this.viewProductButton = 'a[href="/product_details/29"]';
        this.quantityBox = '#quantity';
        this.addToCartButton = 'button[type="button"]';
        this.addedResult = '.modal-content';
        this.viewCartButton = 'a[href="/view_cart"] > u';
        this.proceedButton = '.col-sm-6 > .btn';
        this.checkoutResult = '.modal-header';
    }

    get viewProduct(){
        return cy
        .get(this.viewProductButton).click()
    }

    get quantity(){
        return cy
        .get(this.quantityBox).clear().type('30');
    }
    get addToCart(){
        return cy
        .get(this.addToCartButton).click()
    }
    get addedSuccess(){
        return cy
        .get(this.addedResult).should('exist');
    }
    get viewCart(){
        return cy
        .get(this.viewCartButton).click()
    }

    get proceedToCheckout(){
        return cy
        .get(this.proceedButton).click()
        .get(this.checkoutResult).should('exist');
    }
}
export default new productDetails();
