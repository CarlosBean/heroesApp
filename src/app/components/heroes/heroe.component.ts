import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: []
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  esNuevo = false;
  id: string;

  constructor(public heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params
      .subscribe(params => {
        console.log('Params', params);
        this.id = params['id'];
        if (this.id !== 'nuevo') {
          this.heroesService.obtenerHeroe(this.id)
            .subscribe((heroe: Heroe) => {
              this.heroe = heroe;
            });
        }
      });
  }

  ngOnInit() {
  }

  agregarNuevo(forma: NgForm) {
    this.router.navigate(['/heroe', 'nuevo']);
    forma.reset({
      casa: 'Marvel'
    });
  }

  guardar() {
    console.log('HEROE', this.heroe);
    if (this.id === 'nuevo') {
      this.heroesService.crearHeroe(this.heroe)
        .subscribe(data => {
          console.log('CREATED OK');
          this.router.navigate(['/heroe', data['name']]);
        },
          error => console.log('ERROR', error)
        );
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id)
        .subscribe(data => {
          console.log('UPDATED OK', data);
          // this.router.navigate(['/heroe', data['name']]);
        },
          error => console.log('ERROR', error)
        );
    }
  }
}
