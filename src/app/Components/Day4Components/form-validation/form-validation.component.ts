import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.css']
})
export class FormValidationComponent {
  regForm = new FormGroup({
    name: new FormControl("Ahmed",Validators.required),
    age: new FormControl(26,[Validators.required,Validators.min(20),Validators.max(40)])
  });

  get NameValid(){
    return this.regForm.controls.name.valid;
  };
  add(): void{
    console.log(this.regForm);
  }
}
