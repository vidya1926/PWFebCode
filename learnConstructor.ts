import { stringifier } from "csv";

class Department{
    departmentName:string
    teamSize:number
    constructor(name:string,size:number){
        this.departmentName=name
        this.teamSize=size
    }
    printdepDetails(){
        console.log(`${this.departmentName}-${this.teamSize}`);
        
    }
}
const dep=new Department("Technical",140);
dep.printdepDetails();

