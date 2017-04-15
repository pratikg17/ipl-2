import { Component ,Input } from '@angular/core';
import { Team } from '../team';

@Component({
  selector: 'team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.css']
})
export class TeamDetailComponent  {

 
  @Input() selectedTeam: Team;


}
