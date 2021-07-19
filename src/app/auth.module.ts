import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogComponent } from './log/log.component';
import { RegisterComponent } from './register/register.component';
import { ScoreentriesComponent } from './scoreentries/scoreentries.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
declarations: [
    LogComponent,
RegisterComponent,
ScoreentriesComponent ],
imports: [
CommonModule,
FormsModule,
HttpClientModule
],
exports : [
    LogComponent,
RegisterComponent
]
})
export class AuthModule { }