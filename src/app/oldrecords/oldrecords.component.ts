import { Component, OnInit,Input } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Live } from '../live';
import { CommonModule } from '@angular/common';
import { Oldentry } from '../oldentry';
@Component({
  selector: 'app-oldrecords',
  templateUrl: './oldrecords.component.html',
  styleUrls: ['./oldrecords.component.css']
})
export class OldrecordsComponent implements OnInit {

isLogin: boolean = false
data1:string
list:Oldentry[];
errorMessage
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router
) { }

ngOnInit() {
this.isUserLogin();
//this.onSubmit();
}

getData(form:NgForm) {
  console.log(form);
  this.list = [];
 console.log('Your form data : ', form.value);
 if(form.value['team'] === "India")
 {
this._api.getTypeRequest('user/scorebyteam/:team').subscribe((res: any) => {
      if (res.status) {

      const data = res.data;

      for (let obj of data) {
         obj.status = true;
         const pid = obj['team'];
         var entry = new Oldentry();
                    entry.id = res.id;
                   entry.team = pid;
                    entry.player = res['player'];
                    entry.ball = res['ball'];
                    entry.run = res['run'];
                    entry.status = res['status'];
                    entry.matchid = res['matchid'];
                    entry.fours=res['fours'];
                    entry.six = res['six'];
                    this.list.push(entry);
        
       }
      }
       else {
        console.log("The result is"+res.toString())
        console.log(res)
    
       const data = res.data;
       console.log(res);
       this.list=res;
      
        return this.list;
       }
        
        }, err => {
        this.errorMessage = err['error'].message;
        console.log(this.errorMessage);
        });}
        else if(form.value['team'] === "NewZealand"){
          this._api.getTypeRequest('user/scorebyteam2/:team').subscribe((res: any) => {
            if (res.status) {
          
                  const data = res.data;
            
                  for (let obj of data) {
                     obj.status = true;
                     const pid = obj['team'];
                     var entry = new Oldentry();
                                entry.id = res.id;
                               entry.team = pid;
                                entry.player = res['player'];
                                entry.ball = res['ball'];
                                entry.run = res['run'];
                                entry.status = res['status'];
                                entry.matchid = res['matchid'];
                                entry.fours=res['fours'];
                                entry.six = res['six'];
                                this.list.push(entry);
                    
                   }
                  }
                   else {
                    console.log("The result is"+res.toString())
                    console.log(res)
              
                   const data = res.data;
                   console.log(res);
                   this.list=res;
                 
                    return this.list;
                   }
                    
                    }, err => {
                    this.errorMessage = err['error'].message;
                    console.log(this.errorMessage);
                    });

        }
        else if(form.value['team'] === "SriLanka"){
          this._api.getTypeRequest('user/scorebyteam4/:team').subscribe((res: any) => {
            if (res.status) {
          
                  const data = res.data;
            
                  for (let obj of data) {
                     obj.status = true;
                     const pid = obj['team'];
                     var entry = new Oldentry();
                                entry.id = res.id;
                               entry.team = pid;
                                entry.player = res['player'];
                                entry.ball = res['ball'];
                                entry.run = res['run'];
                                entry.status = res['status'];
                                entry.matchid = res['matchid'];
                                entry.fours=res['fours'];
                                entry.six = res['six'];
                                this.list.push(entry);
                    
                   }
                  }
                   else {
                    console.log("The result is"+res.toString())
                    console.log(res)
              
                   const data = res.data;
                   console.log(res);
                   this.list=res;
                 
                    return this.list;
                   }
                    
                    }, err => {
                    this.errorMessage = err['error'].message;
                    console.log(this.errorMessage);
                    });

        }
        else if(form.value['team'] === "Australia"){
          this._api.getTypeRequest('user/scorebyteam5/:team').subscribe((res: any) => {
            if (res.status) {
          
                  const data = res.data;
            
                  for (let obj of data) {
                     obj.status = true;
                     const pid = obj['team'];
                     var entry = new Oldentry();
                                entry.id = res.id;
                               entry.team = pid;
                                entry.player = res['player'];
                                entry.ball = res['ball'];
                                entry.run = res['run'];
                                entry.status = res['status'];
                                entry.matchid = res['matchid'];
                                entry.fours=res['fours'];
                                entry.six = res['six'];
                                this.list.push(entry);
                    
                   }
                  }
                   else {
                    console.log("The result is"+res.toString())
                    console.log(res)
              
                   const data = res.data;
                   console.log(res);
                   this.list=res;
                 
                    return this.list;
                   }
                    
                    }, err => {
                    this.errorMessage = err['error'].message;
                    console.log(this.errorMessage);
                    });

        }
        else if(form.value['team'] === "Pakistan"){
          this._api.getTypeRequest('user/scorebyteam3/:team').subscribe((res: any) => {
            if (res.status) {
          
                  const data = res.data;
            
                  for (let obj of data) {
                     obj.status = true;
                     const pid = obj['team'];
                     var entry = new Oldentry();
                                entry.id = res.id;
                               entry.team = pid;
                                entry.player = res['player'];
                                entry.ball = res['ball'];
                                entry.run = res['run'];
                                entry.status = res['status'];
                                entry.matchid = res['matchid'];
                                entry.fours=res['fours'];
                                entry.six = res['six'];
                                this.list.push(entry);
                    
                   }
                  }
                   else {
                    console.log("The result is"+res.toString())
                    console.log(res)
              
                   const data = res.data;
                   console.log(res);
                   this.list=res;
                 
                    return this.list;
                   }
                    
                    }, err => {
                    this.errorMessage = err['error'].message;
                    console.log(this.errorMessage);
                    });

        }
        else{
          alert("No records in database yet!!");
        }
        }
   
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}
}
}


