const { setHeadlessWhen, setCommonPlugins } = require('@codeceptjs/configure');

// turn on headless mode when running with HEADLESS=true environment variable
// export HEADLESS=true && npx codeceptjs run
setHeadlessWhen(process.env.HEADLESS);

// enable all common plugins https://github.com/codeceptjs/configure#setcommonplugins
setCommonPlugins();

exports.config = {
  tests: './*_test.js',
  output: './output',
  helpers: {
    Appium: {
      app: __dirname + '/app/Android-NativeDemoApp-0.4.0.apk',
      platform: 'Android',
      device: 'emulator-5554',
      platformVersion: '10.0',
      desiredCapabilities: {
          automationName: 'UiAutomator2',
          appPackage: 'com.wdiodemoapp',  // Package name of your app
          appActivity: 'com.wdiodemoapp.SplashActivity', // App activity of the app
      }
    }
  },
  include: {
    I: './steps_file.js',
    loginPage: './pages/loginPage.js',
    dataCreator: './utils/dataCreator.js'
  },
  "plugins": {
    "allure": {
        "enabled": true,
        "screenshotsOnFails": true
    },
    "stepByStepReport": {
        "enabled": true,
        "saveAllStepScreenshots": true,
        "fullPageScreenshots": true,
        "screenshotsForAllureReport": true,
    }
  },
  bootstrap: null,
  mocha: {},
  name: 'codecept-appium-test'
}