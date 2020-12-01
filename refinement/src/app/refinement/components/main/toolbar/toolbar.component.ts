import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {

  public tabs = [
    {
      label: 'HOME',
      route: 'home'
    },
    {
      label: 'PRODUCT',
      route: 'product'
    },
    {
      label: 'BRAND',
      route: 'brand'
    },
    {
      label: 'ABOUT US',
      route: 'about-us'
    },
  ];

  public brands = [
    {
      label: 'Abercrombie & Fitch',
      route: 'abercrombie-and-fitch'
    },
    {
      label: 'Hollister',
      route: 'hollister'
    },
    {
      label: 'H&M',
      route: 'hm'
    },
    {
      label: 'Forever 21',
      route: 'forever-21'
    },
  ];

  constructor(
    public router: Router,
  ) { }

  ngOnInit(): void {
  }

  onButtonClick(tab: any): void {
    console.log(tab);
    this.router.navigate([`/${tab}`]);
  }

}
