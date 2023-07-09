import { Component, Output, OnInit, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ActiveLinkService } from 'src/app/app-services/active-link.service';

@Component({
  selector: 'app-project-page',
  templateUrl: './project-page.component.html',
  styleUrls: ['./project-page.component.css'],
  providers: [ActiveLinkService]
})
export class ProjectPageComponent implements OnInit{
  description: string = "This website uses IGDB API 'https://www.igdb.com/' contains"+
  " information about games and other games youd like to know more about. you can filter your search or search a specific game name "+
  ",this project was created to showcase my skills in using different API and angular tools and using html and css for frontend.";
  @Output() projectrouteIsActive = new EventEmitter()
  constructor(private activeLink: ActiveLinkService, private route: ActivatedRoute) {
    this.activeLink.setHomeState("Message from home");
  }

  ngOnInit(): void {
  }

}