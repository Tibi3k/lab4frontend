import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { GoogleUserData } from './model/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const token = params['token'];
      console.log('Received token:', token);
      if(token != undefined)
        this.authService.setAccessToken(token)
      const user = params['user'];
      console.log('Recived user:',user)
      if(user != undefined)
        this.authService.setUser(new GoogleUserData(user))
      //this.router.navigate([], { queryParams: {} });
    });
  }}
