import { Employee } from "./learnClass"

class Payroll extends Employee{

  constructor(){
   super();
   console.log(`From Parent class ${this.empName}`)
  }

printctcInfo()
{
this.empName='Vidya';
console.log(`${this.empName}`)
}

}


const pr=new Payroll()
pr.printctcInfo();
pr.printempDetails();

