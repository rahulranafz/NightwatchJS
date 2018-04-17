/**
 * @fileOverview Make Offer Tests
 * @name makeOfferTests.js
 * @package test-suite/makeOfferTests.js
 * @author
 * @license UNLICENSED
 */

//Imports
var loginSteps = require('../steps/loginSteps');
var homeSteps = require('../steps/homeSteps');
var makeOfferSteps = require('../steps/makeOfferSteps');
module.exports = {

    //Testing Hooks
    /*
     * @name = before
     * This method is used for setting up the environment for the text execution and contains
     * the code which needs to be executed before initial (first) test.
     * @param = {WebDriver} browser
     * */
    before: function (browser) {
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
    },

    /*
     * @name = makeOfferTests
     * This method tests the functionality i.e., user is able to make offers successfully.
     * tests and the closing down
     * @param = {WebDriver} browser
     * */
    'User should able to make offers': function (browser) {

        //Constants
        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const requestNoApproval = globals.development.customerRequests[1];
        const userName = "test user " + randString(11);
        requestNoApproval.firstName = userName;

        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)

        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);

        //Make offer
        makeOfferSteps.makeOffer(browser, requestNoApproval);

    }
};
