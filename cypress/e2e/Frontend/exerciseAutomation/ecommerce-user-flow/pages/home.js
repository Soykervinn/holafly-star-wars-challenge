const url = 'https://automationexercise.com/'

class homeScreen {
    constructor(){
        this.logo = 'img[alt="Website for automation practice"]';
        this.cartButton = '.shop-menu > .nav > :nth-child(3) > a';
        this.menuBlock = '.shop-menu > .nav';
        this.logoutButton = '.shop-menu > .nav > :nth-child(4) > a';
        this.contactusButton = ':nth-child(9) > a';
        this.homeButton = '.nav > :nth-child(1) > a';
    }

    get VisitPage(){
        return cy.visit(url);
    }
    get scrollDown(){
        return cy
        .contains('Pure Cotton V-Neck T-Shirt').scrollIntoView()
    }
    get logoVisible(){
        return cy
        .get(this.logo).should('be.visible')
    }
    get menuBarValidation(){
        return cy
        .get(this.menuBlock).should('be.visible')
    }
    get goToCart(){
        return cy
        .get(this.cartButton).click();
    }
    get contactUs(){
        return cy
        .get(this.contactusButton).click();
    }
    get logout(){
        return cy
        .get(this.logoutButton).click();
    }
    get goHome(){
        return cy
        .get(this.homeButton).click();
    }

    get checkHome(){
        return cy
        .url().should('eq', url);
    }
}
export default new homeScreen();
