import homeScreen from "../pages/home";
import productDetails from "../pages/productDetails";
import cartPage from "../pages/cartPage";
import loginView from "../pages/login";
import userRegistration from "../pages/signup";
import checkoutFlow from "../pages/checkout";
import paymentFlow from "../pages/payment";
import paymentDone from "../pages/paymentDone";
import contactUs from "../pages/contact_us";

//*TODO: Implement step definitions for the following steps:

Given(/^the user is on the e-commerce website.$/, () => {
	homeScreen.VisitPage;
});

When(/^the user scrolls down about halfway down the page.$/, () => {
	homeScreen.scrollDown;
});

When(/^the user chooses a product and clicks on 'View product' under the picture of the product.$/, () => {
	productDetails.viewProduct;
});

When(/^the user enters '30' in the Quantity box.$/, () => {
	productDetails.quantity;
});

When(/^the user clicks 'Add to cart'.$/, () => {
	productDetails.addToCart;
	productDetails.addedSuccess;
	productDetails.viewCart;
});

When(/^the user clicks on 'Proceed to Checkout'.$/, () => {
	cartPage.proceedToCheckout;
});

When(/^the user fills in an email address and clicks on 'Register Login'.$/, () => {
	cartPage.registerLoginAction;
});

When(/^the user enters name and email under 'New User Signup'.$/, () => {
	loginView.headerComponent;
	loginView.signupTittle;
	loginView.nameInput;
	loginView.signupEmailInput;
	loginView.signUp;
});

When(/^the user fills in all information and clicks on 'Create Account'.$/, () => {
	userRegistration.gederSelected;
	userRegistration.passwordInput;
	userRegistration.dayOfBirth;
	userRegistration.monthOfBirth;
	userRegistration.yearOfBirth;
	userRegistration.newsLetterAgree;
	userRegistration.offersAgree;
	userRegistration.firstNameInput;
	userRegistration.lastNameInput;
	userRegistration.companyInput;
	userRegistration.address1Input;
	userRegistration.address2Input;
	userRegistration.country;
	userRegistration.stateInput;
	userRegistration.cityInput;
	userRegistration.postalCodeInput;
	userRegistration.phoneNumberInput;
	userRegistration.createAccount;
});

When(/^the user clicks on 'Continue' under 'ACCOUNT CREATED!' title.$/, () => {
	userRegistration.confirmRegistration;
});

When(/^the user clicks on the Cart in the header.$/, () => {
	homeScreen.goToCart;
});

When(/^the user clicks on 'Proceed to checkout'.$/, () => {
	cartPage.proceedToCheckout;
});

When(/^the user adds a comment and clicks on 'Place Order'.$/, () => {
	checkoutFlow.commentInput;
	checkoutFlow.orderConfirmation;
});

When(/^the user fills in fake Credit Card information and clicks on 'Pay and Confirm Order'.$/, () => {
	paymentFlow.componentsValidation;
	paymentFlow.creditCardName;
	paymentFlow.creditCardNumber;
	paymentFlow.creditCardCvv;
	paymentFlow.monthExpiration;
	paymentFlow.yearExpiration;
	paymentFlow.paymentConfirmation;
});

When(/^the user clicks on 'Continue' button.$/, () => {
	paymentDone.componentsValidation;
	paymentDone.finishPaymentFlow;
});

When(/^the user clicks on 'Logout' on the top header.$/, () => {
	homeScreen.logout;
});

When(/^the user logs in with previously created user.$/, () => {
	loginView.loginEmailInput;
	loginView.passworInput;
	loginView.login;
});

When(/^the user clicks on 'Contact us' on the header.$/, () => {
	homeScreen.contactUs;
});

When(/^the user fills required data and clicks on 'Submit'.$/, () => {
	contactUs.nameInput;
	contactUs.emailInput;
	contactUs.messageInput;
	contactUs.submit;
	contactUs.statusMessageValidation;
});

When(/^the user presses 'OK' in the pop-up.$/, () => {
	contactUs.goToHome;
});

When(/^the user clicks on the 'Logout' button on the header.$/, () => {
	homeScreen.logout;
	homeScreen.goHome;
});

Then(/^the user should be logged out of the website.$/, () => {
	homeScreen.checkHome;
});
