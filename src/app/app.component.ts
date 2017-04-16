import { Component ,OnInit } from '@angular/core';
import { Team } from './team';
import {TeamService } from './team.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[TeamService]
})


export class AppComponent implements OnInit {
  title = 'Welcome to IPL 2018';
  teams: Team[];
  constructor(private teamService: TeamService) {
  };

  ngOnInit() {

    this.getTeam();
    
  }
  
  
  selectedTeam: Team;

  onSelected(team: Team) {
    this.selectedTeam = team;
  }
  getTeam() {
    this.teams = this.teamService.getTeam();
  }

}
