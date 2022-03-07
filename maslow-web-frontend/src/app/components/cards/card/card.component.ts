import { Component, Input, OnInit } from '@angular/core';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() project: any;
  
  public url: string;
  
  constructor() {
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

}
