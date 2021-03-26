import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-system-solution',
  templateUrl: './system-solution.page.html',
  styleUrls: ['./system-solution.page.scss'],
})
export class SystemSolutionPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  navigate() {
    console.log('Navigationnn ');
    this.router.navigate(['/systemreseted']);
  }
}
