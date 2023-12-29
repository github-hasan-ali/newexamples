import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.scss'
})
export class UsersComponent implements OnInit {
  users:User[]=[]
  constructor(private userServices:UserService){}
  ngOnInit(): void {
      this.getList();
  }
  getList() {
    this.userServices.getAll().subscribe(result=>{
      this.users=result
    })
  }
}
