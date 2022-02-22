import { Component, OnInit } from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit {

  constructor(private viewportscroller : ViewportScroller) { }

  ngOnInit(): void {
  }

  onclick(id : string){
    this.viewportscroller.scrollToAnchor(id);
  }
}
