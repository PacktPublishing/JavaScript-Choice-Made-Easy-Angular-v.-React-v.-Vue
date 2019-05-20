import { Component, OnInit } from '@angular/core';

declare const particlesJS: any;

const PARTICLES_CONFIG_PATH = 'assets/config/particlesjs-config.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    particlesJS.load('particles-js', PARTICLES_CONFIG_PATH, null);
  }
}
