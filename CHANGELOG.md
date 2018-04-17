Changelog
=========

---

All notable changes to this project will be documented in this file.

## 2018-01-31
### Changed
- Package drop down element selector in customer page object
- Deal type drop down element selector in customer page object

## 2018-02-02
### Changed
- credit application radio selector in customer page object
- funding required dropdown selector to funding required radio selector in customer page object

## 2018-02-03
### Changed
- Changed selector for packageDropdown in customer page object
- Changed selector for dealTypeDropdown in customer page object
- Changed selector for revenueHurdleRow in customer page object
- Changed selector for revenueHurdleRowAuth in customer page object
- Changed selector for revenueHurdleRowReq in customer page object
- Changed selector for revenueHurdleRowDiff in customer page object
- Changed selector for cashHurdleRow in customer page object
- Changed selector for cashHurdleRowAuth in customer page object
- Changed selector for cashHurdleRowReq in customer page object
- Changed selector for cashHurdleRowDiff in customer page object
- Changed selector for ROEHurdleRow in customer page object
- Changed selector for ROEHurdleRowAuth in customer page object
- Changed selector for ROEHurdleRowReq in customer page object
- Changed selector for ROEHurdleRowDiff in customer page object
- Changed selector for NIMHurdleRow in customer page object
- Changed selector for NIMHurdleRowAuth in customer page object
- Changed selector for NIMHurdleRowReq in customer page object
- Changed selector for NIMHurdleRowDiff in customer page object
- Changed selector for ROEFacilityLevelRow in customer page object
- Changed selector for ROEFacilityLevelRowFacility in customer page object
- Changed selector for exeptionsRow in customer page object
- Changed selector for cashbackRow in customer page object
- Changed selector for cashbackRowAuth in customer page object
- Changed selector for cashbackRowReq in customer page object
- Changed selector for cashbackRowDiff in customer page object
- Added isXpath params for selectDropdownOption in customer page object
- Changed selector for creditAppRadio
- Changed fundingRequiredDropdown to fundingRequiredRadio

## 2018-02-05
### Added
- pricingCategory switch
- Added ROEButton element selector in customer page object
- Added signOutDropdown element selector in customer page object

## 2018-04-02
### Added
- Introduced steps between page-objects and tests
   * Added homeSteps
        - Added method navigateOnNewOpportunityPage()
        - Added method signOut() 
        - Added method selectCustomerForApproval()
        - Added method verifyApprovalStatus()
   * Added loginSteps
        - Added method navigateToLoginPage()
        - Added method loginWithValidCredentials() 
        - Added method loginWithoutPassword()
        - Added method loginWithoutUsername()
   * Added customerRequestSteps
        - Added method fillOpportunityForm()
        - Added method navigateOnNewOpportunityPage()
   * Added makeOfferSteps
        - Added method makeOffer()
        - Added method verifyMakeOffer()
   * Added requestApprovalSteps
        - Added method requestApproval()
        - Added method verifyRequestApproval()
        - Added method reviewOffer()
        - Added method approveRejectButtonVisibility()
        - Added method approveRequest()
        - Added method verifyApprovalGranted()
        - Added method verifyRequestApprovalBtnHidden()
        - Added method verifyMakeOfferBtnHidden()

## 2018-04-10
### Added
 - Refactor the page-objects by changing the consolidated commands to the elementory commands.
    * Modified elementary methods to homePage
        - Modified commands
            * clickNewOpportunityButton
            * verifySuccessfulLogin
            * clickRecentCustomerDropDown
            * clickSignOutButton
            * clickCustomerApproval
            * statusOfGivenCustomer
    * Modified elementary methods to loginPage
        - Modified commands
            * enterUsername
            * enterPassword
            * clickSignInBtn
            * verifyNotLoggedIn
    * Modified elementary methods to newOpportunityPage
        - Modified commands
            * enterFirstName
            * enterCrsNumber
            * enterBisNumber
            * enterGrossIncome
            * selectPackage
            * selectDealType
            * selectCreditAppRadioBtn
            * enterTotalNewLendingAmount
            * selectFundingRequiredRadioBtn
            * enterTotalNewSecurityAmt
            * selectPricingCategory
            * selectProduct
            * selectTerm
            * selectLoanPurpose
            * selectRepaymentType
            * selectRepaymentFrequency
            * enterCashBackAmount
            * clickNotesSection
            * enterNotes
            * clickSaveNotesButton
            * verifyRequestApprovalButton
            * clickRequestApprovalButton
            * verifyAbondonedRequestBtnVisibility
            * verifyApproveBtnVisibility
            * verifyRejectBtnVisibility
            * clickApproveRequestButton
            * verifyOfferButton
            * clickMakeOfferButton
            * clickAccept
            * verifyAcceptedMakeOffer
            * verifyNotesRequiredStatusWorking
            * verifyRequestApprovalBtnNotPresent
            * verifyMakeOfferBtnNotPresent
            
 - Introduced Javascript documentation into the project.
 
## 2018-04-10
### Added

- Refactor Tests as well
    * Added new tests and refactor tests-suite
        - loginTests
        - customerRequestsTests
        - requestApprovalTests
        - makeOfferTests
        - smoke-tests/makeOfferTests
- Introduced ESLint into the project.

## 2018-04-17
### Added

- Updating README.md and CHANGELOG.md
- Also updated file names