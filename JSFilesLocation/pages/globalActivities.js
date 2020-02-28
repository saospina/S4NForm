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
class GlobalActivities {
    getWebPage(url) {
        return __awaiter(this, void 0, void 0, function* () {
            // browser.ignoreSynchronization = true;
            yield protractor_1.browser.get(url);
        });
    }
    getTitlePage() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getTitle();
        });
    }
    waitForElement(parameter, seconds) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.wait(protractor_1.ExpectedConditions.elementToBeClickable(parameter), seconds * 1000, 'Failed the explicit wait');
        });
    }
    waitForAngular(param) {
        return __awaiter(this, void 0, void 0, function* () {
            yield protractor_1.browser.waitForAngularEnabled(param);
        });
    }
    getUrl() {
        return __awaiter(this, void 0, void 0, function* () {
            return yield protractor_1.browser.getCurrentUrl();
        });
    }
}
exports.GlobalActivities = GlobalActivities;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2xvYmFsQWN0aXZpdGllcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3BhZ2VzL2dsb2JhbEFjdGl2aXRpZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBcUY7QUFFckYsTUFBYSxnQkFBZ0I7SUFFWixVQUFVLENBQUMsR0FBVzs7WUFDL0Isd0NBQXdDO1lBQ3hDLE1BQU0sb0JBQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDM0IsQ0FBQztLQUFBO0lBRVksWUFBWTs7WUFDckIsT0FBTyxNQUFNLG9CQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDcEMsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLFNBQXdCLEVBQUUsT0FBZTs7WUFDakUsTUFBTSxvQkFBTyxDQUFDLElBQUksQ0FBQywrQkFBa0IsQ0FBQyxvQkFBb0IsQ0FBQyxTQUFTLENBQUMsRUFBRSxPQUFPLEdBQUcsSUFBSSxFQUFFLDBCQUEwQixDQUFDLENBQUM7UUFDdkgsQ0FBQztLQUFBO0lBRVksY0FBYyxDQUFDLEtBQWM7O1lBQ3RDLE1BQU0sb0JBQU8sQ0FBQyxxQkFBcUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUUvQyxDQUFDO0tBQUE7SUFDWSxNQUFNOztZQUNmLE9BQU8sTUFBTSxvQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pDLENBQUM7S0FBQTtDQUNKO0FBdEJELDRDQXNCQyJ9