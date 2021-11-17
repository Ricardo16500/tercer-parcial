import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
    dir: string = "Avenida Pando #540";
    cel: number = 76543214;
  constructor() { }

  ngOnInit(): void {
  }

}
