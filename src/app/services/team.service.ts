import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Team } from './../models/team.model';
import { Observable } from 'rxjs';

@Injectable()
export class TeamService {

  rawData = {
    "error": false,
    "total": 6,
    "message": "Team of Infobox",
    "team": [
      {
        "team_id": 1,
        "name": "Abdullah Al-Hasnat",
        "email": "mail@hasnat.xyz",
        "designation": "Founder and Software Engineer",
        "profile_image": "",
        "facebook": "TheHasnatBD",
        "linkedIn": "TheHasnatBD"
      },
      {
        "team_id": 5,
        "name": "Mehedi Hasan",
        "email": "",
        "designation": "Web Developer",
        "profile_image": "",
        "facebook": "Shuvo.r24",
        "linkedIn": "Shuvo.r24"
      },
      {
        "team_id": 2,
        "name": "Rupom Debnath",
        "email": "",
        "designation": "Country Lead",
        "profile_image": "",
        "facebook": "Rupomdebnath0",
        "linkedIn": "Rupomdebnath0"
      },
      {
        "team_id": 3,
        "name": "A.S. Sabuj",
        "email": "",
        "designation": "Android Developer",
        "profile_image": "",
        "facebook": "saeed.sabuj",
        "linkedIn": ""
      },
      {
        "team_id": 4,
        "name": "Nahidul Islam",
        "email": "",
        "designation": "Finance",
        "profile_image": "./../../assets/images/image3.jpg",
        "facebook": "",
        "linkedIn": ""
      },
      {
        "team_id": 6,
        "name": "Md Hamidur Rhaman",
        "email": "",
        "designation": "Web Developer",
        "profile_image": "./../../assets/images/image1.jpg",
        "facebook": "hamidinfobd",
        "linkedIn": "hamidinfobd"
      }
    ]
  };

  team: Team[] = [];

  constructor(private http: HttpClient) {

   }

  url_team = 'https://infoboxbd.org/api/v1/website/team/type=team/en';

   public getTeam(): any {
     this.rawData.team.forEach((teamMember) => {
       if(teamMember.profile_image == "") {
         teamMember.profile_image = "./../../assets/images/infoboxProfileImage.jpg";
       }
     });
     return this.rawData;
   }
}
