export abstract class TestReport{


 abstract startReport():void;  //abstract method -->no logic

 takeScreenshot(){
    console.log("Taking screenshot for each step");
 }

}
//not allowed to create object for the abstract class
//let teststatus=new TestReport();