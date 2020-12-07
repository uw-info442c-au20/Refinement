import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.css']
})
export class HomeContentComponent implements OnInit {

  public showDressLabel = false;
  public showJacketLabel = false;
  public showShoesLabel = false;
  public showFitnessLabel = false;

  constructor(
    public router: Router
  ) { 
    
  }

  ngOnInit(): void {
    
  }

  onCategoryClicked(category: any): void {
    let brand = '';
    switch (category) {
      case 'dress':
        brand = 'forever_21';
        break;
      case 'jacket': 
        brand = 'hollister';
        break;
      case 'shoes': 
        brand = 'american_eagle';
        break;
      case 'fitness': 
        brand = 'uniqlo';
        break;
      default: 
        break;
    }
    this.router.navigate(['/brands', brand]);

  }


  onHover(type: any): void {
    switch (type) {
      case 'dress':
          this.showDressLabel = true;
          break;
      case 'jacket':
          this.showJacketLabel = true;
          break;
      case 'shoes':
          this.showShoesLabel = true;
          break;
      case 'fitness':
          this.showFitnessLabel = true;
          break;
      default:
        break;
    }
  }
  
  unHover(type: any): void {
    switch (type) {
      case 'dress':
          this.showDressLabel = false;
          break;
      case 'jacket':
          this.showJacketLabel = false;
          break;
      case 'shoes':
          this.showShoesLabel = false;
          break;
      case 'fitness':
          this.showFitnessLabel = false;
          break;
      default:
        break;
    }
  }

}
