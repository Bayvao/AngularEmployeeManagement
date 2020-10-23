import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee.model';
import { EmployeeService } from '../employee.service';

@Component({
    selector: 'app-employee-create',
    templateUrl: './employee-create.component.html',
    styleUrls: ['./employee-create.component.css']
})
export class EmployeeCreateComponent implements OnInit {

    employee: Employee = new Employee();
    submitted = false;

    constructor(private employeeService: EmployeeService) { }

    ngOnInit() {
    }

    newEmployee(){
        this.submitted = true;
        this.employee = new Employee();
    }

    onSubmit() {
        this.submitted = true;
        this.save();
    }
    
    save() {
        this.employeeService.createEmployee(this.employee)
            .subscribe(data => console.log(data), error => console.log(error));
        this.employee = new Employee();
    }


}
