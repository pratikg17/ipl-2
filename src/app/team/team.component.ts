import { Component, OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css'],
  providers: [TeamService]
})
export class TeamComponent implements OnInit {

  teams: Team[];
  constructor(private teamService: TeamService,
    private router: Router) {
  };

  ngOnInit() {

    this.getTeam();

  }


  selectedTeam: Team;

  onSelected(team: Team) {
    this.selectedTeam = team;
  }
  getTeam() {

   this.teamService.getTeam().then(team => this.teams =team);
  }
  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedTeam.position]);
  }
}
