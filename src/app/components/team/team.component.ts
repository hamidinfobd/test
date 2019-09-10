import { Component, OnInit } from '@angular/core';

import { TeamService } from './../../services/team.service';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faCaretLeft } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {

  faCoffee = faCoffee;
  faCaretLeft = faCaretLeft;

  defaultTeamImageUrl = "./../../../assets/images/infoboxProfileImage.jpg";
  teamData = {
    "error": false,
    "total": 6,
    "message": "Team of Infobox",
    "team": [
      {
        "team_id": 1,
        "name": "Abdullah Al-Hasnat",
        "email": "mail@hasnat.xyz",
        "designation": "Founder and Software Engineer",
        "profile_image": "./../../../assets/images/infoboxProfileImage.jpg",
        "facebook": "TheHasnatBD",
        "linkedIn": "TheHasnatBD"
      },
      {
        "team_id": 5,
        "name": "Mehedi Hasan",
        "email": "",
        "designation": "Web Developer",
        "profile_image": "./../../../assets/images/infoboxProfileImage.jpg",
        "facebook": "Shuvo.r24",
        "linkedIn": "Shuvo.r24"
      }
    ]
  };

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    this.teamService.getTeam().subscribe(
      (response) => {
        console.log("RESPONSE IS:--> ", response);

        this.teamData = response;

      },
      (error) => {
        console.log("ERROR--> " + error);
      }
    );

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
