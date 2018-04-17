/**
 * @fileOverview Login Steps
 * @name loginSteps.js
 * @author
 * @license UNLICENSED
 */

//Globals
var counter = 1;

var loginSteps = function () {

    /*
    * @name = loginWithValidCredentials
    * This method performs login with valid credentials
    * @param = {browser} client
    * @param = {String} userId
    * @param = {String} Password
    * @param = {String} userName
    * */

    this.loginWithValidCredentials = function (browser, userId, password, userName) {
        var loginPage = browser.page.loginPage();
        var homePage = browser.page.homePage();
        loginPage.enterUsername(userId);
        loginPage.enterPassword(password);
        loginPage.clickSignInBtn();
        browser.saveScreenshot('./screenshots/login-loaded-user'+counter+'.png')
        console.log(userName);
        homePage.verifySuccessfulLogin(userName);
        browser.saveScreenshot('./screenshots/login-status'+counter+'.png')
        counter++;
    };

    /*
    * @name = loginWithoutPassword
    * This method performs login test without entering password user is not able to logged in.
    * @param = {browser} client - web driver instance to interact with browser using selenium api
    * @param = {String} userId - User name for log in into the application
    * @param = {String} Password - User password is empty
    * */
    this.loginWithoutPassword = function (browser, userId, password) {
        var loginPage = browser.page.loginPage();
        loginPage.enterUsername(userId);
        loginPage.enterPassword(password);
        loginPage.clickSignInBtn();
        browser.pause(1000);
        browser.acceptAlert();
        loginPage.verifyNotLoggedIn();
    };

    /*
    * @name = loginWithoutUsername
    * This method performs login test without entering username user is not able to logged in.
    * @param = {browser} client
    * @param = {String} userId
    * @param = {String} Password
    * */
    this.loginWithoutUsername = function (browser, userId, password) {
        var loginPage = browser.page.loginPage();
        loginPage.enterUsername(userId);
        loginPage.enterPassword(password);
        loginPage.clickSignInBtn();
        browser.pause(1000);
        browser.acceptAlert();
        loginPage.verifyNotLoggedIn();
    };

    /*
     * @name = navigateToLoginPage
     * This method do navigate to the login page.
     * @param = {browser} client
     * */
    this.navigateToLoginPage = function (browser) {
        var loginPage = browser.page.loginPage();
        var globals = browser.globals;
        loginPage.navigate();
        browser.windowMaximize();
        globals.waitForPageLoaded(browser);
    }
};

module.exports = new loginSteps();
