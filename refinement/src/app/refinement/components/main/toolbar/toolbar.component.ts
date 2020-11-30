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
