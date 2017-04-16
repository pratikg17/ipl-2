import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[TeamService]
})
export class DashboardComponent implements OnInit {

  teams: Team[]=[];
  constructor(private teamService: TeamService) {
  };



  ngOnInit(): void {
    this.teamService.getTeam()
      .then(team => this.teams = team.slice(0, 4));
  }


}
