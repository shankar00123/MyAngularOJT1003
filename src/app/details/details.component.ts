import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpServiceService } from '../http-service.service';
import { Employee } from '../utility/employee';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  employeeIdFetchedFromUrl!:number;
  employeeObjById:Employee=<Employee>{};

  constructor(private router:ActivatedRoute,
    private service:HttpServiceService
  ) { }

  ngOnInit(): void {
    this.getEmpIDFromUrl();
  }

  getEmpIDFromUrl(){

    this.router.paramMap.subscribe((parameter:any)=>{

      // console.log(parameter.get("eid"));
      this.employeeIdFetchedFromUrl=parameter.get("eid");
      this.service.getEmployeeById(this.employeeIdFetchedFromUrl)
      .subscribe((response:any)=>{
        // console.log(response);
        this.employeeObjById=response;
      })
    })
  }
}
