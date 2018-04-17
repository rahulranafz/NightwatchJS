/**
 * @fileOverview Test customer
 * @name customerTests
 * @module test-suite/customerTests.js
 * @author
 * @license UNLICENSED
 */

//Imports
const globalsObj = require("../globals.js");
var loginSteps = require("../steps/loginSteps");
var customerRequestsSteps = require("../steps/customerRequestsSteps");
var requestApprovalSteps = require('../steps/requestApprovalSteps');
var makeOfferSteps = require('../steps/makeOfferSteps');

//Global Declares
const customerRequests = globalsObj.development.customerRequests;
var counter = 0;
var customerRequestsTests = {
    //Testing Hooks
    /*
    * @name = before
    * This method is used for setting up the environment for the text execution and contains
    * the code which needs to be executed before initial (first) test.
    * @param = {WebDriver} browser
    * */
    before: function (browser) {
        console.log('Setting up customer tests................');
        const user = globalsObj.development.users[2];
        browser.windowMaximize();
        loginSteps.navigateToLoginPage(browser);
        browser.pause(1000);
        loginSteps.loginWithValidCredentials(browser, user.userId, user.Password
            , user.userName);
    },

    /*
   * @name = beforeEach
   * This method contains the code which needs to be executed before every test.
   * @param = {WebDriver} browser
   * */
    beforeEach: function (browser) {
        customerRequestsSteps.navigateOnNewOpportunityPage(browser);
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
        console.log('Closing down customer test................');
    }

};

while (customerRequests[counter]) {
    const request = customerRequests[counter];
    const requirement = request.requirement;
    const testCaseTitle = 'Should be able to submit customerRequests of '+requirement+' without any issue';
    customerRequestsTests[testCaseTitle] = function (browser) {
        const globals = browser.globals;
        const randString = globals.genRandString;
        const userName = "test user " + randString(11);
        request.firstName = userName;
        if (request.approvalRequired === 'Yes') {
            requestApprovalSteps.verifyRequestApproval(browser, request);
        } else {
            makeOfferSteps.verifyMakeOffer(browser, request);
        }
    };
    counter++;
}

module.exports = customerRequestsTests;
