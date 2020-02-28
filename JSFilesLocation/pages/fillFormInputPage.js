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
const protractor_1 = require("protractor");
class FillFormInputPage {
    constructor() {
        this.usernameTextInput = protractor_1.element(protractor_1.by.id('id_nombre'));
        this.lastnameTextInput = protractor_1.element(protractor_1.by.id('id_apellido'));
        this.emailTextInput = protractor_1.element(protractor_1.by.id('id_email'));
        this.passwordTextInput = protractor_1.element(protractor_1.by.id('id_password'));
        this.genderRadio = protractor_1.element(protractor_1.by.id('id_genero_hombre'));
        this.calendarTextInput = protractor_1.element(protractor_1.by.model('main.user.birthDate'));
    }
    enterValues(name, lastname, email, password) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.usernameTextInput.sendKeys(name);
            yield this.lastnameTextInput.sendKeys(lastname);
            yield this.emailTextInput.sendKeys(email);
            yield this.passwordTextInput.sendKeys(password);
        });
    }
    enterDate(date) {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.calendarTextInput.sendKeys(date);
            /* let regEx = /^\d{4}-\d{2}-\d{2}$/;
            return date.match(regEx) != null; */
        });
    }
    ;
    selectGender() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.genderRadio.click();
        });
    }
}
exports.FillFormInputPage = FillFormInputPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlsbEZvcm1JbnB1dFBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9wYWdlcy9maWxsRm9ybUlucHV0UGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBLDJDQUFzRDtBQUV0RCxNQUFhLGlCQUFpQjtJQUE5QjtRQUVJLHNCQUFpQixHQUFrQixvQkFBTyxDQUFDLGVBQUUsQ0FBQyxFQUFFLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztRQUMvRCxzQkFBaUIsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7UUFDakUsbUJBQWMsR0FBa0Isb0JBQU8sQ0FBQyxlQUFFLENBQUMsRUFBRSxDQUFDLFVBQVUsQ0FBQyxDQUFDLENBQUM7UUFDM0Qsc0JBQWlCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsQ0FBQyxDQUFDO1FBQ2pFLGdCQUFXLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEVBQUUsQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUM7UUFDaEUsc0JBQWlCLEdBQWtCLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLENBQUM7SUFzQmhGLENBQUM7SUFwQmdCLFdBQVcsQ0FBQyxJQUFZLEVBQUUsUUFBZ0IsRUFBRSxLQUFhLEVBQUUsUUFBZ0I7O1lBQ3BGLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7WUFDaEQsTUFBTSxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUMxQyxNQUFNLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLENBQUM7UUFFcEQsQ0FBQztLQUFBO0lBRVksU0FBUyxDQUFDLElBQVk7O1lBQy9CLE1BQU0sSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUM1QztnREFDb0M7UUFDeEMsQ0FBQztLQUFBO0lBQUEsQ0FBQztJQUVXLFlBQVk7O1lBQ3JCLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUVuQyxDQUFDO0tBQUE7Q0FHSjtBQTdCRCw4Q0E2QkMifQ==