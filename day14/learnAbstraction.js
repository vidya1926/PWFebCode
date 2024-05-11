"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestReport = void 0;
var TestReport = /** @class */ (function () {
    function TestReport() {
    }
    TestReport.prototype.takeScreenshot = function () {
        console.log("Taking screenshot for each step");
    };
    return TestReport;
}());
exports.TestReport = TestReport;
//not allowed to create object for the abstract class
//let teststatus=new TestReport();
