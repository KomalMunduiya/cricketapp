import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { StatviewComponent } from '../statview/statview.component';
import { RouterService } from 'src/app/services/router.service';

@Component({
  selector: 'app-stat-opener',
  templateUrl: './stat-opener.component.html',
  styleUrls: ['./stat-opener.component.css']
})
export class StatOpenerComponent implements OnInit {

  // dependency injection of MatDialogue to specify the component as a dialogue
  constructor(private dialogue: MatDialog, private route: RouterService, private actiRoute: ActivatedRoute) {
    const id = +this.actiRoute.snapshot.paramMap.get('pid');

    // Open the stat view component in the dialogue and give pid with it
    this.dialogue.open(StatviewComponent, {
      data: {
        pid: id
      }
    }).afterClosed().subscribe(
      result => {
        this.route.back();
      }
    )
  }

  ngOnInit(): void {
  }

}
