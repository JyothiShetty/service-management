import { JsonPipe } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Router, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [JsonPipe, MatButtonModule, RouterOutlet, MatCardModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent implements OnInit {

  http = inject(HttpClient);
  userList: any[] = [];
  router = inject(Router);
  // constructor(private router: Router) {}

  ngOnInit(): void {
    this.getAllUser();
  }
  getAllUser() {
    this.http.get("https://freeapi.miniprojectideas.com/api/User/GetAllUsers").subscribe((res: any) => {
      this.userList = res.data;
    })
  }

  onServiceClick() {
    this.router.navigate(['service-request']);
  }

  onIncidentClick() {
    this.router.navigate(['incident-request']);
  }

}
