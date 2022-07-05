import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../guards/auth.service';

@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  local:any
  constructor(private authService:AuthService,private route:Router) { }

  ngOnInit(): void {
    this.local = localStorage
  }
  logout(){
    this.authService.logout();
    this.route.navigate(['/login']);
  }

}
