import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class WelcomePage implements OnInit {

  showSplash = true;
  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.showSplash = false;

      this.router.navigateByUrl('home');

    }, 5000);
  }
}
