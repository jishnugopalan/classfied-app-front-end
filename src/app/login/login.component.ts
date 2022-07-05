import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
import { authResponse } from '../model/authresponse';
import { User } from '../model/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 

  user: User = { username: "", password: "" }

  
  userForm: FormGroup = new FormGroup({})

 formError = ""
  constructor(private router:Router,private authService:AuthenticationService) { }
  get username() { return this.userForm.get('username') }
  get password() { return this.userForm.get('password') }

  onSubmit() {
    console.log(this.userForm.value)
    
    let userDetails = { "empUsername": this.userForm.value.username, "empPassword": this.userForm.value.password}
 
    this.authService.getUserToken(userDetails).subscribe((data:authResponse)=>{
    
     localStorage.setItem("token",data["authToken"])
     
     localStorage.setItem("userId",data['empid'])
    
     this.router.navigate(['dashboard'])
    },error=>{
      this.formError = "Incorrect username or password"
      console.log(error)
    })

  }

  ngOnInit(): void {
    this.userForm = new FormGroup({
      username: new FormControl(this.user.username, [
        Validators.required,
        Validators.minLength(3)
      ]),
      password: new FormControl(this.user.password, [
        Validators.required,
      ])
    })
  }

}
