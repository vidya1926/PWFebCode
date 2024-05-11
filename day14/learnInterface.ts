 interface Browser{

  launchBrowser():void;
  getStatus():void;
  locator():void;
  browserName:string;
}

export interface CustomReporters extends Browser{
     startTracing():void;
     retryLogic():void;

}
//not allowed to create an object 
//let myreports=new CustomReporters();