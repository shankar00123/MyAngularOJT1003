import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';
import { Employee } from '../utility/employee';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  allEmpData:Employee[]=[];

  constructor(private service:HttpServiceService) { }

  ngOnInit(): void {
    this.getAllEmployeeRecords();
  }

  getAllEmployeeRecords(){

    this.service.getAllEmpRecords().subscribe((response:any)=>{

      console.log(response);

      this.allEmpData=response;

    })
  }

}
