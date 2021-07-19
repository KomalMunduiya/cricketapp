import { Component, OnInit } from '@angular/core';
import { RouterService } from 'src/app/services/router.service';

import { Player } from 'src/app/models/player';
import { CricapiService } from 'src/app/services/cricapi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit{

  list: Array<Player> = [];
  defaultImageUrl: string;
  name: string;
  private _router:Router
 constructor(private route: RouterService,private cricapi: CricapiService, private snackBar: MatSnackBar) {
  this.defaultImageUrl= '../../../assets/default.jpg';
 }
 

  ngOnInit(): void { 

    var name:string = sessionStorage.getItem('username');
    $(document).ready(function() {
      $(window).on('scroll', function() {
       if($(window).scrollTop() < 1000) {
         $('.hero').css('background-size', 130 + '%');
         $('.hero h1').css('top', 50 + ($(window).scrollTop() * .1) + '%');
         $('.hero h1').css('opacity', 1 - ($(window).scrollTop() * .003));
       }
        
        if($(window).scrollTop() >= $('.content-wrapper').offset().top - 300) {
          $('.nav-bg').removeClass('bg-hidden');
          $('.nav-bg').addClass('bg-visible');
        } else {
          $('.nav-bg').removeClass('bg-visible');
          $('.nav-bg').addClass('bg-hidden');
        }
     });
   });


   }


  logout(){
    this.snackBar.open('Logged Out', '', {duration: 1000});
    sessionStorage.clear();
    //this._router.navigate(['log']);
   this.route.tolog();
  }
  
  
   
  routeToSearch(){
    this.route.todashboard();
  }
}
