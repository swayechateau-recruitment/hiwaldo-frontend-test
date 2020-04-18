import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user'
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit{
  pages = 20;
  page = 1;

  disableBack = true
  disableForward = false

  users: Observable<User[]>;
  readonly ROOT_URL = 'https://tools.hiwaldo.com/hiring/?key=wkbHE5F94aJRUJmE924DW4KBayrxWQ3q6LY8dtKf9PV&page='
  constructor(private http: HttpClient){}

  getList () {
    this.http.get(this.ROOT_URL + this.page).subscribe(res => {
      this.users = res.data
    })
  }

  goBack() {
    this.page <= 1 ? null : this.page -= 1
    this.getList()
  }

  goForward(){
    this.page >= 20 ? null : this.page += 1
    this.getList()
  }

  disableNavButtons() {
    this.disableBack = this.page === 1 ? true : false
    this.disableForward = this.page === this.pages ? true : false
  }

  ngOnInit(): void {
    this.getList ()
    this.disableNavButtons()
  }
}
