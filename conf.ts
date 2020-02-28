import { Config } from 'protractor';
export let config: Config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    framework: 'jasmine',
    suites: {
        login: ['./specs/fillFormInputSpec.js','./specs/submitSpect.js'],
        
    },
    jasmineNodeOpts: {
        defaultTimeoutInterval: 90000,
        showColors: true
    },
    onPrepare: () => {
        let globals = require('protractor');
        let browser = globals.browser;
        browser.manage().window().maximize();
        browser.manage().timeouts().implicitlyWait(15000);
    }

}