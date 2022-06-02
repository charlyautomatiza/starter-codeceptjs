Feature('login');

Scenario('Login', ({ I }) => {
    I.seeAppIsInstalled('com.wdiodemoapp');
    I.waitForElement('~Login');
    I.tap('~Login');
    I.waitForElement('~input-email');
    I.fillField('~input-email', 'davert@codecept.io');
    I.fillField('~input-password', 'davert123');
    I.seeElement('~button-LOGIN');
    I.tap('~button-LOGIN');
});

Scenario('Login Page Object Model', ({ I, loginPage, dataCreator }) => {
    I.seeAppIsInstalled('com.wdiodemoapp');
    loginPage.login(dataCreator.getUsername(), dataCreator.getPassword());
});
