import { Component, OnInit, Input } from '@angular/core';
import {
  NgForm,
  FormBuilder,
  FormGroup,
  Validators,
  FormControl
} from '@angular/forms';
import { Heroe } from '../../interfaces/heroe';
import { HeroesService } from '../../services/heroes.service';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { NumberDirective } from '../../directives/number.directive';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {
  precio: string;
  probando: string;

  heroe: Heroe = {
    nombre: '',
    bio: '',
    casa: 'Marvel'
  };

  esNuevo = false;
  id: string;

  constructor(
    public heroesService: HeroesService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {
    this.activatedRoute.params.subscribe(params => {
      console.log('Params', params);
      this.id = params['id'];
      if (this.id !== 'nuevo') {
        this.heroesService.obtenerHeroe(this.id).subscribe((heroe: Heroe) => {
          this.heroe = heroe;
        });
      }
    });
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
      this.heroesService.crearHeroe(this.heroe).subscribe(
        data => {
          console.log('CREATED OK');
          this.router.navigate(['/heroe', data['name']]);
        },
        error => console.log('ERROR', error)
      );
    } else {
      this.heroesService.actualizarHeroe(this.heroe, this.id).subscribe(
        data => {
          console.log('UPDATED OK', data);
          // this.router.navigate(['/heroe', data['name']]);
        },
        error => console.log('ERROR', error)
      );
    }
  }

  public prueba() {
    Swal({
      title: 'Prueba utilizando SweetAlert2',
      html: `
      <div class="form-group">
      <div class="left-inner-addon">
        <i class="icon-user">$</i>
        <input
            type="text"
            class="form-control"
            placeholder="0.0"
        >
        </div>
      </div>
      `,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: '<i class="fa fa-thumbs-up"></i> OK!',
      confirmButtonAriaLabel: 'Thumbs up, great!',
      cancelButtonText: '<i class="fa fa-thumbs-down"></i>',
      cancelButtonAriaLabel: 'Thumbs down'
    });
  }

  aplicarMascara() {
    this.precio = this.precio.replace(/[^\d]+/g, '');
    this.precio = this.precio.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.');
  }

  validarCaracter(event: KeyboardEvent) {
    const onlyNum = /[^\d]+/g;
    const inputChar = String.fromCharCode(event.charCode);
    if (onlyNum.test(inputChar)) {
      event.preventDefault();
    } else if (inputChar === '0' && this.precio === '0') {
      event.preventDefault();
    }
  }

  parser() {
    this.probando = NumberDirective.parser(this.probando);
    console.log(this.probando);
  }

  transform() {
    this.probando = NumberDirective.transform(this.probando);
    console.log(this.probando);
  }
}
