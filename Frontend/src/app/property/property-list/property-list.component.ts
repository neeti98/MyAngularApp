import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties : Array<any> = [
    {
      "ID" : 1,
      "Type" : "House1",
      "Price" : 12000,
      "Name" : "Big House"
    },
    {
      "ID" : 2,
      "Type" : "House2",
      "Price" : 14000,
      "Name" : "BigB House"
    },
    {
      "ID" : 3,
      "Type" : "House3",
      "Price" : 16000,
      "Name" : "Small House"
    },
    {
      "ID" : 4,
      "Type" : "House4",
      "Price" : 18000,
      "Name" : "Bigzz House"
    },
    {
      "ID" : 5,
      "Type" : "House5",
      "Price" : 20000,
      "Name" : "BigRoom House"
    },
    {
      "ID" : 6,
      "Type" : "House6",
      "Price" : 22000,
      "Name" : "BHK House"
    },

]

  constructor() { }

  ngOnInit() {
  }

}
