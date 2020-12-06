import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit(): void {
    
  }

  onCategoryClicked(category: any): void {
    // navigate to new page of selected category

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
