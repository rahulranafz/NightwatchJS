/**
 * @fileOverview Request Approval Steps
 * @name requestApprovalSteps
 * @module steps/requestApproval_Steps.js
 * @author
 * @license UNLICENSED
 */

//Imports
var homeSteps = require('./homeSteps');
var loginSteps = require('./loginSteps');
var customerRequestsSteps = require('./customerRequestsSteps');

var requestApprovalSteps = function () {

    /*
     * @name = requestApproval
     * This method is for customers which is requesting for new opportunities
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.requestApproval = function (browser, request){
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.enterCashBackAmount(request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.clickRequestApprovalButton();
        newOpportunityPage.verifyAbondonedRequestBtnVisibility();
    };


    /*
     * @name = verifyRequestApproval
     * This method is for customers which is requesting for verifying request approval button.
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.verifyRequestApproval = function (browser, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.enterCashBackAmount(request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.verifyRequestApprovalButton();
    };

    /*
     * @name = reviewOffer
     * This method is for reviewing requests approval by customers
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.reviewOffer = function (browser, offerCreator){
        var newOpportunityPage = browser.page.newOpportunityPage();
        //Select customer request for approval from home page of the P1 type user
        homeSteps.selectCustomerForApproval(browser, offerCreator);
        //Review Offer
        newOpportunityPage.verifyNotesRequiredStatusWorking();
    };

    /*
     * @name = approveRejectButtonVisibility
     * This method is approving request.
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.approveRejectButtonVisibility = function (browser) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.verifyApproveBtnVisibility();
        newOpportunityPage.verifyRejectBtnVisibility();

    };

    /*
     * @name = approveRequest
     * This method is approving request.
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.approveRequest = function (browser) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.clickApproveRequestButton();
    };

    /*
     * @name = verifyApprovalGranted
     * This method is verifying approval granted.
     * @param = {WebDriver} browser
     * @param = {Object} L1
     * @param = {Object} request
     * */
    this.verifyApprovalGranted = function (browser, L1, offerCreator) {
        loginSteps.loginWithValidCredentials(browser, L1.userId, L1.Password, L1.userName);
        homeSteps.verifyApprovalStatus(browser, offerCreator);
    };

    /*
     * @name = verifyRequestApprovalBtnHidden
     * This method is verifying the visibility of request approval button
     * @param = {WebDriver} browser
     * @param = {Object} L1
     * @param = {Object} request
     * */
    this.verifyRequestApprovalBtnHidden = function (browser, L1, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.verifyRequestApprovalBtnNotPresent();
    };

    /*
     * @name = verifyMakeOfferBtnHidden
     * This method is verifying the visibility of request approval button
     * @param = {WebDriver} browser
     * @param = {Object} L1
     * @param = {Object} request
     * */
    this.verifyMakeOfferBtnHidden = function (browser, L1, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.enterCashBackAmount(request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.verifyMakeOfferBtnNotPresent();
    };


};

module.exports = new requestApprovalSteps();


