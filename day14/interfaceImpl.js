"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var LoadApp = /** @class */ (function () {
    function LoadApp() {
        this.browserName = "Chromium";
    }
    LoadApp.prototype.startTracing = function () {
        console.log("Start tracing from the loginPage");
    };
    LoadApp.prototype.retryLogic = function () {
        console.log("Set the timout for 5000ms and retries as 3");
    };
    LoadApp.prototype.launchBrowser = function () {
        console.log("Launch the Chrome browser");
    };
    LoadApp.prototype.getStatus = function () {
        console.log("Pass");
    };
    LoadApp.prototype.locator = function () {
        console.log("Using Playwright Locators");
    };
    return LoadApp;
}());
var myReports = new LoadApp();
myReports.startTracing();
myReports.getStatus();
myReports.launchBrowser();
myReports.locator();
myReports.retryLogic();
console.log(myReports.browserName);
