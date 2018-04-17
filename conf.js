nightwatch_config = {
  src_folders: [
    "test-suite"
  ],
  "test_workers": {
    "enabled": true,
    "workers": "auto"
  },
  page_objects_path: "page-objects",
  globals_path: "globals.js",
  selenium : {
    "start_process" : false,
    "host" : "hub-cloud.browserstack.com",
    "port" : 80
  },
  test_settings: {
    default: {
      "launch_url": "https://9e5d01d7.ngrok.io",
      desiredCapabilities: {
        'browserstack.user': 'sonjaysarmiento1',
        'browserstack.key': 'ssB6tk7yFLykMDuR6dpz',
        'browserstack.local': true,
        'os': 'Windows',
        'os_version': '8',
        'browser': 'Chrome',
        'browser_version': '63.0',
        'resolution': '1024x768',
        "browserName": "chrome",
        "chromeOptions": {
          "args":["disable-web-security", "ignore-certificate-errors"]
        }
      }
    },
    "ie" : {
      "desiredCapabilities": {
        "browserName": "internet explorer",
        'os': 'Windows',
        'os_version': '8',
        'browser': 'IE',
        'browser_version': '10.0',
        'resolution': '1024x768'
      }
    },
    "safari" : {
      "desiredCapabilities": {
        "browserName": "safari",
        'os': 'OS X',
        'os_version': 'El Capitan',
        'browser': 'Safari',
        'browser_version': '9.1',
        'resolution': '1024x768'
      }
    },
    "firefox" : {
      "desiredCapabilities": {
        "browserName": "firefox",
        'os': 'Windows',
        'os_version': '8',
        'browser': 'Firefox',
        'browser_version': '58.0 beta',
        'resolution': '1024x768'
      }
    }
  }
};
// Code to copy seleniumhost/port into test settings
for(var i in nightwatch_config.test_settings){
  var config = nightwatch_config.test_settings[i];
  config['selenium_host'] = nightwatch_config.selenium.host;
  config['selenium_port'] = nightwatch_config.selenium.port;
}
module.exports = nightwatch_config;