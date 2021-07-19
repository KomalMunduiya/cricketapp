import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Live } from '../live';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
@Component({
  selector: 'app-adminlivescores',
  templateUrl: './adminlivescores.component.html',
  styleUrls: ['./adminlivescores.component.css']
})
export class AdminlivescoresComponent implements OnInit 
{
isLogin: boolean = false
list:Live[];
errorMessage
  
constructor(
private _api: ApiService,
private _auth: AuthService,
private snackbar:MatSnackBar,
private _router: Router
//private _router:Router
) {}
  


ngOnInit() {
this.isUserLogin();
this.onSubmit();

}
onSubmit() {
//console.log('Your form data : ', form.value);
this._api.getTypeRequest('user/getscore').subscribe((res: any) => {
if (res.status) {

this.list=res;
return this.list;
// this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
// this._auth.setDataInLocalStorage('token', res.token);
//this._router.navigate(['scoreentries']);
//alert("successfully entered");

} else {
console.log(res)
this.list=res;
alert(res.msg)
return this.list;

}
}, err => {
this.errorMessage = err['error'].message;
});
}
// home(){
  
// }
logout(){
  this.snackbar.open('Logged Out', '', {duration: 1000});
  sessionStorage.clear();
  this._auth.clearStorage();
  this._router.navigate(['log']);
}
// delete() {
//   let confirmAction = confirm("Do you really wanna delete??");
//   if (confirmAction) {
    
//     this._api.getTypeRequest('user/deletescore').subscribe((res: any) => {
//       if (res.status) {
      
//       this.list=res;
//       return this.list;
     
      
//       } else {
//       console.log(res)
//       this.list=res;
//       alert(res.msg)
//       return this.list;
      
//       }
//       }, err => {
//       this.errorMessage = err['error'].message;
//       });
//   } else {
//     alert("Action canceled");
//   }
// }
delete1(){
  alert("Do you really wanna delete??")
  this._api.getTypeRequest('user/deletescore').subscribe((res: any) => {
    if (res.status) {
    
    this.list=res;
    return this.list;
    // this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
    // this._auth.setDataInLocalStorage('token', res.token);
    //this._router.navigate(['scoreentries']);
    //alert("successfully entered");
    
    } else {
    console.log(res)
    this.list=res;
    alert(res.msg)
    return this.list;
    
    }
    }, err => {
    this.errorMessage = err['error'].message;
    });
}
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}
}
}