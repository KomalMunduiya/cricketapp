import { Component, OnInit,Input } from '@angular/core';
import { CricapiService } from 'src/app/services/cricapi.service';
import { RouterService } from 'src/app/services/router.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Favs } from '../models/fav';
import { Recommended } from '../models/recommended';
import { NgModuleCompiler } from '@angular/compiler';
import {NgForm} from '@angular/forms';
import { Router } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { Live } from '../live';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.css']
})

export class UpcomingComponent implements OnInit {
  stat: boolean;
  config: any;
  val: string;
  fav: Favs;
  recom: Recommended
  list: Array<Favs> = [];
 upcomingMatches:Array<any>;
 user:string;
 

  constructor(private cricapi: CricapiService, private route: RouterService) { }

  ngOnInit(): void {
    this.cricapi.getUpcomingMatches().subscribe((matches)=>{
      console.log("upcoming matches")
      this.upcomingMatches = matches['matches'];
      console.log(matches);
    });
    
  }
  getMatch(data){
    let obj=
    {
    uniqueid: data.unique_id,
    date: data.date,
    dateTimeGMT: data.dateTimeGMT,
    team1: data['team-1'],
    team2: data['team-2'],
    type: data.type,
    squad: data.squad,
    matchStarted: data.matchStarted,
    }
    console.log(obj);
  }
}
