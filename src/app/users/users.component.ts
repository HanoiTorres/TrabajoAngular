import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
users: any;
  constructor(private userService: UsersService) { }

  ngOnInit(): void {
  }


addUser(){

}

deleteUser(){

}

editUser(){

}

goToEditUser(){
  
}

async listUsers(){
 await (await this.userService.getAll()).subscribe(res => {
   this.users = res;
 })
}



}
