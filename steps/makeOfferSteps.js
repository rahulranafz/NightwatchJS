/**
 * @fileOverview Make Offer Steps
 * @name makeOfferSteps
 * @module steps/makeOfferSteps.js
 * @author
 * @license UNLICENSED
 */

//Imports
var customerRequestsSteps = require('./customerRequestsSteps');

var makeOfferSteps = function () {

    /*
     * @name = makeOffer
     * This method is for making offer by filling out all the mandatory fields on the opportunity
     * form page.
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.makeOffer = function (browser, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.clickMakeOfferButton();
        newOpportunityPage.clickAccept();
        newOpportunityPage.verifyAcceptedMakeOffer();
    };

    /*
     * @name = verifyMakeOffer
     * This method is for verifying make offer button
     * @param = {WebDriver} browser
     * @param = {Object} request
     * */
    this.verifyMakeOffer = function (browser, request) {
        var newOpportunityPage = browser.page.newOpportunityPage();
        customerRequestsSteps.fillOpportunityForm(browser, request);
        newOpportunityPage.clickNotesSection();
        newOpportunityPage.enterNotes();
        newOpportunityPage.clickSaveNotesButton();
        newOpportunityPage.verifyOfferButton();

    };

};

module.exports = new makeOfferSteps();


