import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service'
import { AuthService } from '../services/auth.service'
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Live } from '../live';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-livescores',
  templateUrl: './livescores.component.html',
  styleUrls: ['./livescores.component.css']
})
export class LivescoresComponent implements OnInit {
isLogin: boolean = false
list:Live[];
errorMessage
constructor(
private _api: ApiService,
private _auth: AuthService,
private _router:Router
) { }

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

isUserLogin(){
if(this._auth.getUserDetails() != null){
this.isLogin = true;
}
}
}