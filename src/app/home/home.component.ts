import { Component, OnInit } from '@angular/core';
import {DataStore,AlmacenService,DataClientes,DataVentas} from '../almacen/almacen.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  datos: DataStore[]=[{
    id:1,
    name: 'paracetamol',
    price: 1.50,
    cant: 10,
    },
    {
      id:2,
      name: 'Ibuprofeno',
      price: 0.8,
      cant: 25,
    },
    {
      id:3,
      name: 'Diclofenaco',
      price: 2.5,
      cant: 30,
    }];

  constructor(private almacen:AlmacenService) {
    this.almacen.setDataStore(this.datos);
  }

  ngOnInit(): void {
  }

}
