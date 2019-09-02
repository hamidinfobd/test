import { Component, OnInit } from '@angular/core';

import { TeamService } from './../../services/team.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  faCoffee = faCoffee;

  teamData: any = {};

  constructor(private teamService: TeamService) { }

  ngOnInit() {
    this.teamData = this.teamService.getTeam();
    console.log("Team Data Error:" + this.teamData.error);
    console.log("Team Data Total:" + this.teamData.total);
    console.log("Team Data Message:" + this.teamData.message);
    console.log("Team Data Team:" + this.teamData.team);

  }

  customOptions: OwlOptions = {
    margin: 10,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 700,
    // navText: ['Prev', 'Next'],
    navText: ['<', '>'],
    nav: true,
    items: 10,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  };

}
