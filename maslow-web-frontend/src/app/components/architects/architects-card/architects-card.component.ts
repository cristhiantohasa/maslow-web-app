import { Component, Input, OnInit } from '@angular/core';
import { Global } from '../../../services/global';

@Component({
  selector: 'app-architects-card',
  templateUrl: './architects-card.component.html',
  styleUrls: ['./architects-card.component.css']
})
export class ArchitectsCardComponent implements OnInit {

  @Input() architect: any;

  public url: string;
  
  constructor() {
    this.url = Global.url;
  }

  ngOnInit(): void {
  }

}
