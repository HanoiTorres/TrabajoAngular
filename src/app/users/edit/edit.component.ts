import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  userId: any;
  constructor(private route: ActivatedRoute) { 
    this.userId= '';


    
  }

  ngOnInit(): void {
    this.userId = this.route.snapshot.paramMap.get("id");
    console.log("USERID =>", this.userId);
  }

}


//CREAR EN FIREBASE UNA COLECCION LLAMADA LIBROS
//DEBEN PODER editarse: activateRoute QueryParams
//Deben poder eliminarse: pueden usar rounter en link directamente o por medio de un metodo
//Debe solo enviarse el ID del libro a editar o a eliminar

