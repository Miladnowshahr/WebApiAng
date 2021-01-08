import { Component } from "@angular/core";
import {} from '@angular/core';

@Component({
  selector:'app-property-card',
  //template:`<h1>I am card</h1>`,
  templateUrl:'property-card.component.html',
  styleUrls:['property-card.component.css']

})


export class PropertyCardComponent{
  Property:any={
    "Id":1,
    "Name":"Beautiful House",
    "Type":"House",
    "Price":12000
  }
}
