const { I } = inject();

module.exports = {

  // insert your locators and methods here
  // setting locators

  loginButton: '~Login',
  fields: {
    email: '~input-email',
    password: '~input-password'
  },
  submitButton: '~button-LOGIN',

  // introducing methods
  login(email, password) {
    I.waitForElement(this.loginButton);
    I.tap(this.loginButton);
    I.waitForElement(this.fields.email);
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.tap(this.submitButton);
  },
}
