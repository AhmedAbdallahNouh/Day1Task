import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from 'src/app/Services/User/user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent {
  user:any;
  id:any;
  constructor( myActivated:ActivatedRoute, userService:UserService){
    // console.log(myActivated.snapshot.params['id']); 
    this.id = myActivated.snapshot.params['id'];
     userService.GetUserById(this.id).subscribe({
      next:(data)=>{
        console.log(data);
        this.user= data;
      },
      error:(err)=>{
        console.log(err);
      }
     });
  }
}
