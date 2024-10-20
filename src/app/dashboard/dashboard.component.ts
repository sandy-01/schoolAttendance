import { Component, OnInit } from '@angular/core';
import { BaseService } from '../shared/services/base.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dashboard',
  standalone: true,  // Marking this component as standalone
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit
{
  Designation: string = "";
  Username: string = "";
  NoOfTeamMembers: number = 0;
  TotalCostOfAllProjects: number = 0;
  PendingTasks: number = 0;
  UpComingProjects: number = 0;
  ProjectCost: number = 0;
  CurrentExpenditure: number = 0;
  AvailableFunds: number = 0;

  Clients: string[] = [];
  Projects: string[] = [];
  Years: number[] = [];
  TeamMembersSummary: any = [];
  TeamMembers: any = [];
  Users:any = [];

  constructor(private baseService: BaseService) {

  }

  data:any;

  ngOnInit(){
    this.baseService.getCachedData().subscribe(response => {
      this.data = response;
    });
    this.getUserDetails();
    this.Designation = 'Team Leader';
    this.Username = 'Scott Smith';
    this.NoOfTeamMembers = 67;
    this.TotalCostOfAllProjects = 240;
    this.PendingTasks = 15;
    this.UpComingProjects = 2;
    this.ProjectCost = 2113507;
    this.CurrentExpenditure = 96788;
    this.AvailableFunds = 52536;
  }

  getUserDetails():any {
    this.baseService.getUsers().subscribe((item:any) => {
      this.Users = item;
      console.log('userList', this.Users);
    })
  }
}

