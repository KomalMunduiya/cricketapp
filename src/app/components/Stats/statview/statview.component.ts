import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { StatOpenerComponent } from '../stat-opener/stat-opener.component';
import { CricapiService } from 'src/app/services/cricapi.service';


@Component({
  selector: 'app-statview',
  templateUrl: './statview.component.html',
  styleUrls: ['./statview.component.css']
})
export class StatviewComponent implements OnInit {

  stat :any;

  // dependency injection of cricapi service and also using @Inject to specify that some the value is injected
  constructor(private diaRef: MatDialogRef<StatOpenerComponent>, @Inject(MAT_DIALOG_DATA) private data: any, private cric: CricapiService) { }

  ngOnInit(): void {
    // call api to get all the stats of a particular player by his pid
    this.cric.statsPlayer(this.data.pid).subscribe(
      res => {
        this.stat = res
      },
      err => console.log(err)
    )
  }

}
