import { Component, NgModule, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormsModule }   from '@angular/forms';
// @NgModule({
//   imports: [
//     FormsModule]})  
@Component({
  selector: 'app-scoreentries',
  templateUrl: './scoreentries.component.html',
  styleUrls: ['./scoreentries.component.css']
})
export class ScoreentriesComponent implements OnInit {
isLogin: boolean = false
errorMessage
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router,
private snackBar: MatSnackBar,
) { }
ngOnInit() {
this.isUserLogin();
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
this._api.postTypeRequest('user/enter', form.value).subscribe((res: any) => {
if (res.status) {
console.log(res)
this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
this._auth.setDataInLocalStorage('token', res.token);
this._router.navigate(['scoreentries']);
alert("successfully entered");
form.reset();

} else {
console.log(res)
alert(res.msg)
}
}, err => {
this.errorMessage = err['error'].message;
});
}
logout(){
  this.snackBar.open('Logged Out', '', {duration: 1000});
    sessionStorage.clear();
    this._auth.clearStorage()
    this._router.navigate(['log']);
}
isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}
}
}