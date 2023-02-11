import { Component } from '@angular/core';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  allUsers:any; 
  constructor(userService:UserService){
    userService.GetAllUsers().subscribe({
      next:(data)=>{
        console.log(data);
        this.allUsers = data;
      },
      error:(err)=>{
        console.log(err);
      }
    })

  }
}
