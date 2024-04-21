import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpServiceService } from '../http-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy {

  incorrect: string = '';
  EMAIL_PATTERN = "^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@"
    + "[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$";

  constructor(private http: HttpServiceService,
              private router: Router
             ) { }
  

  ngOnInit(): void {
    document.body.className = "backgroundImg";
  }


  onSubmit(f: NgForm) {
    let obj = {
      emailId: f.value.email,
      password: f.value.password
    }

    this.http.login(obj).subscribe((response: any) => {

      if (response.Msg === "Login Successful") {
        //navigate to home
        sessionStorage.setItem("username",response.user.name);
        this.router.navigate(["/home"]);
      } else {
        this.incorrect = response.Msg;
      }

    })
  }

  ngOnDestroy(): void {
    document.body.className='';
  }

}
