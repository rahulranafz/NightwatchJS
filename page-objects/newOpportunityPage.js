/**
 * @fileOverview New Opportunity Page
 * @name newOpportunityPage.js
 * @module page_objects/newOpportunityPage.js
 * @author Gaurav Singh
 * @license UNLICENSED
 */

module.exports = {

    /**
     * Used to navigate to homepage.
     * @return {string} launch URL + /customer/:token.
     */
    url: function () {
        return this.api.launchUrl + '/customer/:token';
    },

    /**
     * @namespace
     * @property {object}  elements                                    - The object for customer page element selectors.
     * @property {string}  elements.bankLogo                           - Banner (Bank logo) element selector.
     * @property {string}  elements.newCustomerGroupList               - Customer list section element selector.
     * @property {string}  elements.newCustomerButton                  - New opportunity button element selector.
     * @property {string}  elements.signOutButton                      - Sign out button element selector.
     * @property {string}  elements.draftAddButton                     - Add draft button element selector.
     * @property {string}  elements.firstNameInput                     - First name input field element selector.
     * @property {string}  elements.lastNameInput                      - Last name input field element selector.
     * @property {string}  elements.crsInput                           - CRS input field element selector.
     * @property {string}  elements.BISNumberInput                     - BIS input field element selector.
     * @property {string}  elements.additionalFirstNameInput           - Additional name input field element selector.
     * @property {string}  elements.relationshipStatusDropdown         - Relationship status drop down element selector.
     * @property {string}  elements.grossIncome                        - Gross income input field element selector.
     * @property {string}  elements.packageDropdown                    - Package drop down element selector.
     * @property {string}  elements.dealTypeDropdown                   - Deal type dropdown element selector.
     * @property {string}  elements.geographyDropdown                  - Region dropdown element selector.
     * @property {string}  elements.creditApplicationDropdown          - Credit application dropdown element selector.
     * @property {string}  elements.creditApplicationIDInput           - Credit application ID input field element selector.
     * @property {string}  elements.totalCurrentLendingIDInput         - Total current lending ID input field element selector.
     * @property {string}  elements.totalCurrentLendingBalanceInput    - Total current lending balance input field element selector.
     * @property {string}  elements.totalCurrentLendingSecurityInput   - Total current lending security input field element selector.
     * @property {string}  elements.totalNewLendingAmountInput         - Total new lending amount input field element selector.
     * @property {string}  elements.totalNewSecurityAmountInput        - Total new security amount input field element selector.
     * @property {string}  elements.totalRestructureAmountInput        - Total restructure amount input field element selector.
     * @property {string}  elements.cashBackInput                      - Cashback input field element selector.
     * @property {string}  elements.cashBackPercentageInput            - Cashback percentage input field element selector.
     * @property {string}  elements.feesInput                          - Fees input field element selector.
     * @property {string}  elements.customerClassificationDropdown     - Customer classification dropdown element selector.
     * @property {string}  elements.fundingRequiredDropdown            - Funding required radio button selector.
     * @property {string}  elements.LEPInput                           - LEP input field element selector.
     * @property {string}  elements.LVRInput                           - LVR input field element selector.
     * @property {string}  elements.IOPercentageInput                  - IO percentage input field element selector.
     * @property {string}  elements.transactionalCheckBox              - Transactional checkbox element selector.
     * @property {string}  elements.generalIssuanceCheckBox            - General issuance checkbox element selector.
     * @property {string}  elements.creditCardCheckBox                 - Credit card checkbox element selector.
     * @property {string}  elements.onlineStatementsCheckBox           - Online statements checkbox element selector.
     * @property {string}  elements.businessTransactionalCheckBox      - Business transactional checkbox element selector.
     * @property {string}  elements.businessInsuranceCheckBox          - Business insurance checkbox element selector.
     * @property {string}  elements.lifeInsuranceCheckBox              - Life insurance checkbox element selector.
     * @property {string}  elements.personalLoanCheckBox               - Personal loan checkbox element selector.
     * @property {string}  elements.kiwiSaverCheckBox                  - Kiwi saver checkbox element selector.
     * @property {string}  elements.merchantFacilitiesCheckBox         - Merchant facilities checkbox element selector.
     * @property {string}  elements.termDepositsCheckBox               - Term deposits checkbox element selector.
     * @property {string}  elements.productDropdown                    - Product drop down element selector.
     * @property {string}  elements.termDropdown                       - Term drop down element selector.
     * @property {string}  elements.loanAmountInput                    - Loan amount input element selector.
     * @property {string}  elements.loanPurposeDropdown                - Loan purpose drop down element selector.
     * @property {string}  elements.loanDocumentedTermYearsInput       - Loan documented term years input field element selector.
     * @property {string}  elements.loanDocumentedTermMonthsInput      - Loan documented term months input field element selector.
     * @property {string}  elements.repaymentTypeDropdown              - Repayment type drop down element selector.
     * @property {string}  elements.repaymentFrequencyDropdown         - Repayment frequency drop down element selector.
     * @property {string}  elements.rateInput                          - Rate input field element selector.
     * @property {string}  elements.rateSlider                         - Rate slider element selector.
     * @property {string}  elements.requestApprovalButton              - Request approval button element selector.
     * @property {string}  elements.denyRequestButton                  - Deny request button element selector.
     * @property {string}  elements.notesInput                         - Notes input field element selector.
     * @property {string}  elements.saveNoteButton                     - Save note button element selector.
     * @property {string}  elements.cancelNoteButton                   - Cancel note button element selector.
     * @property {string}  elements.competitorDropdown                 - Competitor dropdown element selector.
     * @property {string}  elements.competitorCustomerClassificationDropdown        - Competitor customer classification dropdown element selector.
     * @property {string}  elements.cashInput                          - Cash input field element selector.
     * @property {string}  elements.verificationDropdown               - Verification dropdown element selector.
     * @property {string}  elements.competitorProductDropdown          - Competitor product dropdown element selector.
     * @property {string}  elements.competitorRateInput                - Competitor rate input element selector.
     * @property {string}  elements.competitorSaveButton               - Competitor save button element selector.
     * @property {string}  elements.competitorCancelButton             - Customer cancel button element selector.
     * @property {string}  elements.totalLendingAmountDropdown         - Total lending amount dropdown element selector.
     * @property {string}  elements.similarOfferProductDropdown        - Similar offer product dropdown selector.
     * @property {string}  elements.similarOfferCustomerClassificationDropdown        - Similar offer customer classification dropdown element selector.
     * @property {string}  elements.LVRDropdown                        - LVR dropdown element selector.
     * @property {string}  elements.competitorDropdown                 - Competitor drop down element selector.
     * @property {string}  elements.relationshipStatusDropdown         - Relationship status drop down element selector.
     * @property {string}  elements.newOpportunityButton               - New opportunity button element selector.
     * @property {string}  elements.signOut                            - Sign out button element selector.
     * @property {string}  elements.notesAccordion                     - Notes accordion element selector.
     * @property {string}  elements.revenueHurdleRow                   - Revenue hurdle row section element selector.
     * @property {string}  elements.revenueHurdleRowAuth               - Revenue hurdle row auth section element selector.
     * @property {string}  elements.revenueHurdleRowReq                - Revenue hurdle row req section element selector.
     * @property {string}  elements.revenueHurdleRowDiff               - Revenue hurdle row diff element selector.
     * @property {string}  elements.cashHurdleRow                      - Cash hurdle row section element selector.
     * @property {string}  elements.cashHurdleRowAuth                  - Cash hurdle row auth section element selector.
     * @property {string}  elements.cashHurdleRowReq                   - Cash hurdle row req section element selector.
     * @property {string}  elements.cashHurdleRowDiff                  - Cash hurdle row diff section element selector.
     * @property {string}  elements.ROEHurdleRow                       - ROE hurdle row section element selector.
     * @property {string}  elements.ROEHurdleRowAuth                   - ROE hurdle row auth section element selector.
     * @property {string}  elements.ROEHurdleRowReq                    - ROE hurdle row req section element selector.
     * @property {string}  elements.ROEHurdleRowDiff                   - ROE hurdle row diff section element selector.
     * @property {string}  elements.NIMHurdleRow                       - NIM hurdle row section element selector.
     * @property {string}  elements.NIMHurdleRowAuth                   - NIM hurdle row auth section element selector.
     * @property {string}  elements.NIMHurdleRowReq                    - NIM hurdle row req section element selector.
     * @property {string}  elements.NIMHurdleRowDiff                   - NIM hurdle row diff section element selector.
     * @property {string}  elements.ROEFacilityLevelRow                - ROE facility level row section element selector.
     * @property {string}  elements.ROEFacilityLevelRowFacility        - ROE facility level row facility section element selector
     * @property {string}  elements.exceptionsRow                       - Exeptions row section element selector.
     * @property {string}  elements.cashBackRow                        - Cashback row section element selector.
     * @property {string}  elements.cashBackRowAuth                    - Cashback row auth section element selector.
     * @property {string}  elements.cashBackRowReq                     - Cashback row req section element selector.
     * @property {string}  elements.cashBackRowDiff                    - Cashback row diff section element selector.
     * @property {string}  elements.makeOfferButton                    - Make offer button element selector.
     * @property {string}  elements.abbandonRequestButton              - Abandon request button element selector.
     * @property {string}  elements.signOutDropDown                    - Sign out dropdown element selector.
     * @property {string}  elements.ROEButton                          - ROE button element selector.
     */
    elements: {
        bankLogo: '.logo',
        newCustomerGroupList: '.newCustomerGroup',
        newCustomerButton: '.newCustomer',
        signOutButton: '#_ndm-signout',
        draftAddButton: 'button.cloneOffer',
        firstNameInput: '#firstName',
        lastNameInput: '#lastName',
        crsInput: '#crs',
        BISNumberInput: '#bisNum',
        additionalFirstNameInput: '#cbFirstName',
        additionalLastNameInput: '#cbLastName',
        relationshipStatusDropdown: '#status',
        grossIncome: '#custIncome',
        packageDropdown : '#select2-segment-container',
        dealTypeDropdown:'#bnz-opp > div.ndm-input-columns.first-column > div:nth-child(2) > div.col-sm-8 > span > span.selection > span',
        geographyDropdown: '#geography',
        creditApplicationDropdown: '#creditRequired',
        creditApplicationIDInput: '#creditId',
        totalCurrentLendingIDInput: '#existingLoans',
        totalCurrentLendingBalanceInput: '#existingLoanBalance',
        totalCurrentLendingSecurityInput: '#existingSecurity',
        totalNewLendingAmountInput: '#totalNewLoans',
        totalNewSecurityAmountInput: '#totalNewSecurity',
        totalRestructureAmountInput: '#totalChangedLoans',
        cashBackInput: '#acqCash',
        cashBackPercentageInput: '#acqCashPct',
        feesInput: '#acqFees',
        customerClassificationDropdown: '#classification > span > span.selection > span > span.select2-selection__arrow',
        fundingRequiredDropdown: '#funding > span > span.selection > span > span.select2-selection__arrow',
        LEPInput: '#lem',
        LVRInput: '#lvr',
        requestApprovalButton: '#exRequested',
        abandonButton: '#abandoned',
        approveRequest:"#exApproved",
        statusWarning: '#loan-header span[class="status-warning"]',
        acceptButton: '#accepted',
        offerStatus: '#approval-action div span p:nth-child(1)',
        IOPercentageInput: '#intOnlyPct',
        transactionalCheckBox: 'input[value="Transactional"]',
        generalIssuanceCheckBox: 'input[value="General Insurance"]',
        creditCardCheckBox: 'input[value="Credit Card"]',
        onlineStatementsCheckBox: 'input[value="Online Statements"]',
        businessTransactionalCheckBox: 'input[value="Business Transactional"]',
        businessInsuranceCheckBox: 'input[value="Business Insurance"]',
        lifeInsuranceCheckBox: 'input[value="Life Insurance"]',
        personalLoanCheckBox: 'input[value="Personal Loan"]',
        kiwiSaverCheckBox: 'input[value="Kiwisaver"]',
        merchantFacilitiesCheckBox: 'input[value="Merchant Facilities"]',
        termDepositsCheckBox: 'input[value="Term Deposits"]',
        productDropdown: '#loan-inputs > div:nth-child(1) > span:nth-child(1) > span > span.selection > span > span.select2-selection__arrow',
        termDropdown: '#loan-inputs > div:nth-child(1) > span:nth-child(2) > span > span.selection > span > span.select2-selection__arrow',
        loanAmountInput: '#loanAmount',
        loanPurposeDropdown: '#loan-inputs > div:nth-child(2) > span:nth-child(2) > span > span.selection > span > span.select2-selection__arrow',
        loanDocumentedTermYearsInput: '#amortYears',
        loanDocumentedTermMonthsInput: '#amortMonths',
        repaymentTypeDropdown: '#loan-inputs > div:nth-child(4) > span:nth-child(1) > span > span.selection > span > span.select2-selection__arrow',
        repaymentFrequencyDropdown: '#loan-inputs > div:nth-child(4) > span:nth-child(2) > span > span.selection > span > span.select2-selection__arrow',
        rateInput: '#theRate',
        rateSlider: '#sliderCy3p6rMu8SaMgLnqY',
        denyRequestButton: '#exDenied',
        notesInput: '#new-note',
        saveNoteButton: '#save-note',
        cancelNoteButton: '#cancel-note',
        competitorDropdown: '#compCompetitor',
        competitorCustomerClassificationDropdown: '#compSecurity',
        cashInput: '#compCash',
        verificationDropdown: '#compVerification',
        competitorProductDropdown: '#compProduct',
        competitorRateInput: '#compRate',
        competitorSaveButton: '#save-coff',
        competitorCancelButton: '#cancel-coff',
        totalLendingAmountDropdown: '#sim-offers-header > span:nth-child(1) > select',
        similarOfferProductDropdown: '#simProductTerm',
        similarOfferCustomerClassificationDropdown: '#simSecurity',
        LVRDropdown: '#sim-offers-header > span:nth-child(4) > select',
        relationShipStatusDropdown: '#opportunity > div.container.offer-table > div.customerInfoBox._ndm-content > div:nth-child(2) > div:nth-child(3) > span > span.selection > span > span.select2-selection__arrow',
        newOpportunityButton: '.newCustomerGroup',
        signOut: '#_ndm-signout',
        notesAccordion: '#notes-header',
        revenueHurdleRow:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(1) >td:nth-child(1)',
        revenueHurdleRowAuth:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(1) >td:nth-child(2)',
        revenueHurdleRowReq:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(1) >td:nth-child(3)',
        revenueHurdleRowDiff:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(1) >td:nth-child(4)',
        cashHurdleRow:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(2) >td:nth-child(1)',
        cashHurdleRowAuth:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(2) >td:nth-child(2)',
        cashHurdleRowReq:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(2) >td:nth-child(3)',
        cashHurdleRowDiff:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(2) >td:nth-child(4)',
        ROEHurdleRow:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(3) >td:nth-child(1)',
        ROEHurdleRowAuth:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(3) >td:nth-child(2)',
        ROEHurdleRowReq:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(3) >td:nth-child(3)',
        ROEHurdleRowDiff:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(3) >td:nth-child(4)',
        NIMHurdleRow:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(4) >td:nth-child(1)',
        NIMHurdleRowAuth:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(4) >td:nth-child(2)',
        NIMHurdleRowReq:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(4) >td:nth-child(3)',
        NIMHurdleRowDiff:'#approval-table > div.roe-breakdown.row > div.col-sm-8 > table > tbody > tr:nth-child(4) >td:nth-child(4)',
        ROEFacilityLevelRow:'#approval-table > div.roe-breakdown.row > div.col-sm-3 > table > thead > tr > td:nth-child(2)',
        ROEFacilityLevelRowFacility:'#approval-table > div.roe-breakdown.row > div.col-sm-3 > table > tbody > tr > td:nth-child(2)',
        exceptionsRow:'#approvals-box > ul.approvals-header > li.approvals-title',
        cashBackRow:'#approvals-box > ul.exception-row > li:nth-child(1)',
        cashBackRowAuth:'#approvals-box > ul.exception-row > li:nth-child(2)',
        cashBackRowReq:'#approvals-box > ul.exception-row > li:nth-child(3)',
        cashBackRowDiff:'#approvals-box > ul.exception-row > li:nth-child(4)',
        makeOfferButton:'#offered',
        abbandonRequestButton:'#abandoned',
        signOutDropDown:'.ndm-nav > li:nth-child(3)',
        ROEButton:'#approval-action > div.error-notes > span.pull-left.roe-error-container > span > span'
    },

    /**
     * Used to store unit actions performed on element selectors of New Opportunity Page
     * @namespace
     * @property {object}  commands                                 - The object for new opportunity page unit actions.
     * @property {string}  commands.selectDropDownOption            - Select given value using selector option.
     * @property {string}  commands.enterFirstName                  - Enter first name into first name field.
     * @property {string}  commands.enterCrsNumber                  - Enter crs number into crs input field.
     * @property {string}  commands.enterBisNumber                  - Enter bis number into bis input field.
     * @property {string}  commands.enterGrossIncome                - Enter gross income into gross income input field.
     * @property {string}  commands.selectPackage                   - Select package from package drop-down.
     * @property {string}  commands.selectDealType                  - Select deal type from deal type drop-down.
     * @property {string}  commands.selectCreditAppRadioBtn         - Select credit app radio button.
     * @property {string}  commands.enterTotalNewLendingAmount      - Enter total new lending amount.
     * @property {string}  commands.selectFundingRequiredRadioBtn   - Select funding required .
     * @property {string}  commands.enterTotalNewSecurityAmt        - Enter new total security amount into the input field.
     * @property {string}  commands.selectPricingCategory           - Select pricing category from the drop-down.
     * @property {string}  commands.selectProduct                   - Select product from product drop-down.
     * @property {string}  commands.selectTerm                      - Select term from term drop-down.
     * @property {string}  commands.selectRepaymentType             - Select repayment type from drop-down.
     * @property {string}  commands.selectRepaymentFrequency        - Select repayment frequency from drop-down.
     * @property {string}  commands.enterCashBackAmount             - Enter cash back amount into cash back input field.
     * @property {string}  commands.clickNotesSection               - Click notes section.
     * @property {string}  commands.enterNotes                      - Enter notes into notes text area.
     * @property {string}  commands.clickSaveNotesButton            - Click on save notes button.
     * @property {string}  commands.verifyRequestApprovalButton     - Verify request approval button.
     * @property {string}  commands.clickRequestApprovalButton      - Click request approval button.
     * @property {string}  commands.verifyAbondonedRequestBtnVisibility   - Verify abondoned request button visibility.
     * @property {string}  commands.verifyApproveBtnVisibility      - Verify approved button visibility.
     * @property {string}  commands.verifyRejectBtnVisibility       - Verify reject button visibility.
     * @property {string}  commands.clickApproveRequestButton       - Click approve request button.
     * @property {string}  commands.verifyOfferButton               - Verify offer button.
     * @property {string}  commands.clickMakeOfferButton            - Click make offer button.
     * @property {string}  commands.clickAccept                     - Click accept button.
     * @property {string}  commands.verifyAcceptedMakeOffer         - Verify accepted make offer.
     * @property {string}  commands.verifyNotesRequiredStatusWorking- Verify notes required status working.
     * @property {string}  commands.verifyRequestApprovalBtnNotPresent    - Verify request approval button visibility.
     * @property {string}  commands.verifyMakeOfferBtnNotPresent    - Verify make offer button invisibility.
     */
    commands: [{

        /**
         * @name selectDropDownOption
         * Waits for the select element to be visible before focusing and clicking it then selects
         * the chosen option element
         * @param {String} dropDownSelector The select element selector
         * @param {String} optionSelector The option element selector
         * @param {Callback=} cb Callback used to execute a function after selecting an option
         * @param {Boolean=} isXpath Set to true if the selector being used is an Xpath selector
         */
        selectDropDownOption: function (dropDownSelector, optionSelector, cb, isXpath) {
            var self = this;
            this.waitForElementVisible(dropDownSelector, 12000, function (res) {
                if (res.status === 0) {
                    self.moveToElement(dropDownSelector, 0, 0, function (res) {
                        if (res.status === 0) {
                            self.click(dropDownSelector, function (res) {
                                if (res.status === 0) {
                                    self.api.pause(250);
                                    if(!!isXpath) {
                                        self.api.useXpath();
                                        self.click(optionSelector);
                                        self.api.useCss();
                                    } else {
                                        self.click(optionSelector);
                                    }
                                    self.api.pause(250);
                                    if (typeof cb === 'function') {
                                        cb();
                                    }
                                }
                            });
                        }
                    });
                }
            });
        },

        /*
         * @name = enterFirstName
         * This method wait for visibility of first name field and enter first name into it
         * @param = {Object} request
         * */
        enterFirstName: function(request){
           this.api.pause(1000)
           return this.waitForElementVisible('@firstNameInput', 60000)
               .setValue('@firstNameInput', request.firstName)
        },

        /*
         * @name = enterCrsInput
         * This method wait for visibility of crs input field and enter first name into it
         * @param = {Object} request
         * */
        enterCrsNumber: function(request){
            this.api.pause(1000)
            return this.waitForElementVisible('@crsInput', 60000)
                .setValue('@crsInput', request.crs)
        },

        /*
         * @name = enterBisNumber
         * This method wait for visibility of bis input field and enter first name into it
         * @param = {Object} request
         * */
        enterBisNumber: function(request){
            this.api.pause(1000)
            return this.waitForElementVisible('@BISNumberInput', 60000)
                .setValue('@BISNumberInput', request.bis)
        },

        /*
         * @name = enterGrossIncome
         * This method wait for visibility of gross income input field and enter first name into it
         * @param = {Object} request
         * */
        enterGrossIncome: function(request){
            this.api.pause(1000)
            return this.waitForElementVisible('@grossIncome', 60000)
                .setValue('@grossIncome', request.income)
        },

        /**OPPORTUNITY DETAILS**/
        /*
         * @name = selectPackage
         * This method wait for visibility of select package dropdown and select value by visible text
         * @param = {Object} request
         * */
        selectPackage: function(request){
            var packageOptionSelector = 'option[value="' + request.package + '"]';
            this.api.pause(1000);
            this.selectDropDownOption('@packageDropdown', packageOptionSelector, true, false);
            this.api.pause(1000);
        },

        /*
         * @name = selectDealType
         * This method wait for visibility of select deal type drop-down and select value by visible text
         * @param = {Object} request
         * */
        selectDealType: function(request){
            var dealTypeOptionSelector = 'option[value="' + request.dealType + '"]';
            this.api.pause(1000);
            this.selectDropDownOption('@dealTypeDropdown', dealTypeOptionSelector, true, false);
            this.api.pause(1000);
        },

        /*
         * @name = selectCreditAppRadioBtn
         * This method wait for visibility of select credit app radio button and select the given option
         * @param = {Object} request
         * */
        selectCreditAppRadioBtn: function(request){
            var creditAppRadio = "#bnz-opp > .third-column-alt > .ndm_inputs > .radio-box > input[value=" + request.creditApp + "]";
            this.api.pause(1000)
            return this.waitForElementVisible(creditAppRadio, 60000)
                .click(creditAppRadio)
        },

        /*
         * @name = enterTotalNewLendingAmount
         * This method wait for visibility of total new lending amount input field and enter first name
         * into it.
         * @param = {Object} request
         * */
        enterTotalNewLendingAmount: function(request){
            this.api.pause(1000)
            return this.waitForElementVisible('@totalNewLendingAmountInput', 60000)
                .setValue('@totalNewLendingAmountInput', request.totalLendingAmount)
        },

        /*
         * @name = selectFundingRequiredRadioBtn
         * This method wait for visibility of select funding required radio button and select the given option
         * @param = {Object} request
         * */
        selectFundingRequiredRadioBtn: function(request){
            var fundingRequiredRadio = "";
            if (request.fundingRequired === 'Yes') {
                fundingRequiredRadio  = "#funding > div.col-sm-6.radio-box-left > input[value=" + request.fundingRequired + "]";
            } else {
                fundingRequiredRadio = '#funding > div.col-sm-6.radio-box-left > input[value="No"]';
            }
            this.api.pause(1000)
            return this.waitForElementVisible(fundingRequiredRadio, 60000)
                .click(fundingRequiredRadio)
        },

        /**OFFER DETAILS**/
        /*
         * @name = enterTotalNewSecurityAmt
         * This method wait for visibility of total new security amount input field and enter first
         * name into it
         * @param = {Object} request
         * */
        enterTotalNewSecurityAmt: function(request){
            this.api.pause(1000)
            return this.waitForElementVisible('@totalNewSecurityAmountInput', 60000)
                .setValue('@totalNewSecurityAmountInput', request.totalSecurityAmount)
        },

        /*
         * @name = selectPricingCategory
         * This method wait for visibility of select pricing category and select the given option
         * @param = {Object} request
         * */
        selectPricingCategory: function(request){
            var pricingCategory = '';
            switch (request.customerClassification) {
                case 'OO':
                    pricingCategory = 'Owner Occupied';
                    break;
                default:
                    pricingCategory = 'None';
                    break;
            }
            this.selectDropDownOption('.ndm-input-columns.third-column > div:nth-child(1) > div:nth-child(2) > span > span > span > .select2-selection__arrow'
                ,'//li[text()="'+pricingCategory+'"]', false, true);
            this.api.pause(1000);

        },

        /**FACILITIES**/

        /*
         * @name = selectProduct
         * This method wait for visibility of select product and select the given option
         * @param = {Object} request
         * */
        selectProduct: function (request) {
            this.selectDropDownOption('#loan-inputs > div > span:nth-child(1) > .select2-loans > span > .selection > span > .select2-selection__arrow'
                , '//li[text()="'+ request.product +'"]', false, true);
            this.api.pause(1000);
        },

        /*
         * @name = selectTerm
         * This method wait for visibility of select term and select the given option
         * @param = {Object} request
         * */
        selectTerm: function (request) {
            this.selectDropDownOption('#loan-inputs > div > span:nth-child(2) > .select2-loans > span > .selection > span > .select2-selection__arrow'
                , '//li[text()="'+request.term+'"]', false, true);
            this.api.pause(1000);
        },

        /*
         * @name = selectLoanPurpose
         * This method wait for visibility of select loan purpose and select the given option
         * @param = {Object} request
         * */
        selectLoanPurpose: function (request) {
            // Select loan purpose
            this.selectDropDownOption('#loan-inputs > div:nth-child(2) > span:nth-child(2) > .select2-loans > span > .selection > span > .select2-selection__arrow'
                , '//li[text()="'+ request.loanPurpose +'"]', false, true);
            this.api.pause(1000);
        },

        /*
         * @name = selectRepaymentType
         * This method wait for visibility of select repayment type and select the given option
         * @param = {Object} request
         * */
        selectRepaymentType: function(request){
            // Select repayment type
            const repayment = request.repaymentType === 'P' ? 'Principal and Interest' : 'Interest Only';
            this.selectDropDownOption('#loan-inputs > div:nth-child(4) > span:nth-child(1) > .select2-loans > span > .selection > span > .select2-selection__arrow'
                , '//li[text()="'+repayment+'"]', false, true);
            this.api.pause(1000);
        },

        /*
         * @name = selectRepaymentType
         * This method wait for visibility of select repayment type and select the given option
         * @param = {Object} request
         * */
        selectRepaymentFrequency: function(request){
            // Select repayment frequency
            var repaymentFreq = '';
            switch (request.repaymentFrequency) {
                case '52':
                    repaymentFreq = 'Weekly';
                    break;
                case '12':
                    repaymentFreq = 'Monthly';
                    break;
                case '24':
                    repaymentFreq = 'Fortnightly';
                    break;
                default:
                    repaymentFreq = 'None';
                    break;
            }
            this.selectDropDownOption('#loan-inputs > div:nth-child(4) > span:nth-child(2) > .select2-loans > span > .selection > span > .select2-selection__arrow'
                , '//li[text()="'+ repaymentFreq +'"]', false, true);
        },


        /*
         * @name = enterCashBackAmount
         * This method wait for visibility of cash back amount input field and enter first name into it
         * @param = {Object} request - object stored in globals.js
         * */
        enterCashBackAmount: function(request){
            this.api.execute('scrollTo(0, 250)')
                .pause(1000)
            return this.waitForElementVisible('@cashBackInput', 60000)
                .setValue('@cashBackInput', request.cashBackAmount)
        },

        /*
         * @name = clickNotesSection
         * This method wait for visibility of notes section and click on it.
         * */
        clickNotesSection: function(){
            this.api.pause(1000)
            return this.waitForElementVisible('@notesAccordion', 60000)
                .click('@notesAccordion')
        },

        /*
         * @name = enterNotes
         * This method wait for visibility of notes section and enter a sample note into it.
         * */
        enterNotes: function(){
            this.api.pause(1000)
            return this.waitForElementVisible('@notesInput', 60000)
                .setValue('@notesInput', 'Test user notes')
        },

        /*
         * @name = clickSaveNotesButton
         * This method wait for visibility of save notes button and click on it.
         * */
        clickSaveNotesButton: function(){
            this.api.pause(500)
            return this.waitForElementVisible('@saveNoteButton', 60000)
                .click('@saveNoteButton')
        },

        /*
         * @name = verifyRequestApprovalButton
         * This method wait for presence of approval button before 10 seconds.
         * */
        verifyRequestApprovalButton: function () {
            this.api.pause(1000);
            return this.expect.element('@requestApprovalButton').to.be.visible.before(60000)
        },

        /*
         * @name = clickRequestApprovalButton
         * This method wait for visibility of request approval button and click on it.
         * */
        clickRequestApprovalButton: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(2000)
            return this.waitForElementPresent('@requestApprovalButton', 60000)
                .click('@requestApprovalButton')
        },

        /*
         * @name = verifyAbondonedRequestBtnVisibility
         * This method wait for visibility of request approval button and click on it.
         * */
        verifyAbondonedRequestBtnVisibility: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(2000)
            return this.expect.element('@abandonButton').to.be.visible.before(5000);

        },

        /*
         * @name = verifyApproveBtnVisibility
         * This method wait for visibility of approve and reject button and click on it.
         * */
        verifyApproveBtnVisibility: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(2000)
            return this.expect.element('@approveRequest').to.be.present.before(5000)


        },

        /*
         * @name = verifyRejectBtnVisibility
         * This method wait for visibility of approve and reject button and click on it.
         * */
        verifyRejectBtnVisibility: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(2000)
            return this.expect.element('@denyRequestButton').to.be.present.before(5000)

        },

        /*
         * @name = clickApproveRequestButton
         * This method wait for visibility of request approve button and click on it.
         * */
        clickApproveRequestButton: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.waitForElementVisible('@approveRequest', 60000)
                .click('@approveRequest')
        },

        /*
         * @name = verifyOfferButton
         * This method wait for presence  of offer button before 10 seconds
         * */
        verifyOfferButton: function () {
            this.api.pause(1000);
            return this.expect.element('#offered').to.be.present.before(60000)
        },

        /*
         * @name = clickMakeOfferButton
         * This method wait for visibility of make offer button and click on it.
         * */
        clickMakeOfferButton: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.waitForElementVisible('@makeOfferButton', 60000)
                .click('@makeOfferButton')
        },

        /*
         * @name = clickAccept
         * This method wait for visibility of accept button and click on it.
         * */
        clickAccept: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.waitForElementVisible('@acceptButton', 60000)
                .click('@acceptButton')
        },

        /*
        * @name = verifyAcceptedMakeOffer
        * This method wait for the visibility of make offer accepted status and assert its text
        * */
        verifyAcceptedMakeOffer: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.waitForElementVisible('@offerStatus', 60000)
                .assert.containsText('@offerStatus', 'Accepted')
        },

        /*
         * @name = verifyNotesRequiredStatusWorking
         * This method wait for the visibility of make offer accepted status and assert its text
         * */
        verifyNotesRequiredStatusWorking: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.waitForElementVisible('@statusWarning', 60000)
                .assert.containsText('@statusWarning', 'Note required.')
        },

        /*
         * @name = verifyRequestApprovalBtnNotPresent
         * This method wait for the visibility of make offer accepted status and assert its text
         * */
        verifyRequestApprovalBtnNotPresent: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.expect.element('@requestApprovalButton').to.not.be.present;
        },

        /*
         * @name =  verifyMakeOfferBtnNotPresent
         * This method verifies that make offer button is not visible on populating the input into
         * cash back amount field.
         * */
        verifyMakeOfferBtnNotPresent: function () {
            this.api.execute('scrollTo(0, 500)')
                .pause(1000)
            return this.expect.element('@makeOfferButton').to.not.be.present;
        }

    }]
};
