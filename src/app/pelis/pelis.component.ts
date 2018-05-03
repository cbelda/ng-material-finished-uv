import { Component, OnInit } from '@angular/core';
import { PelisService } from '../shared/pelis.service';

@Component({
  selector: 'example-pelis',
  templateUrl: './pelis.component.html',
  styleUrls: ['./pelis.component.scss']
})
export class PelisComponent implements OnInit {

  constructor(private pelisService: PelisService) {
  }

  folders = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];

  ngOnInit() {}

  getUser() {
    this.pelisService.getUser().subscribe(data => {
      debugger
    });
  }

}
