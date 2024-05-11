import { TestReport } from "./learnAbstraction";



class MyReports extends TestReport{
    startReport(): void {
       console.log("Start report as html")
    }
//add other logics


}

let report=new MyReports();
report.startReport();
report.takeScreenshot();