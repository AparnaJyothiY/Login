import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  welcome: "Hi, How are you!!!";
  constructor(private router : Router) { }

  ngOnInit() {
  }

  logout() {
    this.router.navigate(['/']);
  }

}
