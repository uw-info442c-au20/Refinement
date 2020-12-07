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
    // {
    //   label: 'PRODUCT',
    //   route: 'product'
    // },
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
      label: '& Other Stories',
      route: 'and_other_stories'
    },
    {
      label: 'Abercrombie & Fitch',
      route: 'abercrombie_and_fitch'
    },
    {
      label: 'American Eagle',
      route: 'american_eagle'
    },
    {
      label: 'Celine',
      route: 'celine'
    },
    {
      label: 'Everlane',
      route: 'everlane'
    },
    {
      label: 'Forever 21',
      route: 'forever_21'
    },
    {
      label: 'Free People',
      route: 'free_people'
    },
    {
      label: 'Girlfriend Collective',
      route: 'girlfriend_collective'
    },
    {
      label: 'H&M',
      route: 'hm'
    },
    {
      label: 'Hollister',
      route: 'hollister'
    },
    {
      label: 'Macys',
      route: 'macys'
    },
    {
      label: 'Madewell',
      route: 'madewell'
    },
    {
      label: 'Mango',
      route: 'mango'
    },
    {
      label: 'Mara Hoffman',
      route: 'mara_hoffman'
    },
    {
      label: 'Nordstrom',
      route: 'nordstrom'
    },
    {
      label: 'Reformation',
      route: 'reformation'
    },
    {
      label: 'Topshop',
      route: 'top_shop'
    },
    {
      label: 'Uniqlo',
      route: 'uniqlo'
    }
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

  onBrandSelected(brand: any): void {
    console.log(brand);
    this.router.navigate(['/brands', brand]);
  }

}
