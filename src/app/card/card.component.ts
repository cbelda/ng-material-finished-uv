import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'example-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  @Input() IMG: string;
  @Input() NAME: string;
  constructor() { }

  ngOnInit() {
  }

}
