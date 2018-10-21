import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import { RpgService } from './rpg.services';

@Component({
  selector: 'gx-rpg',
  templateUrl: './rpg.component.html',
  styleUrls: ['./rpg.component.less']
})
export class RpgComponent implements OnInit {

  rpgs: Category;
  columns: string[];

  constructor(private rpgService: RpgService) { }

  ngOnInit() {
    
    this.rpgService.action()
    .subscribe(rpgs => this.rpgs = rpgs);
    this.columns = this.rpgService.getColumns(); 
  }

}
