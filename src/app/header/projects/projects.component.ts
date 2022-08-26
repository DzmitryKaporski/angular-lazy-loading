import { Projects } from './projects.interface';
import { PROJECTS } from './projects.data';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projectsList: Projects[] = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
