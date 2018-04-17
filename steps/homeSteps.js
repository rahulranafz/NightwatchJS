/**
 * @fileOverview Login Steps
 * @name homeSteps.js
 * @author
 * @license UNLICENSED
 */

var homeSteps = function () {

    /*
     * @name = navigateOnNewOpportunityPage
     * This method is for navigating the user to new opportunity page
     * @param = {WebDriver} browser
     * */
    this.navigateOnNewOpportunityPage = function (browser) {
        var homePage = browser.page.homePage();
        const globals = browser.globals;
        globals.waitForPageLoaded(browser);
        browser.pause(500);
        homePage.clickNewOpportunityButton();
        browser.pause(250);
    };

    /*
     * @name = signOut
     * This method is for logging out current logged in user from the application.
     * @param = {WebDriver} browser
     * */
    this.signOut = function (browser) {
        var homePage = browser.page.homePage();
        homePage.clickRecentCustomerDropDown();
        homePage.clickSignOutButton();
    };

    /*
     * @name = selectCustomerForApproval
     * This method is for selecting customers request approval.
     * @param = {WebDriver} browser
     * @param = {String} offerCreator
     * */
    this.selectCustomerForApproval = function (browser, offerCreator) {
        var homePage = browser.page.homePage();
        homePage.clickCustomerApproval(offerCreator);
    };

    /*
     * @name = verifyApprovalStatus
     * This method is for verifying approval status.
     * @param = {WebDriver} browser
     * @param = {String} offerCreator
     * */
    this.verifyApprovalStatus = function (browser, offerCreator) {
        var homePage = browser.page.homePage();
        homePage.statusOfGivenCustomer(offerCreator);
    };

};

module.exports = new homeSteps();

