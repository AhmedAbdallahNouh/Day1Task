import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

    name= "";
    age= "";
  

 @Output() registerEvent = new EventEmitter();

sendData(){
  if((this.name.length>=3) && (+this.age>20 && +this.age<30)){
    let dataregister:{name:string, age:string} = {name:this.name, age:this.age};
    this.registerEvent.emit(dataregister);
  }
  
}
}
