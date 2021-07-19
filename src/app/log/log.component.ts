import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ApiService } from '../services/api.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.css']
})
export class LogComponent implements OnInit {

  isLogin: boolean = false
  username:string
  password:string
  formdata:FormGroup;
  requiredForm: FormGroup;
errorMessage
  
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router,
private snackBar: MatSnackBar,
private fb:FormBuilder,

) { 
  this.myForm()
}
ngOnInit() {
  this.formdata=new FormGroup({
  username:new FormControl(""),
  password:new FormControl("")
  });
this.isUserLogin();
}
myForm(){
this.requiredForm=this.fb.group({
  username: ['',Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
  password: ['', Validators.compose([Validators.required, Validators.minLength(8), Validators.maxLength(10)])],
  // email: ['', Validators.compose([Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")])],
  // num: ['', Validators.compose([Validators.required, Validators.minLength(10), Validators.maxLength(10)])],
  // gender:['', Validators.required],
  // date:['',Validators.required],
  // status:['',Validators.required]
});
}
onSubmit(form: NgForm) {
console.log('Your form data : ', form.value);
if((form.value['username'] === "admin@gmail.com")){
  this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
    if (res.status) {
    console.log(res)
    this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
    this._auth.setDataInLocalStorage('token', res.token);
    this._router.navigate(['scoreentries']);
    this.snackBar.open('Success', 'Logged in', {duration: 1000});
  } else {
  }
  }, err => {
  this.errorMessage = err['error'].message;
  });
}
else{
this._api.postTypeRequest('user/login', form.value).subscribe((res: any) => {
if (res.status) {
console.log(res)
this._auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
this._auth.setDataInLocalStorage('token', res.token);
this._router.navigate(['dashboard']);
this.snackBar.open('Success', 'Logged in', {duration: 1000});
//this.route.navigate(['/dashboard'])
} else {
}
}, err => {
this.errorMessage = err['error'].message;
});
}}
isUserLogin(){
console.log(this._auth.getUserDetails())
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}

}
logout(){
  this.snackBar.open('Logged Out', '', {duration: 1000});
    sessionStorage.clear();
//this._auth.clearStorage()
this._router.navigate(['log']);
}
register(){
  this._router.navigate(['register']);
}
}
