import loginView from "../pages/login";
import homeScreen from "../pages/home";

Given(/^the user is on the login page.$/, () => {
	loginView.visitLoginView;
});

When(/^the user enters their credentials.$/, () => {
	loginView.loginEmailInput;
	loginView.passworInput;
});

When(/^clicks on the login button.$/, () => {
	loginView.login;
});

Then(/^the user should be logged in successfully.$/, () => {
	homeScreen.checkHome;
});

Then(/^the user should see their profile page.$/, () => {
	return true;
});

When(/^the user clicks on the logout button.$/, () => {
	homeScreen.logout;
});

Then(/^the user should be logged out successfully.$/, () => {
	loginView.urlValidation;
});