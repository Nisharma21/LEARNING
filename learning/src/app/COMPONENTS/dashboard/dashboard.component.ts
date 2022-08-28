import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import { Subscriber } from 'rxjs';
import { EmployeeModel } from 'src/app/dashboard.model';
import { ApiService } from 'src/app/Shared/api.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
formValue!:FormGroup;
employeeModelObj:EmployeeModel=new EmployeeModel();
  constructor(private formBuilder:FormBuilder,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue=this.formBuilder.group({
      firstName:[''],
      lasttName:[''],
      email:[''],
      mobile:[''],
      salary:[''],
      
    })
  }
  postEmployeeDetails(){
    this.employeeModelObj.firstName=this.formValue.value.firstName;
    this.employeeModelObj.lastName=this.formValue.value.lastName;
    this.employeeModelObj.email=this.formValue.value.email;
    this.employeeModelObj.mobile=this.formValue.value.mobile;
    this.employeeModelObj.salary=this.formValue.value.salary;

    this.api.postEmploye(this.employeeModelObj)
    .subscribe(res=>{
      alert("employee added successfully")
      // let ref=document.getElementById('cancel')
      // ref?.click();
    },
    err=>{
      alert("something went worng")

    }
    )
  }

}
