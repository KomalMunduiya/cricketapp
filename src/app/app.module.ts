import { NgModuleCompiler } from '@angular/compiler';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list'
import { MatDialogModule } from '@angular/material/dialog'
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MatCardModule } from '@angular/material/card';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';
import { MatTabsModule } from '@angular/material/tabs';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { MatTableModule } from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { SearchComponent } from './components/search/search.component';
import { LogsignComponent } from './components/logsign/logsign.component';
import { RecomComponent } from './components/recom/recom.component';
import { FavsComponent } from './components/favs/favs.component';
import { StatOpenerComponent } from './components/Stats/stat-opener/stat-opener.component';
import { StatsComponent } from './components/Stats/stats/stats.component';
import { StatviewComponent } from './components/Stats/statview/statview.component';

import { UpcomingComponent } from './upcoming/upcoming.component';

import { LogComponent } from './log/log.component';
import { RegisterComponent } from './register/register.component';
import { AuthComponent } from './auth/auth.component';
import { ScoreentriesComponent } from './scoreentries/scoreentries.component';
import { LivescoresComponent } from './livescores/livescores.component';
import { OldrecordsComponent } from './oldrecords/oldrecords.component';
import { AdminlivescoresComponent } from './adminlivescores/adminlivescores.component';
import { AdminoldrecordsComponent } from './adminoldrecords/adminoldrecords.component';



@NgModule({
  declarations: [
    AppComponent,
    LogsignComponent,
    DashboardComponent,
    SearchComponent,
    StatOpenerComponent,ScoreentriesComponent,LivescoresComponent,OldrecordsComponent,
    StatsComponent,AdminlivescoresComponent,AdminoldrecordsComponent,
    StatviewComponent,
    RecomComponent,
    FavsComponent,
    
    UpcomingComponent,
    
    LogComponent,
    RegisterComponent,
    AuthComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    LayoutModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatInputModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatSelectModule,MatTableModule,
    MatSidenavModule,
    MatTabsModule,
    NgxPaginationModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatGridListModule,
    MatMenuModule,
    MatFormFieldModule,
    MatSnackBarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
