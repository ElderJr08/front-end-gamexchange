import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { AdventureService } from './adventure.service';

@Component({
  selector: 'gx-adventure',
  templateUrl: './adventure.component.html',
  styleUrls: ['./adventure.component.less']
})
export class AdventureComponent implements OnInit {

  adventures: Category;
  columns: string[];

  constructor(private adventureService: AdventureService) { }

  ngOnInit() {
    
    this.adventureService.action()
    .subscribe(adventures => this.adventures = adventures);
    this.columns = this.adventureService.getColumns(); 
  }

}
