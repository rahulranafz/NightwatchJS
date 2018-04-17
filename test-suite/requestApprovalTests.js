/**
 * @fileOverview Request Approval Tests
 * @name requestApprovalTests.js
 * @package test-suite/requestApprovalTests.js
 * @author
 * @license UNLICENSED
 */

//Imports
var loginSteps = require('../steps/loginSteps');
var homeSteps = require('../steps/homeSteps');
var requestApprovalSteps = require('../steps/requestApprovalSteps');
module.exports = {

    //Testing Hooks
    /*
     * @name = before
     * This method is used for setting up the environment for the text execution and contains
     * the code which needs to be executed before initial (first) test.
     * @param = {WebDriver} client
     * */
    before: function (browser) {
        console.log('Setting up request approval test................');
        loginSteps.navigateToLoginPage(browser);
    },

    /*
     * @name = afterEach
     * This method contains the code that needs to be executed after execution of all the
     * tests and the closing down
     * @param = {WebDriver} client
     * @param = {Object} done to handle async activities
     * */
    afterEach: function (browser, done) {
        done();
    },

    /*
     * @name = after
     * This method contains the code that needs to be executed after execution of all the
     * tests and the closing down
     * @param = {WebDriver} client
     * */
    after: function (browser) {
        browser.end();
        console.log('Closing down request approval test................');
    },

    /*
     * @name = requestApprovalTests
     * This method test the functionality i.e., L type users is able requests for approval successfully
     * and P type users are able to review approval and approve the request successfully.
     * @param = {WebDriver} client
     * */
    'Should able to send requests for approval': function (browser) {

        //Constants
        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const P1 = globals.development.users[8];
        const request = globals.development.customerRequests[0];
        const userName = "test user " + randString(11);
        request.firstName = userName;

        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)

        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);

        // Create new approval request
        requestApprovalSteps.requestApproval(browser, request);

         // Sign out
         homeSteps.signOut(browser);

         // Login P1 user
        loginSteps.loginWithValidCredentials(browser, P1.userId, P1.Password, P1.userName)

         // Review created offer of first user
         requestApprovalSteps.reviewOffer(browser, userName);

        //Approve request
        requestApprovalSteps.approveRequest(browser);

        // Sign out
        homeSteps.signOut(browser);

        //Verify approval
        requestApprovalSteps.verifyApprovalGranted(browser, L1, userName);

    }
};
