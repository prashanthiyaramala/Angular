import { Component, OnInit } from '@angular/core';
import{Validators,FormGroup,FormBuilder,FormControl}from '@angular/forms';
import { Router } from '@angular/router';
import ValidateForm from 'src/helpers/validateForm';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  type:string ="password";
  isText: boolean = false;
  eyeIcon: string ="fa-eye-slash";
  signUpForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit():void{
    this.signUpForm=this.fb.group({
      username:['',Validators.required],
      email:['',Validators.required],
      password:['',Validators.required]
      })
    }
      hideshowpass()
    {
      this.isText = !this.isText;
      this.isText? this.eyeIcon="fa-eye":this.eyeIcon="fa-eye-slash";
      this.isText? this.type="text":this.type="password";
   }
   onSignup()
   {
    if(this.signUpForm.valid)


  {
    console.log(this.signUpForm.value)

  }
    //send obj to database

   else
   {
    //throw the error using toaster woth required fields
    ValidateForm.valiadateAllFormFields(this.signUpForm)
    alert("Your Form is Invalid");
  }
}
}






