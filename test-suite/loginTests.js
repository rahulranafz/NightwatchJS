/**
 * @fileOverview Login Test
 * @name loginTests.js
 * @package test-suite/loginTests.js
 * @author Gaurav Singh
 * @license UNLICENSED
 */
//Imports
var loginSteps = require('../steps/loginSteps');
//Global Declares
var counter = 0;
module.exports = {

    /*
    * @name = before
    * This method is used for setting up the environment for the text execution and contains
    * the code which needs to be executed before initial (first) test.
    * @param = {WebDriver} browser
    * */
    before : function() {
        console.log('Setting up login test................');
    },

    /*
   * @name = beforeEach
   * This method contains the code which needs to be executed before every test.
   * @param = {WebDriver} browser
   * */
    beforeEach: function (browser) {
        loginSteps.navigateToLoginPage(browser);
    },

    /*
    * @name = afterEach
    * This method contains the code that needs to be executed after execution of all the
    * tests and the closing down
    * @param = {WebDriver} browser
    * @param = {Object} done to handle async activities
    * */
    afterEach: function (browser, done) {
        counter++;
        done();
    },

    /*
    * @name = after
    * This method contains the code that needs to be executed after execution of all the
    * tests and the closing down
    * @param = {WebDriver} browser
    * */
    after: function (browser) {
        browser.end();
        console.log('Closing down login test................');
    },

    /*
    * This method test the login functionality i.e., user is not able to login when Password
    * field is empty.
    * @param = {WebDriver} browser
    * */
    'Should not be able to login when password field is empty': function (browser) {
        try{
            const globals = browser.globals;
            const user = globals.development.users[counter];
            loginSteps.loginWithoutPassword(browser, user.userId, user.Password);
            browser.end();
        }catch (err) {
            browser.saveScreenshot('./screenshots/login-without-password.png');
        }
    },

    /*
    * This method test the login functionality i.e., user is not able to login when username
    * field is empty.
    * @param = {WebDriver} browser
    * */
    'Should not be able to login when username field is empty': function (browser) {
        try{
            const globals = browser.globals;
            const user = globals.development.users[counter];
            loginSteps.loginWithoutUsername(browser, user.userId, user.Password);
            browser.end();
        }catch (err){
            browser.saveScreenshot('./screenshots/login-without-username.png');
        }

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 1 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);
    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 2 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 3 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 4 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 5 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 6 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 7 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 8 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 9 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    },

    /*
    * This method test the login functionality by entering valid user credentials stored in the
    * global file.
    * @param = {WebDriver} browser
    * */
    'Should be able to login test user 10 without any issue': function (browser) {
        const user = browser.globals.development.users[counter];
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);

    }
};
