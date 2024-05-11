import { CustomReporters } from "./learnInterface";

class AppLauncher implements CustomReporters{
    startTracing(): void {
        throw new Error("Method not implemented.");
    }
    retryLogic(): void {
        throw new Error("Method not implemented.");
    }
    launchBrowser(): void {
        throw new Error("Method not implemented.");
    }
    getStatus(): void {
        throw new Error("Method not implemented.");
    }
    locator(): void {
        throw new Error("Method not implemented.");
    }
    browserName: string;

}