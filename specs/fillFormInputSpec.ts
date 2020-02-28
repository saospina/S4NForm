import {info} from "../config-data/userInfo"
import {GlobalActivities} from "../pages/globalActivities"
import { FillFormInputPage } from "../pages/fillFormInputPage";
//import {browser} from 'protractor';

let globalActivities = new GlobalActivities();
let formInput = new FillFormInputPage();

describe('FillNameInput', function() {
  
  beforeAll( async() =>{
		await globalActivities.getWebPage(info.url);
		//await globalActivities.waitForAngular(false);
  });
  
  it('Enter right name, lastname, email and new password', async function() {
    await formInput.enterValues(info.username,info.lastname,info.email,info.password);
    //browser.sleep(35000);
    expect(await formInput.usernameTextInput.getAttribute('value')).toBe(info.username);
    expect(await formInput.lastnameTextInput.getAttribute('value')).toBe(info.lastname);
    expect(await formInput.emailTextInput.getAttribute('value')).toBe(info.email);
  })

  it('Enter a correct date', async function(){
    await formInput.enterDate('1992-06-17');
    expect(formInput.calendarTextInput.getAttribute('value')).toMatch( /^\d{4}-\d{2}-\d{2}$/)

  })

  it('Select man as gender', async function(){
    await formInput.selectGender();
    //browser.sleep(3500)
    expect(await formInput.genderRadio.getAttribute('value')).toEqual('M');


  })
}) 
