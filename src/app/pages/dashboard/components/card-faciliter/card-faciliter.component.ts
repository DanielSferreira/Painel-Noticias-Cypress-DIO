import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-faciliter',
  templateUrl: './card-faciliter.component.html',
  styleUrls: ['./card-faciliter.component.css']
})
export class CardFaciliterComponent implements OnInit {

  constructor() { }

  @Input() title: string;
  @Input() url: string;
  @Input() descricao: string;

  ngOnInit(): void {
  }

}
