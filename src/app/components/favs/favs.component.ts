import { Component, OnInit } from '@angular/core';
import { Recommended } from 'src/app/models/recommended';
import { Favs } from 'src/app/models/fav';
import { FavouritesService } from 'src/app/services/favourites.service';
import { RecommendedService } from 'src/app/services/recommended.service';
import { CricapiService } from 'src/app/services/cricapi.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ApiService } from 'src/app/services/api.service';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-favs',
  templateUrl: './favs.component.html',
  styleUrls: ['./favs.component.css']
})
// favourite component will show favourite players and will have the option to remove Players from favs
export class FavsComponent implements OnInit {

  list : Array<Favs>;
  fav: Favs;
  recom: Recommended
  defaultImageUrl: string;

  // dependency injection of required services
  constructor(private favser : FavouritesService, private snackBar: MatSnackBar, private recomser : RecommendedService, private cricapi : CricapiService,private _api: ApiService,
private _auth: AuthService) {
  
    this.defaultImageUrl= '../../../assets/default.jpg';
   }

  // load all the favs of a particular user at the time of initialization
  ngOnInit(): void {
    this.favser.getData(sessionStorage.getItem('username'),sessionStorage.getItem('token')).subscribe(
      res => {
        if(res['imageURL'] == null)
        res['imageURL'] = this.defaultImageUrl;
        this.list = res;
      },
      err => console.log(err)
    )    
  }

  // remove a player from favs of the particular user as well as send a decrease couter request to frontend
  removeFromFav(data){
    data.status = true;
    this.recomser.deleteData(data.pid, getItem('token')).subscribe(
      res => this.favser.deleteDataUser(getItem('username'), data.pid, getItem('token')).subscribe(
        res => console.log(res),
        err => console.log(err)
      ),
      err => {
        if (err.statusText === "OK") {
          this.favser.deleteDataUser(getItem('username'), data.pid, getItem('token')).subscribe(
            res => location.reload(),
            err => console.log(err)
          )
          this.snackBar.open('Successfully removed', '', {duration: 1000});
        }
      }
    )
  }

}
function getItem(arg0: string): string {
  throw new Error('Function not implemented.');
}

