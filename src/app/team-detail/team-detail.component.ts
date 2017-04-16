import { Component ,Input,OnInit } from '@angular/core';
import { Team } from '../team';
import { TeamService } from '../team.service'
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css'],
  providers:[TeamService]
})
export class TeamDetailComponent implements OnInit  {

  selectedTeam: Team;  
  constructor(
    private teamService: TeamService,
    private route: ActivatedRoute,
    private location: Location
  ) { }
  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.teamService.getTeamDetail(+params['id']))
      .subscribe(team => this.selectedTeam = team);
  }
  goBack(): void {
    this.location.back();
  }
}
