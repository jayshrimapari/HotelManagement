import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  constructor(private router:Router){
  }
  SignIn(){
    this.router.navigateByUrl('/signin')
  
  }
  SignUp(){
    this.router.navigateByUrl('/signup')
  
  }
  ViewHotelList(){
   this.router.navigateByUrl('/viewhotellist')
  }

}
