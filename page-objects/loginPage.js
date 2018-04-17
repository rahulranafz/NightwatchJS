/**
 * @fileOverview Login Page
 * @name loginPage
 * @module page-objects/loginPage.js
 * @author Gaurav Singh
 * @license UNLICENSED
 */

module.exports = {

    /**
     * @name = url
     * Used to navigate to login page.
     * @return {string} launch URL + /login.
     */
    url: function() {
        return this.api.launchUrl + '/login';
    },

    /**
     * Used to store elements selectors
     * @namespace
     * @property {object}  elements                     - The object for login page element selectors.
     * @property {string}  elements.usernameField       - Username input field element selector.
     * @property {string}  elements.passwordField       - Password input field element selector.
     * @property {string}  elements.loginBtn            - Login button element selector.
     */
    elements: {
        usernameField: '#email',
        passwordField: '#password',
        loginButton: 'button[type=submit]'
    },

    /**
     * Used to store unit actions performed on element selectors of Login Page
     * @namespace
     * @property {object}  commands                      - The object for login page unit actions.
     * @property {string}  commands.enterUsername        - Enter username into username field.
     * @property {string}  commands.enterPassword        - Enter Password into Password field.
     * @property {string}  commands.clickLoginBtn        - Click login button.
     * @property {string}  commands.verifyNotLoggedIn    - Verify user not logged in.
     */
    commands:[{

        /*
        * @name = enterUsername
        * This method wait for visibility of username field and enter username into it
        * @param = {String} userId
        * */
        enterUsername: function (userId) {
            this.api.pause(1000);
            return this.waitForElementVisible('@usernameField', 60000)
                .setValue('@usernameField', userId)
        },

        /*
        * @name = enterPassword
        * This method wait for visibility of Password field and enter Password into it
        * @param = {String} Password
        * */
        enterPassword: function (password) {
            this.api.pause(1000);
            return this.waitForElementVisible('@passwordField', 60000)
                .setValue('@passwordField', password)
        },

        /*
        * @name = clickSignInButton
        * This method wait for visibility of sign in button and click on it.
        * */
        clickSignInBtn: function () {
            this.api.pause(1000);
            return this.waitForElementVisible('@loginButton', 60000)
                .click('@loginButton')
        },

        /*
        * @name = verifyNotLoggedIn
        * This method wait for visibility of sign in button and click on it.
        * @param = {String} userName
        * */
        verifyNotLoggedIn: function () {
            this.api.pause(1000);
            return this.expect.element('@loginButton').to.be.visible;
        }
    }]
};

