// Optionally store your Environment Variables in .env
require('env2')('.env');

//Global Declares
var fs = require('fs');
const seleniumServer = require("selenium-server");
const chromeDriver = require("chromedriver");
const screenShotPath = "./screenshots/";

// We use a nightwatch.conf.js file so we can include comments and helper functions
module.exports = {

    "src_folders": [
        // Where you are storing your Nightwatch tests
        "test-suite"
    ],
    // Where page objects resides
    "page_objects_path": "./page-objects",
    //Reports (test outcome) output by nightwatch
    "output_folder": "./reports",
    //Where custom commands resides
    "custom_commands_path": "./commands",
    // Where globals resides
    "globals_path": "globals.js",

    "selenium": {
        // Tells nightwatch to start/stop the selenium process
        "start_process": true,
        "server_path": seleniumServer.path,
        "log_path":"./logs",
        "host": "127.0.0.1",
        // Standard selenium port
        "port": 4444,
        "cli_args": {
            "webdriver.chrome.driver" : chromeDriver.path
        }
    },

    "test_settings": {
        "default": {
            "launch_url": "https://5ee54cd8.ngrok.io",
            "screenshots": {
                //If you want to keep screenshots
                "enabled": true,
                // Save screenshots here
                "path": './screenshots'
            },
            "globals": {
                // Sometimes internet is slow so wait.
                "waitForConditionTimeout": 5000
            },
            "desiredCapabilities": {
                // Use Chrome as the default browser for tests
                "browserName": "chrome"
            }
        },

        "chrome": {
            "desiredCapabilities": {
                "browserName": "chrome",
                // Turn off to test progressive enhancement
                "javascriptEnabled": true
            }
        },

        "ie" : {
            "desiredCapabilities": {
                "browserName": "internet explorer",
                "elementScrollBehavior": 1,
                "javascriptEnabled": true,
                "acceptSslCerts": true
            }
        }
    }
};

if (!fs.existsSync('./logs')){
    fs.mkdirSync('./logs');
};

if (!fs.existsSync(screenShotPath)){
    fs.mkdirSync(screenShotPath);
};


function padLeft (count) {
    // Theregister.co.uk/2016/03/23/npm_left_pad_chaos/
    return count < 10 ? '0' + count : count.toString();
};

// Global screenshot file count
var FILECOUNT = 0;
/**
 * The default is to save screenshots to the root of your project even though
 * there is a screenshots path in the config object above! ... so we need a
 * function that returns the correct path for storing our screenshots.
 * While we're at it, we are adding some meta-data to the filename, specifically
 * the Platform/Browser where the test was run and the test (file) name.
 */
function imgpath (browser) {
    var conf = browser.options.desiredCapabilities;
    var meta = [conf.platform];
    meta.push(conf.browserName ? conf.browserName : 'any');
    meta.push(conf.version ? conf.version : 'any');
    // This is the test filename so always exists.
    meta.push(conf.name);
    var metadata = meta.join('~').toLowerCase().replace(/ /g, '');
    return screenShotPath + metadata + '_' + padLeft(FILECOUNT++) + '_';
}

module.exports.imgpath = imgpath;
module.exports.SCREENSHOTPATH = screenShotPath;
