import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
miNumero: number;
miNombre: string;
cualquierCosa: any;
miFecha: Date;
miArray: any;

  constructor() { }

  ngOnInit(): void {
this.miNombre = '';
this.miNumero = 0;
this.cualquierCosa = {'hola':1};
this.miFecha = new Date;
let arr = [1,2,3,4,5];
this.miArray = [1,2,3,4,5];
console.log(this.cualquierCosa);
  }

mostrar(){
  alert('este es mi numero');
}

}
