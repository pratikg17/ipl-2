import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TeamComponent } from './team/team.component';

@NgModule({
  declarations: [
    AppComponent,
    TeamDetailComponent,
    DashboardComponent,
    TeamComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule.forRoot([
      {
        path: 'team',
        component: TeamComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      }, {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }, {
        path: 'detail/:id',
        component: TeamDetailComponent
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
