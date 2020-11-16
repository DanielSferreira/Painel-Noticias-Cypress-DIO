import { Component, OnInit } from '@angular/core';
import { Noticia, Noticias } from '../data';

@Component({
  selector: 'app-central-view',
  templateUrl: './central-view.component.html',
  styleUrls: ['./central-view.component.css']
})
export class CentralViewComponent implements OnInit {

  constructor() { }

  noticias: Noticia[];
  ngOnInit(): void {
    this.noticias = Noticias;
  }

}
