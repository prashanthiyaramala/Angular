import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import ValidateForm from 'src/helpers/validateForm';
import { Router } from '@angular/router';
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

    constructor(private fb:FormBuilder) { }

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
     onSubmit()
     {
      if(this.loginForm.valid)

    {
      //send obj to database
      console.log(this.loginForm.value)

    }

    else
    {
     //throw the error using toaster woth required fields
     ValidateForm.valiadateAllFormFields(this.loginForm);
     alert("Your Form is Invalid")
   }
 }
 }
