/**
 * @fileOverview Make Offer Tests
 * @name makeOfferTests.js
 * @package test-suite/smoke-tests/makeOfferTests.js
 * @author
 * @license UNLICENSED
 */
//Global Declares
var userName = "";
//Imports
var loginSteps = require('../../steps/loginSteps');
var homeSteps = require('../../steps/homeSteps');
var requestApprovalSteps = require('../../steps/requestApprovalSteps');
var makeOfferSteps = require('../../steps/makeOfferSteps');
module.exports = {
    /*
     * @name = before
     * This method is used for setting up the environment for the text execution and contains
     * the code which needs to be executed before initial (first) test.
     * @param = {WebDriver} browser
     * */
    before: function (browser) {
        console.log('Setting up make offer test................');
        loginSteps.navigateToLoginPage(browser);

    },

    /*
     * @name = afterEach
     * This method contains the code that needs to be executed after execution of all the
     * tests and the closing down.
     * @param = {Object} done to handle async activities
     * */
    afterEach: function (done) {
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
        console.log('Closing down make offer test................');
    },

    /*
     * @name = makeOfferVisibilityTest
     * This method tests the functionality i.e., make offerbutton should be visible when cash back
     * input field is empty.
     * @param = {WebDriver} browser
     * */
    'Make offer button should be visible when cash back input field is empty': function (browser) {

        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const requestNoApproval = globals.development.customerRequests[1];
        userName = "test user " + randString(11);
        requestNoApproval.firstName = userName;
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);
        //Make offer
        makeOfferSteps.verifyMakeOffer(browser, requestNoApproval);
        // Sign out
        homeSteps.signOut(browser);
    },

    /*
     * @name = requestApprovalBtnVisibilityTest
     * This method tests the functionality i.e., request approvalbutton should be hidden when cash
     * back input field is empty.
     * @param = {WebDriver} browser
     * */
    'Request approval button should be hidden when cash back input field is empty': function (browser) {
        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const requestNoApproval = globals.development.customerRequests[1];
        userName = "test user " + randString(11);
        requestNoApproval.firstName = userName;
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);
        // Assert if request approval button is hidden
        requestApprovalSteps.verifyRequestApprovalBtnHidden(browser, L1, requestNoApproval);
    },

    /*
     * @name = makeOfferVisibilityTest
     * This method tests the functionality i.e., make offerbutton should be visible when cash back
     * input field is empty.
     * @param = {WebDriver} browser
     * */
    'Request approval button should be visible when cash back input field is populated': function (browser) {

        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const requestNoApproval = globals.development.customerRequests[1];
        userName = "test user " + randString(11);
        requestNoApproval.firstName = userName;
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);
        // Assert if request approval button is visible
        requestApprovalSteps.verifyRequestApproval(browser, requestNoApproval);
    },

    /*
     * @name = makeOfferVisibilityTest
     * This method tests the functionality i.e., make offerbutton should be visible when cash back
     * input field is empty.
     * @param = {WebDriver} browser
     * */
    'Make offer button should be hidden when cash back input field is populated': function (browser) {
        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const requestNoApproval = globals.development.customerRequests[1];
        userName = "test user " + randString(11);
        requestNoApproval.firstName = userName;
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);
        // Assert if make offer button is hidden
        requestApprovalSteps.verifyMakeOfferBtnHidden(browser, L1, requestNoApproval);
        // Sign out
        homeSteps.signOut(browser);
    },

    /*
     * @name = requestApprovalTests
     * This method tests the functionality i.e., right level user should be able to submit request for
     * approval when required fields and cash back input field is populated.
     * @param = {WebDriver} browser
     * */
    'Rights level user should be able to submit request for approval when required fields and cash back input field are populated':
        function (browser) {
            const globals = browser.globals;
            const randString = globals.genRandString;
            const L1 = globals.development.users[2];
            const requestApproval = globals.development.customerRequests[0];
            userName = "test user " + randString(11);
            requestApproval.firstName = userName;
            // Login with L1 type user
            loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
            // Navigate to new opportunity page
            homeSteps.navigateOnNewOpportunityPage(browser);
            // Create new offer
            requestApprovalSteps.requestApproval(browser, requestApproval);
            // Sign out
            homeSteps.signOut(browser);
        },

    /*
     * @name = approveRejectRequestTests
     * This method tests the functionality i.e., medium level user should be able to approve or reject
     * request escalated by right level user.
     * @param = {WebDriver} browser
     * */
    'Medium level user should be able to approve or reject request escalated by rights level user': function (browser) {

        const globals = browser.globals;
        const randString = globals.genRandString;
        const L1 = globals.development.users[2];
        const P1 = globals.development.users[8];
        const requestApproval = globals.development.customerRequests[0];
        userName = "test user " + randString(11);
        requestApproval.firstName = userName;
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName)
        // Navigate to new opportunity page
        homeSteps.navigateOnNewOpportunityPage(browser);
        // Create new offer
        requestApprovalSteps.requestApproval(browser, requestApproval);
        // Sign out
        homeSteps.signOut(browser);
        // Login with L1 type user
        loginSteps.loginWithValidCredentials(browser, P1.userId, P1.Password, P1.userName)
        // Review created offer of first user
        requestApprovalSteps.reviewOffer(browser, userName);
        // Assert if request approval and deny request button's are present
        requestApprovalSteps.approveRejectButtonVisibility(browser);

    }
};
