import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { HomeService } from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  admin:boolean;
  user;
  employeeData;
  constructor(private router:Router,private service:HomeService) { 
    this.user = localStorage.getItem('user');
    if(this.user == '')
    this.router.navigate(['login']);
  }

  ngOnInit() {    
    if(this.user == "admin"){
      this.admin = true;
    }else{
      this.admin = false;
    }

    if(this.user != ''){
      this.service.getEmpData()  // I don't have API
    }
  }

  logout(){
    localStorage.setItem('user','');
    this.router.navigate(['/login']);
  }
}
