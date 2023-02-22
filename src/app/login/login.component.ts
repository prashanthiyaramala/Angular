import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import ValidateForm from 'src/helpers/validateForm';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    type:string ="password";
    isText: boolean = false;
    eyeIcon: string ="fa-eye-slash";


    loginForm!: FormGroup;

    constructor(private fb:FormBuilder,private auth:AuthService,private router:Router) { }

    ngOnInit(): void {
    this.loginForm=this.fb.group({
      username:['',Validators.required],
      password:['',Validators.required]
    })


    }
     hideshowpass(){
        this.isText = !this.isText;
        this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
        this.isText? this.type="text":this.type="password";
     }
     onLogin()
     {
      if(this.loginForm.valid)

    {
      //send obj to database
      console.log(this.loginForm.value)
      this.auth.login(this.loginForm.value)
      .subscribe({
        next:(res)=>{
          alert(res.message)
          this.loginForm.reset();
          this.router.navigate(['details']);
        },
        error:(err)=>
           {
            alert(err?.error.message)
           }
          })
        }
  else
    {
     //throw the error using toaster woth required fields
     ValidateForm.valiadateAllFormFields(this.loginForm);
     alert("Your Form is Invalid")
   }
  }
}
