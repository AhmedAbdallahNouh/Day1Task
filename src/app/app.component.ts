import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Day1Task';
  // parentToStudFromReg:{name:string, age:string} ={
  //   name: '',
  //   age: ''
  // };
  students:{name:string, age:string}[] = [];
  GetData(data:any){
      console.log(data);   
        this.students.push(data);
      console.log(this.students);
  };
}
