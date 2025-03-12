import { Component, Input, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [RouterLink],
  selector: 'app-small-card',
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input()
  photoCover: string = ""

  @Input()
  cardTitle: string = ""

  @Input()
  cardDescription:string =""

  @Input()
  Id: string = "0"

  constructor() { }

  ngOnInit(): void {
  }

}
