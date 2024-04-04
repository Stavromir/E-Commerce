import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'app/admin/service/admin.service';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrl: './analytics.component.scss'
})
export class AnalyticsComponent {

  analyticsData: any;

  constructor(
    private adminService: AdminService,
    private snackBar: MatSnackBar,
  ){}

  ngOnInit(){
    this.getAnalytics();
  }

  getAnalytics(){
    this.adminService.getAnalytics().subscribe(
      res=>{
        this.analyticsData = res;
      }
    )
  }

}
