import { ElementFinder, element, by, browser, ElementArrayFinder } from "protractor";
import { Alert } from 'selenium-webdriver';

export class SubmitPage {

    submitButton: ElementFinder = element.all(by.css("button[class='btn btn-default']")).get(1);

    public async createAccount() {
        await this.submitButton.submit();

    }
}