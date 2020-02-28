"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const userInfo_1 = require("../config-data/userInfo");
const globalActivities_1 = require("../pages/globalActivities");
const fillFormInputPage_1 = require("../pages/fillFormInputPage");
//import {browser} from 'protractor';
let globalActivities = new globalActivities_1.GlobalActivities();
let formInput = new fillFormInputPage_1.FillFormInputPage();
describe('FillNameInput', function () {
    beforeAll(() => __awaiter(this, void 0, void 0, function* () {
        yield globalActivities.getWebPage(userInfo_1.info.url);
        //await globalActivities.waitForAngular(false);
    }));
    it('Enter right name, lastname, email and new password', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield formInput.enterValues(userInfo_1.info.username, userInfo_1.info.lastname, userInfo_1.info.email, userInfo_1.info.password);
            //browser.sleep(35000);
            expect(yield formInput.usernameTextInput.getAttribute('value')).toBe(userInfo_1.info.username);
            expect(yield formInput.lastnameTextInput.getAttribute('value')).toBe(userInfo_1.info.lastname);
            expect(yield formInput.emailTextInput.getAttribute('value')).toBe(userInfo_1.info.email);
        });
    });
    it('Enter a correct date', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield formInput.enterDate('1992-06-17');
            expect(formInput.calendarTextInput.getAttribute('value')).toMatch(/^\d{4}-\d{2}-\d{2}$/);
        });
    });
    it('Select man as gender', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield formInput.selectGender();
            //browser.sleep(3500)
            expect(yield formInput.genderRadio.getAttribute('value')).toEqual('M');
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbEZvcm1JbnB1dFNwZWMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9maWxsRm9ybUlucHV0U3BlYy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLHNEQUE0QztBQUM1QyxnRUFBMEQ7QUFDMUQsa0VBQStEO0FBQy9ELHFDQUFxQztBQUVyQyxJQUFJLGdCQUFnQixHQUFHLElBQUksbUNBQWdCLEVBQUUsQ0FBQztBQUM5QyxJQUFJLFNBQVMsR0FBRyxJQUFJLHFDQUFpQixFQUFFLENBQUM7QUFFeEMsUUFBUSxDQUFDLGVBQWUsRUFBRTtJQUV4QixTQUFTLENBQUUsR0FBUSxFQUFFO1FBQ3JCLE1BQU0sZ0JBQWdCLENBQUMsVUFBVSxDQUFDLGVBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUM1QywrQ0FBK0M7SUFDL0MsQ0FBQyxDQUFBLENBQUMsQ0FBQztJQUVILEVBQUUsQ0FBQyxvREFBb0QsRUFBRTs7WUFDdkQsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLGVBQUksQ0FBQyxRQUFRLEVBQUMsZUFBSSxDQUFDLFFBQVEsRUFBQyxlQUFJLENBQUMsS0FBSyxFQUFDLGVBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztZQUNsRix1QkFBdUI7WUFDdkIsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxlQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDcEYsTUFBTSxDQUFDLE1BQU0sU0FBUyxDQUFDLGNBQWMsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsZUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2hGLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUU7O1lBQ3pCLE1BQU0sU0FBUyxDQUFDLFNBQVMsQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUN4QyxNQUFNLENBQUMsU0FBUyxDQUFDLGlCQUFpQixDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBRSxxQkFBcUIsQ0FBQyxDQUFBO1FBRTNGLENBQUM7S0FBQSxDQUFDLENBQUE7SUFFRixFQUFFLENBQUMsc0JBQXNCLEVBQUU7O1lBQ3pCLE1BQU0sU0FBUyxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQy9CLHFCQUFxQjtZQUNyQixNQUFNLENBQUMsTUFBTSxTQUFTLENBQUMsV0FBVyxDQUFDLFlBQVksQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUd6RSxDQUFDO0tBQUEsQ0FBQyxDQUFBO0FBQ0osQ0FBQyxDQUFDLENBQUEifQ==