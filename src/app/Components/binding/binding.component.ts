import { Component } from '@angular/core';

@Component({
  selector: 'app-binding',
  templateUrl: './binding.component.html',
  styleUrls: ['./binding.component.css']
})
export class BindingComponent {
  name = "ahmed";
  age = 20;
  value = "";
  lastName="";
  ch(event:any){
  console.log(event.target.value);
  this.value = event.target.value;
  }
  reset(){
    this.value = "";
    this.lastName="";
    }
}
