import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HttpServiceService {

  constructor(private http:HttpClient) { }

  baseUrl:string='http://localhost:8091/auth/login';

  empBaseUrl:string="http://localhost:8091/employee/";

  login(obj:any){

    return (this.http.post(this.baseUrl,obj));

  }

  getAllEmpRecords(){

    return (this.http.get(`${this.empBaseUrl}getAllEmployees`));

  }

  getEmployeeById(id:number){

    return (this.http.get(`${this.empBaseUrl}getEmployeeById/${id}`));
  }

}
