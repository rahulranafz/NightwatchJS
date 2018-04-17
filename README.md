User Acceptance Test With Nightwatch
====================================

---

## Setup ##
1. Clone the project repo
2. Change directory to project folder
3. Install the required dependencies using below command
```bash
npm install
```

Usage
=====

---

#### Run Login Tests
```bash
# Run’s login tests
npm run login
```
#### Running Customer Requests Tests
```bash
# Run’s customer request tests
npm run customer-requests
```
#### Running Requests Approval Tests
```bash
# Run’s request approval tests
npm run request-approval
```
#### Running Make Offer Tests
```bash
# Run’s make offer tests
npm run make-offer
```
#### Running Smoke Tests
```bash
# Run’s all tests under smoke-tests
npm run smoke-tests
```
#### Running All Tests
```bash
# Run’s all tests in parallel
npm run test-suite
```
#### Running All Tests in Browserstack
```bash
# Run’s all tests in browserstack
npm run browserstack
```

ESLint Usage
============

---

#### To run ESLint, use the following format:
```bash
eslint [options] [file|dir|glob]*
```
Such as:
```bash
eslint file1.js file2.js
```
Or:
```bash
eslint steps/**
```

JSDoc Usage
============

---

#### To generate a website using jsdoc tool, use the following format:
```bash
# Running the documentation generator
.\node_modules\.bin\jsdoc yourJavaScriptFile.js
```


Tests Suite Infrastructure
==========================

---

In this version of the framework, test files are housed in the `test-suite` directory. Each test file have its equivalent page object in the `page-objects` folder to follow nightwatch's built in POM test architecture.

Browserstack integration is also a feature of this framework, to setup and run it a 'conf.js' and 'runner.js' file is included.

#### Folder Structure
    .
    ├── commands           # Where nightwatch custom commands will beloaded from.
    ├── logs               # Output folder of selenium related errors
    ├── node_modules       # Where node modules folders/files are stored
    ├── page-objects       # Where nightwatch page object files will be loaded from
    ├── reports            # Output folder of each nightwatch test run report
    ├── screenshots        # Where test run screenshots are stored.
    ├── steps              # Where all the steps are stored.
    ├── test-suite         # Nightwatch test files
    ├── nightwatch.conf.js      # Nightwatch config file
    ├── globals.js         # Nightwatch global variables file
    ├── conf.js            # Nightwatch + browserstack config file
    └── runner.js          # Nightwatch + browserstack test runner
    
    
## Reports

![Sample HTML reporter output](readme_screenshots/html-sample-report.png)

## Tutorials
* [Learn Nightwatch](https://github.com/dwyl/learn-nightwatch)
* [Using Nightwatch.js to test and take screenshots of your app](http://www.sohamkamani.com/blog/2016/11/02/e2e-tests-and-screenshots-using-nightwatch-js/)
* [Integrate Nightwatch.js to browserstack](https://www.browserstack.com/automate/nightwatch)


Steps
=========

---

## homeSteps

### navigateOnNewOpportunityPage()

```bash
# It is a home steps method
# It is used to navigates to new opportunity page.
Usage : 
var homeSteps = require('Path to the homeSteps.js');
homeSteps.navigateOnNewOpportunityPage();
```

### signOut()

```bash
# It is a home steps method
# It is used to sign out from the application.
Usage : 
var homeSteps = require('Path to the homeSteps.js');
homeSteps.signOut();
```

### selectCustomerForApproval()

```bash
# It is a home steps method
# It is used to select customer for request approval on home page L1 user types.
Usage : 
var homeSteps = require('Path to the homeSteps.js');
homeSteps.selectCustomerForApproval();
```

### verifyApprovalStatus()

```bash
# It is a home steps method
# It is used to verify the approval status.
Usage : 
var homeSteps = require('Path to the homeSteps.js');
homeSteps.verifyApprovalStatus();
```

## loginSteps

### loginWithValidCredentials()

```bash
# It is a loginSteps method
# It is used for login into the application using valid credentials.
Usage : 
var loginSteps = require('Path to the loginSteps.js');
loginSteps.loginWithValidCredentials();
```
### loginWithoutPassword()

```bash
# It is a loginSteps method
# It is used for verifying that user is not able to login into the application without entering the password.
Usage : 
var loginSteps = require('Path to the loginSteps.js');
loginSteps.loginWithoutPassword();
```
### loginWithoutUsername()

```bash
# It is a loginSteps method
# It is used for verifying that user is not able to login into the application without entering the username.
Usage : 
var loginSteps = require('Path to the loginSteps.js');
loginSteps.loginWithoutUsername();
```
### navigateToLoginPage()

```bash
# It is a loginSteps method
# It is used for navigating to the login page.
Usage : 
var loginSteps = require('Path to the loginSteps.js');
loginSteps.loginWithoutUsername();
```

## requestApprovalSteps

### requestApproval()

```bash
# It is a requestApprovalSteps method
# Is is used for requesting for approval.
# Is chainable (ie. requestApproval().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.requestApproval();
```
### verifyRequestApproval()

```bash
# It is a requestApprovalSteps method
# Is is used for verifying request for approval.
# Is chainable (ie. verifyRequestApproval().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.verifyRequestApproval();
```
### reviewOffer()

```bash
# It is a requestApprovalSteps method
# Is is used for reviewing the offer.
# Is chainable (ie. reviewOffer().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.reviewOffer();
```

### approveRejectButtonVisibility()

```bash
# It is a requestApprovalSteps method
# Is is used for verifying the visibility of approve reject button visibility.
# Is chainable (ie. approveRejectButtonVisibility().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.approveRejectButtonVisibility();
```

### approveRequest()

```bash
# It is a requestApprovalSteps method
# Is is used for approving request by P1 type users.
# Is chainable (ie. approveRequest().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.approveRequest();
```

### verifyApprovalGranted()

```bash
# It is a requestApprovalSteps method
# Is is used for verfiy approval granted or not.
# Is chainable (ie. verifyApprovalGranted().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.verifyApprovalGranted();
```

### verifyRequestApprovalBtnHidden()

```bash
# It is a requestApprovalSteps method
# Is is used for verifying request approval button is hidden.
# Is chainable (ie. verifyRequestApprovalBtnHidden().method2())
Usage : 
var requestApprovalSteps = require('Path to the requestApprovalSteps.js');
requestApprovalSteps.verifyRequestApprovalBtnHidden();
```

## customerRequestsSteps

### fillOpportunityForm()

```bash
# It is a customerRequestsSteps method
# Is is used for populating opportunity form.
# Is chainable (ie. fillOpportunityForm().method2())
Usage : 
var customerRequestsSteps = require('Path to the customerRequestsSteps.js');
customerRequestsSteps.fillOpportunityForm();
```

## makeOfferSteps

### makeOffer()

```bash
# It is a makeOfferSteps method
# Is is used for making an offer.
# Is chainable (ie. makeOffer().method2())
Usage : 
var makeOfferSteps = require('Path to the makeOfferSteps.js');
makeOfferSteps.makeOffer();
```

### verifyMakeOffer()

```bash
# It is a makeOfferSteps method
# Is is used for verifying making an offer.
# Is chainable (ie. verifyMakeOffer().method2())
Usage : 
var makeOfferSteps = require('Path to the makeOfferSteps.js');
makeOfferSteps.verifyMakeOffer();
```

### verifyMakeOfferBtnHidden()

```bash
# It is a makeOfferSteps method
# Is is used for verify make offer button is hidden or not.
# Is chainable (ie. verifyMakeOfferBtnHidden().method2())
Usage : 
var makeOfferSteps = require('Path to the makeOfferSteps.js');
makeOfferSteps.verifyMakeOfferBtnHidden();
```
