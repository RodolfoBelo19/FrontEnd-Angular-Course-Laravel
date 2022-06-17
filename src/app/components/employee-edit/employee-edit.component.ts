import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Employee } from 'src/app/employee';

import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-employee-edit',
  templateUrl: './employee-edit.component.html',
  styleUrls: ['./employee-edit.component.css']
})

export class EmployeeEditComponent implements OnInit {

  id: any;
  idNumber: any;
  data: any;

  employee = new Employee();
  
  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) { }

  ngOnInit(): void {
    this.getData();
  };
  
  getData() {
    this.id = this.route.snapshot.paramMap;
    let idEmployee = this.id['params'][''];
    
    this.idNumber = parseInt(idEmployee);
    this.dataService.getDataById(this.idNumber).subscribe(res => {
      this.data = res;
      this.employee = this.data;
    })
  }

  updateData() {
    this.dataService.updateData(this.idNumber, this.employee).subscribe(res => {
      console.log(res);
      this.getData();
    })
  }

}
