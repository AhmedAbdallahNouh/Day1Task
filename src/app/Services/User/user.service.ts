import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(public myHttp:HttpClient) { 
  }
  URL_Db = "https://jsonplaceholder.typicode.com/users";

  GetAllUsers(){
    return this.myHttp.get(this.URL_Db);
  }
  GetUserById(id:any){
    return this.myHttp.get(this.URL_Db+"/"+id);
  }
  AddNewUser(newUser:any){
    return this.myHttp.post(this.URL_Db,newUser);
  }
  updateUser(updatedUser:any,id:any){
    return this.myHttp.put(this.URL_Db,updatedUser+"/"+id);
  }
  deleteUser(id:any){
    return this.myHttp.delete(this.URL_Db+"/"+id);
  }
}
