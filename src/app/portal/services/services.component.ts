import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css'],
})
export class ServicesComponent implements OnInit {
  services: any = {};

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.http.get('../.../../../../assets/config/app-config.json').subscribe((config: any) => {
      this.services = config['services'];
    });
  }

  get serviceList() {
    return Object.keys(this.services)
  }
}
