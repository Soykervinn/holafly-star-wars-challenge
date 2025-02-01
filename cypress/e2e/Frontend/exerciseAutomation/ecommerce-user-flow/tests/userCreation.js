import userRegistration from "../pages/signup";


Given(/^the user is on the signup page.$/, () => {
	userRegistration.visitSignupView;
});

When(/^the user enters their Name and Email.$/, () => {
	userRegistration.nameInput;
    userRegistration.signupEmailInput;
    userRegistration.signUp;
});

When(/^completes the form with personal information.$/, () => {
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
});

When(/^submits the account creation form.$/, () => {
	userRegistration.createAccount;
});

Then(/^the user's account should be created successfully.$/, () => {
	return true;
});
