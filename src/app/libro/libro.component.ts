import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { LibroService } from '../services/libro.service';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {
libros:any;
libroId: string;


  constructor(private libroService: LibroService
    ,private route: ActivatedRoute,
    private router: Router) {

this.libroId = '';

    this.route.queryParams.subscribe(params => {

     
      this.libros = this.router.getCurrentNavigation().extras.state.libro;
      
      
      });

   }



  ngOnInit(): void {

this.listLibros();

  }


  editLibro(id){

  }

  deleteLibro(){

  }

async  listLibros(){
  await (await this.libros.getAll()).subscribe(res => {
    this.libros = res;
  })
  }
// En este ejemplo se accedera por medio del evento on click
 goToEditLibro(id: string){
   console.log(' USUARIO =>',id);
this.router.navigate(['/libros',id]);
 } 


}
