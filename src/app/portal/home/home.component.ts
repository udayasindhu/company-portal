import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  homeMenu: Array<string> = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../../../assets/config/app-config.json')
      .subscribe((config: any) => this.homeMenu = config['menu']);
    this.loadHome();
  }

  loadHome() {
    window.addEventListener("scroll", () => {
      let bg = document.getElementById("bg");
      let bee = document.getElementById("bee");
      let river = document.getElementById("river");
      let compName = document.getElementById("companyName");
      let tag = document.getElementById("tagLine");
      var value = window.scrollY;
      if (bg && bee && river && compName && tag) {
        bg.style.top = value * 0.5 + "px";
        bee.style.left = -value * 0.5 + "px";
        river.style.top = value * 0.15 + "px";
        compName.style.top = value * 1 + "px";
        tag.style.top = value * 0.15 + "px";
      }
    });
  }

  goTo(choosenMenu: string) {
    let menu = document.getElementById(choosenMenu) as HTMLElement;
    menu?.scrollIntoView();
  }

}
