import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class RouterService {
  tolog() {
    this.router.navigate(["/log"])
  }
  toscoreentry(){
    this.router.navigate(["/scoreentries"])
  }
  toadminlivescores(){
    this.router.navigate(["/adminlivescores"])
  }
  //dependency injection of Router and Location services
  constructor(private router: Router, private location: Location) { }

  // method to load the dashboard component
  todashboard(){
    this.router.navigate(["/dashboard"])
  }

  // method to go to sign up form
  tosignup(){
    this.router.navigate(["/signup"])
  }

  // method to go to login form
  tologin(){
    this.router.navigate(["/login"])
  }
  toscoreboard(){
    this.router.navigate(["/score"])
  }
  toregister(){
    this.router.navigate(["/register"])
  }
  toupcoming(){
    this.router.navigate(["/upcoming"])
  }
  back(){
    this.location.back();
  }

  tostatOpener(pid){
    this.router.navigate(['statOpener',pid,'view'])
  }
}
