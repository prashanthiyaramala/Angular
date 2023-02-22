import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import ValidateForm from 'src/helpers/validateForm';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  detailsForm!:FormGroup;

  constructor(private fb:FormBuilder) { }

  ngOnInit():void{
    this.detailsForm=this.fb.group({
      internname:['',Validators.required],
     internship:['',Validators.required],
    start:['',Validators.required],
    end:['',Validators.required]
      })
    }
  Submit(){
    if(this.detailsForm.valid)
    {
    console.log(this.detailsForm.value)
    //send obj to database
    }

   else
   {
    //throw the error using toaster woth required fields
    ValidateForm.valiadateAllFormFields(this.detailsForm)
    alert("Your Form is Invalid");
  }

    }
  }








