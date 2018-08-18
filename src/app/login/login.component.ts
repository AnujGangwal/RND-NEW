import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user;
  password;
  block:boolean = false;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  login(){
    if(this.user == 'admin'){
      if(this.password == 'admin123'){
        localStorage.setItem('user','admin');   //API is not available so i am using Localstorage
         this.router.navigate(['/home']);
      }
    }else{
      if(this.user == 'customer'){
        if(this.password == 'customer123'){
          localStorage.setItem('user','customer');  //API is not available so i am using Localstorage
           this.router.navigate(['/home']);
        }
      }else{
        this.block = true;
      }
    }

    
} 
}
