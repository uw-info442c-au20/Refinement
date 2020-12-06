import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css']
})
export class BrandsComponent implements OnInit {

  public brand: any;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.brand = this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.brand = params.get('brand');
      console.log(this.brand);
    });  
  }

}
