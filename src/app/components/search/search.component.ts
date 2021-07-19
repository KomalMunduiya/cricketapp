import { Component, OnInit, Input } from '@angular/core';

import { CricapiService } from 'src/app/services/cricapi.service';
import { Player } from 'src/app/models/player';
import { RecommendedService } from 'src/app/services/recommended.service';
import { Recommended } from 'src/app/models/recommended';
import { MatDialog } from '@angular/material/dialog';
import { Favs } from 'src/app/models/fav';
import { FavouritesService } from 'src/app/services/favourites.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

// search player by name functionality
export class SearchComponent implements OnInit {

  stat: boolean;
  val: any;
  config: any;
  list: Array<Player> = [];
  defaultImageUrl: any;
  step = 0;
  fav: Favs;
  recom: Recommended

  setStep(index: number) {
    this.step = index;
  }


  // Dependency Injection of cric api
  constructor(private cricapi: CricapiService, private favser: FavouritesService, private snackBar: MatSnackBar, private recomser: RecommendedService) {
    this.val = "";
    this.defaultImageUrl= '../../../assets/default.jpg';
    this.config = {
      itemsPerPage: 6,
      currentPage: 1,
      totalItems: this.list.length
    };
  }

  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
  }

  // It will call cric api service and get list of players
  getData(val) {
    console.log(val);
    this.list = [];
    this.cricapi.searchPlayer(val).subscribe(players => {
        const data = players.data;
        for (let obj of data) {
          obj.status = true;
          const pid = obj['pid'];
          this.cricapi.statsPlayer(pid).subscribe(
            playerStats => {
              var player = new Player();
              player.pid = pid;
              player.name = playerStats['name'];
              player.fullname = playerStats['fullName'];
              player.country = playerStats['country'];
              player.profile = playerStats['profile'];
              player.majorTeams = playerStats['majorTeams'];
              player.battingStyle = playerStats['battingStyle'];
              player.bowlingStyle = playerStats['bowlingStyle'];
              if(playerStats['imageURL'] == null)
                player.imageUrl = this.defaultImageUrl;
              else
                player.imageUrl = playerStats['imageURL'];
              this.list.push(player);
            }
          )
        }
      },
      err => {
        console.log(err)
      })
  }

  addToFav(data) {
    data.status = false;
    this.cricapi.statsPlayer(data.pid).subscribe(
      res => {
        this.fav = res;
        this.recom = res;
        this.fav.status = false;
        this.fav.username = sessionStorage.getItem('username');
        this.recomser.addData(this.recom, sessionStorage.getItem('token')).subscribe(
          res => {
            this.favser.addData(this.fav, sessionStorage.getItem('token'))
            
          },
          err => {
            if (err.statusText === "OK") {
              this.favser.addData(this.fav, sessionStorage.getItem('token')).subscribe(
                res => console.log(res),
                err => {
                  if (err.statusText === "OK") {
                    console.log("Success");
                    this.snackBar.open('Player succesfully added!', '', {duration: 1000});
                  }
                })
            }
          })
      },
      err => console.log(err)
    )
  }

 
}
