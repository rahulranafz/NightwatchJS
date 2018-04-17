/**
 * @fileOverview Values used by NightWatch during testing
 * @name globals.js
 * @author
 * @license UNLICENSED
 */

module.exports = {

    // TESTING HOOKS
    /*
     * @name = after
     * This method contains the code that needs to be executed after execution of all the
     * tests and the closing down
     * @param = {callback} done
     * */
    after: function(done){
        var HTMLReport = require('jasmine-xml2html-converter');
        var path = require('path');
        var glob = require('glob-fs')({ gitignore: true });

        // Call custom report for html output
        testConfig = {
            reportTitle: 'Test Execution Report',
            outputPath: './reports'
        };

        var arrFiles = [];
        glob.readdirStream('./reports/**/*.xml')
            .on('data', function (file) {
                //console.log('Finding Files...');
                arrFiles.push(file);
            })
            .on('error', console.error)
            .on('end', function () {
                arrFiles.sort(function(a,b){
                    // Turn your strings into dates, and then subtract them
                    // to get a value that is either negative, positive, or zero.
                    return new Date(b.birthtime) - new Date(a.birthtime);
                });
                // console.log('Latest File Found...');
                var newFile = arrFiles[(arrFiles.length)-1];
                // console.log(arrFiles);
                // console.log('File Path: '+newFile.relative);
                new HTMLReport().from(newFile.relative, testConfig);
                // console.log('Finished...');
                var open = require("open");
                open(path.join(__dirname, '..', 'reports/test-html-report.html'), 'Chrome');
            });
        done();
    },

    //Base url for the application
    appUrl: 'https://5ee54cd8.ngrok.io',

    development: {
        users: [
            //Users and passwords for testing login functionality with different users.
            {userId: 'L1STORE1', Password: '', userName: 'L1 STORE1'},
            {userId: '', Password: 'L1STORE1', userName: 'L1 STORE1'},
            {userId: 'L1STORE1', Password: 'L1STORE1', userName: 'L1 STORE1'},
            {userId: 'L1STORE2', Password: 'L1STORE2', userName: 'L1 STORE2'},
            {userId: 'L2STORE1', Password: 'L2STORE1', userName: 'L2 STORE1'},
            {userId: 'L2STORE2', Password: 'L2STORE2', userName: 'L2 STORE2'},
            {userId: 'L1MOBILE1', Password: 'L1MOBILE1', userName: 'L1 MOBILE1'},
            {userId: 'L1MOBILE1', Password: 'L1MOBILE1', userName: 'L1 MOBILE1'},
            {userId: 'P11', Password: 'P11', userName: 'PD11'},
            {userId: 'P12', Password: 'P12', userName: 'PD12'},
            {userId: 'P21', Password: 'P21', userName: 'PD21'},
            {userId: 'P22', Password: 'P22', userName: 'PD22'}
        ],

        customerRequests: [
            {
                requirement: 'test user 1',
                crs: '12',
                bis: '1234567890',
                package: 'Housing Under Construction (HUC)',
                cashBackAmount: '1000',
                dealType: 'N',
                creditApp: 'No',
                totalLendingAmount: '150000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'HUC',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'Yes',
                income: 100000
            },

            {
                requirement: 'test user 2',
                crs: '13',
                bis: '1234567890',
                package: 'Work Perks (WP)',
                cashBackAmount: '1000',
                dealType: 'N',
                creditApp: 'No',
                totalLendingAmount: '560000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Bridging',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'Yes',
                income: 900000
            },
            {
                requirement: 'test user 3',
                crs: '13',
                bis: '1234567890',
                package: 'Staff Discount (Base)',
                cashBackAmount: '0',
                dealType: 'N',
                creditApp: 'No',
                totalLendingAmount: '150000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 600000
            },
            {
                requirement: 'test user 4',
                crs: '14',
                bis: '1234567890',
                package: 'Work Perks (WP)',
                cashBackAmount: '0',
                dealType: 'N',
                creditApp: 'No',
                totalLendingAmount: '650000',
                totalSecurityAmount: '800000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Bridging',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 800000
            },
            {
                requirement: 'test user 5',
                crs: '15',
                bis: '1234567890',
                package: 'Staff Discount (Base)',
                cashBackAmount: '1000',
                dealType: 'N',
                creditApp: 'No',
                totalLendingAmount: '150000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Bridging',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 50000
            },
            {
                requirement: 'test user 6',
                crs: '16',
                bis: '1234567890',
                package: 'None',
                cashBackAmount: '1100',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'Yes',
                totalLendingAmount: '650000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'Yes',
                income: 700000
            },
            {
                requirement: 'test user 7',
                crs: '17',
                bis: '1234567890',
                package: 'Work Perks (WP)',
                cashBackAmount: '0',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'Yes',
                totalLendingAmount: '650000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 670000
            },
            {
                requirement: 'test user 8',
                crs: '18',
                bis: '1234567890',
                package: 'Staff Discount (Total)',
                cashBackAmount: '0',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'Yes',
                totalLendingAmount: '650000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 700000
            },
            {
                requirement: 'test user 9',
                bis: '1234567890',
                crs: '19',
                package: 'None',
                cashBackAmount: '1000',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'No',
                totalLendingAmount: '150000',
                totalSecurityAmount: '200000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'Yes',
                income: 600000
            },
            {
                requirement: 'test user 10',
                bis: '1234567890',
                crs: '20',
                package: 'Work Perks (WP)',
                cashBackAmount: '1001',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'No',
                totalLendingAmount: '500000',
                totalSecurityAmount: '900000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'Yes',
                income: 700000
            },
            {
                requirement: 'test user 11',
                crs: '21',
                bis: '1234567890',
                package: 'None',
                cashBackAmount: '0',
                dealType: 'N',
                creditApp: 'No',
                fundingRequired: 'No',
                totalLendingAmount: '500000',
                totalSecurityAmount: '900000',
                customerClassification: 'OO',
                product: 'Standard/Flybuys',
                term: '6M',
                loanPurpose: 'Other Housing',
                repaymentType: 'P',
                repaymentFrequency: '52',
                approvalRequired: 'No',
                income: 700000
            }
        ]
    },

    acceptance: {globalVar: 'other-value'},


    waitForPageLoaded: function (browser) {
        // eslint-disable-line object-shorthand
        return browser.execute('return document.readyState;', function (result) {
            if (result.status === 0) {
                browser.waitForElementVisible('body', 60000, function (res) {
                    if (res.status === 0) {
                        // console.log("Page loaded completely");
                    }
                });
            }
        });
    },

    url: function (browser, url) {
        // eslint-disable-line object-shorthand
        browser.url(url);
        browser.execute('return document.readyState;', function (result) {
            if (result.value === 'complete') {
                browser.waitForElementVisible('body', 60000, function (res) {
                    if (res.status === 0) {
                        // console.log("Page loaded completely");
                    }
                });
            }
        });
    },

    pause: function (browser, time) {
        // eslint-disable-line object-shorthand
        return browser.pause(time);
    },

    genRandString:function(length) {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var itr = 0; itr < length; itr++){
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        }
        return text;
    }
};
