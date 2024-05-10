export class Employee{
    empId:number;
     empName:string
    

 printempDetails(){   
    console.log(`${this.empName}`)
}}

const em=new Employee();
console.log(em.empId);
em.printempDetails()
