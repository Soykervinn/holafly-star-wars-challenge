const url = 'https://automationexercise.com/checkout'

class checkoutFlow {
    constructor(){
        this.addressDeliveryTittle = '#address_delivery > .address_title > .page-subheading';
        this.addressInvoiceTittle = '#address_invoice';
        this.commentBox = '.form-control';
        this.placedOrderButton = ':nth-child(7) > .btn';
    }
    get componentsValidation(){
        return cy
        .get(this.addressDeliveryTittle).should('exist')
        .get(this.addressInvoiceTittle).should('exist');
    }

    get commentInput(){
        cy.fixture('userData.json').then((userData) => {
            return cy
            .get(this.commentBox).type(userData.comment);
        });
    }

    get orderConfirmation(){
        return cy
        .get(this.placedOrderButton).click();
    }

}
export default new checkoutFlow();