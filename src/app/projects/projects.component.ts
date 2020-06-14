import { Component, OnInit } from '@angular/core';
import { faTwitter, faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  faGithub = faGithub;

  constructor() { }

  ngOnInit(): void {
  }

}
