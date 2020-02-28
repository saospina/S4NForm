import { browser, ExpectedConditions, ElementFinder } from 'protractor';

export class GlobalActivities {

    public async getWebPage(url: string) {
        await browser.get(url);
    }

    public async waitForElement(parameter: ElementFinder, seconds: number) {
        await browser.wait(ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
    }

    public async waitForAngular(param: boolean) {
        await browser.waitForAngularEnabled(param);

    }
  
}