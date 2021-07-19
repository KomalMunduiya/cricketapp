import { Component, OnInit } from '@angular/core';
import { CricapiService } from 'src/app/services/cricapi.service';
import { RouterService } from 'src/app/services/router.service';
import { Find } from 'src/app/models/find';


@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {
  config: any;
  val: string;
  list: Array<Find> = [];

  constructor(private cricapi: CricapiService, private route: RouterService) {
    //pagination
    this.val = "";
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.list.length
    };

  }

  // note if the page is changed
  pageChanged(event) {
    this.config.currentPage = event;
  }
  ngOnInit() {
  }

  // this method will search player by his name as privided in val
  getData(val) {
    this.cricapi.searchPlayer(val).subscribe(
      res => {
        this.list = res.data;
        for (let obj of this.list) {
          obj.status = true;
        }
      },
      err => {
        console.log(err)
      })
  }

  // this method will redirect to stat Opener component by taking player id (pid) with it
  viewStats(data){
    this.route.tostatOpener(data.pid);
  }

}
