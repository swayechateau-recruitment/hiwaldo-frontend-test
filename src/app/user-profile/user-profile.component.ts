import { Component, OnInit } from '@angular/core'
import { Input } from '@angular/core'
@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  @Input() user;
  constructor() { }
  // Get co-ordinates data
  getCoOrdinateData(){
    let apiUrl = `https://api.opencagedata.com/geocode/v1/json?key=0275c6f01fb3407e967f6c0ca4e0b246&q=${this.user.latitude}+${this.user.longitude}`
  }
  ngOnInit(): void {
  }
}
