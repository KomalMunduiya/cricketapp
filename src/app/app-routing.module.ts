import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgModuleCompiler } from '@angular/compiler';
import { SearchComponent } from './components/search/search.component';
import { RecomComponent } from './components/recom/recom.component';
import { LogsignComponent } from './components/logsign/logsign.component';
import { FavsComponent } from './components/favs/favs.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { StatsComponent } from './components/Stats/stats/stats.component';
import { StatOpenerComponent } from './components/Stats/stat-opener/stat-opener.component';
import { LogComponent } from './log/log.component';
import { RegisterComponent } from './register/register.component';
import { ScoreentriesComponent } from './scoreentries/scoreentries.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { OldrecordsComponent } from './oldrecords/oldrecords.component';
import { AdminlivescoresComponent } from './adminlivescores/adminlivescores.component';
import { AdminoldrecordsComponent } from './adminoldrecords/adminoldrecords.component';
import { UpcomingComponent } from './upcoming/upcoming.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'log',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LogsignComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
  },
  {
    path: 'search',
    component: SearchComponent
  },
  {
    path: 'stats',
    component: StatsComponent
  },
  {
    path: 'favs',
    component: FavsComponent,
  },
  {
    path: 'recom',
    component: RecomComponent
  },
  {
    path: 'statOpener/:pid/view',
    component: StatOpenerComponent
  },
 
 

  {
    path:'log',
    component:LogComponent
  },
  {
    path:'register',
    component:RegisterComponent
  },
  {
    path:'scoreentries',
    component:ScoreentriesComponent
  },
  
  {
  path:'livescores',
  component:LivescoresComponent
  },
  {
    path:'oldrecords',
    component:OldrecordsComponent
    },
    {
      path:'adminlivescores',
      component:AdminlivescoresComponent
      },
      {
        path:'adminoldrecords',
        component:AdminoldrecordsComponent
        },
        {
          path:'upcoming',
          component:UpcomingComponent
        }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
