import { ElementFinder,element,by } from "protractor";

export class FillFormInputPage {

    usernameTextInput: ElementFinder = element(by.id('id_nombre'));
    lastnameTextInput: ElementFinder = element(by.id('id_apellido'));
    emailTextInput: ElementFinder = element(by.id('id_email'));
    passwordTextInput: ElementFinder = element(by.id('id_password'));
    genderRadio: ElementFinder = element(by.id('id_genero_hombre'));
    calendarTextInput: ElementFinder = element(by.model('main.user.birthDate'));

    public async enterValues(name: string, lastname: string, email: string, password: string){
        await this.usernameTextInput.sendKeys(name);
        await this.lastnameTextInput.sendKeys(lastname);
        await this.emailTextInput.sendKeys(email);
        await this.passwordTextInput.sendKeys(password);
        
    }

    public async enterDate(date: string){
        await this.calendarTextInput.sendKeys(date);
        /* let regEx = /^\d{4}-\d{2}-\d{2}$/;
        return date.match(regEx) != null; */
    };

    public async selectGender(){
        await this.genderRadio.click();

    }


}