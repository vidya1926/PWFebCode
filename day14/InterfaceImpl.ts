import { CustomReporters } from "./learnInterface";


class LoadApp implements CustomReporters{
    startTracing(): void {
      console.log("Start tracing from the loginPage")
    }
    retryLogic(): void {
        console.log("Set the timout for 5000ms and retries as 3")
    }
    launchBrowser(): void {
        console.log("Launch the Chrome browser")
    }
    getStatus(): void {
      console.log ("Pass");
    }
    locator(): void {
       console.log("Using Playwright Locators")
    }
    browserName: string="Chromium";
    

}
let myReports=new LoadApp();
myReports.startTracing();
myReports.getStatus();
myReports.launchBrowser();
myReports.locator();
myReports.retryLogic();
console.log(myReports.browserName);