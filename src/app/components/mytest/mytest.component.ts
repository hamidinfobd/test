import { Component, OnInit } from '@angular/core';

import { TeamService } from './../../services/team.service';
import { Team } from 'src/app/models/team.model';


@Component({
  selector: 'app-mytest',
  templateUrl: './mytest.component.html',
  styleUrls: ['./mytest.component.scss']
})
export class MytestComponent implements OnInit {

  


  team: any[] = [];

  constructor(private teamService: TeamService) { }

  ngOnInit() {

    this.team = this.teamService.getTeam();
    console.dir(this.team);
  }



}
