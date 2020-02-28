"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    capabilities: {
        'browserName': 'firefox'
    },
    framework: 'jasmine',
    suites: {
        login: ['./specs/fillFormInputSpec.js', './specs/submitSpect.js'],
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
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmYudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDVyxRQUFBLE1BQU0sR0FBVztJQUN4QixlQUFlLEVBQUUsOEJBQThCO0lBQy9DLFlBQVksRUFBRTtRQUNWLGFBQWEsRUFBRSxTQUFTO0tBQzNCO0lBQ0QsU0FBUyxFQUFFLFNBQVM7SUFDcEIsTUFBTSxFQUFFO1FBQ0osS0FBSyxFQUFFLENBQUMsOEJBQThCLEVBQUMsd0JBQXdCLENBQUM7S0FFbkU7SUFDRCxlQUFlLEVBQUU7UUFDYixzQkFBc0IsRUFBRSxLQUFLO1FBQzdCLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0lBQ0QsU0FBUyxFQUFFLEdBQUcsRUFBRTtRQUNaLElBQUksT0FBTyxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUNwQyxJQUFJLE9BQU8sR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDO1FBQzlCLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQztRQUNyQyxPQUFPLENBQUMsTUFBTSxFQUFFLENBQUMsUUFBUSxFQUFFLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RELENBQUM7Q0FFSixDQUFBIn0=