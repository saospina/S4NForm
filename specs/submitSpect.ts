import {SubmitPage} from  "../pages/submitPage";
import {browser} from 'protractor';
import { Alert } from 'selenium-webdriver';

let submitPage = new SubmitPage();

describe('Create an account', function() {

  it('Submit the new account', async function() {
    await submitPage.createAccount();
    let alert: Alert = browser.switchTo().alert();
    expect(await alert.getText()).toContain("Bienvenido");
    alert.accept();
    
  })
})
