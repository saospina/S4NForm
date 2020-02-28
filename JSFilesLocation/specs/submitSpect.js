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
const submitPage_1 = require("../pages/submitPage");
const protractor_1 = require("protractor");
let submitPage = new submitPage_1.SubmitPage();
describe('Create an account', function () {
    it('Submit the new account', function () {
        return __awaiter(this, void 0, void 0, function* () {
            yield submitPage.createAccount();
            let alert = protractor_1.browser.switchTo().alert();
            expect(yield alert.getText()).toContain("Bienvenidoo");
            alert.accept();
            protractor_1.browser.sleep(35000);
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0U3BlY3QuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcGVjcy9zdWJtaXRTcGVjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLG9EQUFnRDtBQUNoRCwyQ0FBbUM7QUFJbkMsSUFBSSxVQUFVLEdBQUcsSUFBSSx1QkFBVSxFQUFFLENBQUM7QUFFbEMsUUFBUSxDQUFDLG1CQUFtQixFQUFFO0lBRTVCLEVBQUUsQ0FBQyx3QkFBd0IsRUFBRTs7WUFDM0IsTUFBTSxVQUFVLENBQUMsYUFBYSxFQUFFLENBQUM7WUFDakMsSUFBSSxLQUFLLEdBQVUsb0JBQU8sQ0FBQyxRQUFRLEVBQUUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztZQUM5QyxNQUFNLENBQUMsTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUMsQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDLENBQUM7WUFDdkQsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2Ysb0JBQU8sQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFdkIsQ0FBQztLQUFBLENBQUMsQ0FBQTtBQUNKLENBQUMsQ0FBQyxDQUFBIn0=