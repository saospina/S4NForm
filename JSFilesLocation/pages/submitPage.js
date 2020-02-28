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
class SubmitPage {
    constructor() {
        this.submitButton = protractor_1.element.all(protractor_1.by.css("button[class='btn btn-default']")).get(1);
    }
    createAccount() {
        return __awaiter(this, void 0, void 0, function* () {
            yield this.submitButton.submit();
            /* let alert: Alert = browser.switchTo().alert();
            // clicks 'OK' button
            alert.accept(); */
        });
    }
}
exports.SubmitPage = SubmitPage;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3VibWl0UGFnZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL3N1Ym1pdFBhZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFHckYsTUFBYSxVQUFVO0lBQXZCO1FBRUksaUJBQVksR0FBa0Isb0JBQU8sQ0FBQyxHQUFHLENBQUMsZUFBRSxDQUFDLEdBQUcsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBU2hHLENBQUM7SUFQZ0IsYUFBYTs7WUFDdEIsTUFBTSxJQUFJLENBQUMsWUFBWSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBQ2pDOzs4QkFFa0I7UUFFdEIsQ0FBQztLQUFBO0NBQ0o7QUFYRCxnQ0FXQyJ9