/**
 * @fileOverview Home Page
 * @name homePage
 * @module page-objects/homePage.js
 * @author Gaurav Singh
 * @license UNLICENSED
 */

module.exports = {

    /**
     * Used to navigate to homepage.
     * @return {string} launch URL + /home.
     */
    url: function() {
        return this.api.launchUrl + '/home';
    },

    /**
     * @namespace
     * @property {object}  elements                        - The object for home page element selectors.
     * @property {string}  elements.recentCustomer         - Logged in Username.
     * @property {string}  elements.welcomeMessage         - Welcome message section selector.
     * @property {string}  elements.customerListSection    - Customer list section selector.
     * @property {string}  elements.newOpportunityButton   - New opportunity button selector.
     * @property {string}  elements.signOutButton          - Sign out button selector.
     */
    elements: {
        recentCustomer: {
            selector: '//ul[@id="customerDropdown"]/../span',
            locateStrategy: 'xpath'
        },
        welcomeMessage: '#welcome',
        customerListSection: '.custListTitle',
        newOpportunityButton: '.newCustomerGroup',
        signOutButton: '#_ndm-signout'
    },

    /**
     * Used to store unit actions performed on element selectors of Home Page.
     * @namespace
     * @property {object}  commands                                 - The object for login page unit actions.
     * @property {string}  commands.verifySuccessfulLogin           - Verify user name on successful logged in.
     * @property {string}  commands.clickNewOpportunityButton       - Click on new opportunity button.
     * @property {string}  commands.clickRecentCustomerDropDown     - Click recent customer drop-down.
     * @property {string}  commands.clickSignOutButton              - Click sign out button.
     * @property {string}  commands.clickCustomerApproval           - Click customer approval.
     * @property {string}  commands.statusOfGivenCustomer           - Verify status of selected customer.
     */
    commands:[{

        /*
        * @name = verifySuccessfulLogin
        * This method wait for visibility of recent customer name and assert the name.
        * @param = {String} userName - Verifying given user name
        * */
        verifySuccessfulLogin: function (userName) {
            this.api.pause(1000);
            return this.waitForElementVisible('@recentCustomer', 60000)
                    .assert.containsText('@recentCustomer', userName)
        },

        /*
         * @name = clickNewOpportunityButton
         * This method wait for visibility of new opportunity button and click on it.
         * */
        clickNewOpportunityButton: function(){
          this.api.pause(1000);
          return this.waitForElementVisible('@newOpportunityButton', 60000)
                .click('@newOpportunityButton')
        },

        /*
         * @name = clickRecentCustomerDropDown
         * This method wait for visibility of recent customer drop-down and click on it.
         * */
        clickRecentCustomerDropDown: function(){
            this.api.pause(2000);
            return this.waitForElementVisible('@recentCustomer', 60000)
                .click('@recentCustomer')
        },

        /*
         * @name = clickSignOutButton
         * This method wait for visibility of sign out button and click on it.
         * */
        clickSignOutButton: function(){
            this.api.pause(1000);
            return this.waitForElementVisible('@signOutButton', 60000)
                .click('@signOutButton')
        },

        /*
         * @name = clickCustomerApproval
         * This method wait for visibility of sign out button and click on it.
         * @param = {String} offerCreator - Contains the name of the user who is requesting for approval.
         * */
        clickCustomerApproval: function(offerCreator){
            this.api.useXpath()
                .pause(1000)
            return this.waitForElementVisible("//td[text()='" + offerCreator + "']", 60000)
                .click("//td[text()='" + offerCreator + "']")
        },

        /*
         * @name = clickCustomerApproval
         * This method wait for visibility of sign out button and click on it.
         * @param = {String} offerCreator - Contains the name of the user who is requesting for approval.
         * */
        statusOfGivenCustomer: function (offerCreator) {
            this.api.useXpath()
                .pause(1000)
            return this.waitForElementVisible("//td[text()='" + offerCreator + "']/../td[3]", 60000)
                .assert.containsText("//td[text()='" + offerCreator + "']/../td[3]"
                    , 'Approval Granted')
        }


    }]
};
