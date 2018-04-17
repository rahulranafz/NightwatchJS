/**
 * @fileOverview Customer Requests Steps
 * @name customerRequestsSteps
 * @module steps/customerRequests_Steps.js
 * @author
 * @license UNLICENSED
 */

var customerRequestsSteps = function () {

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
     * @name = fillOpportunityForm
     * This method is for customers which is requesting for new opportunities
     * @param = {browser} client
     * @param = {customerRequest} request
     * */
    this.fillOpportunityForm = function (browser, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        newOpportunityPage.enterFirstName(request);
        newOpportunityPage.enterCrsNumber(request);
        newOpportunityPage.enterBisNumber(request);
        newOpportunityPage.enterGrossIncome(request);
        newOpportunityPage.selectPackage(request);
        newOpportunityPage.selectDealType(request);
        newOpportunityPage.selectCreditAppRadioBtn(request);
        newOpportunityPage.enterTotalNewLendingAmount(request);
        newOpportunityPage.selectFundingRequiredRadioBtn(request);
        newOpportunityPage.enterTotalNewSecurityAmt(request);
        newOpportunityPage.selectPricingCategory(request);
        newOpportunityPage.selectProduct(request);
        newOpportunityPage.selectTerm(request);
        newOpportunityPage.selectLoanPurpose(request);
        newOpportunityPage.selectRepaymentType(request);
        newOpportunityPage.selectRepaymentFrequency(request);

    };


};

module.exports = new customerRequestsSteps();
